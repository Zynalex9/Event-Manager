import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import eventModel from "../../../../../../models/eventModel";
import { dbConnect } from "../../../../../../helpers/connectDB";
dbConnect()
export async function GET(
  request: NextRequest,
  { params }: { params: { user: string } }
) {
  try {
    const { user } = params;

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return NextResponse.json(
        { success: false, message: `Invalid user ID '${user}'` },
        { status: 400 }
      );
    }

    const events = await eventModel.find({ host: user });

    if (!events || events.length === 0) {
      return NextResponse.json(
        { success: false, message: `No events found for user '${user}'` },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, events }, { status: 200 });
  } catch (error:any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request", success: false, error: error?.message },
      { status: 500 }
    );
  }
}
