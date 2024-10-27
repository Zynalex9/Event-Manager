import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "../../../../../helpers/connectDB";
import eventModel from "../../../../../models/eventModel";
dbConnect();
export async function GET(request: NextRequest) {
  console.log("request", request);
  try {
    const events = await eventModel.find();
    return NextResponse.json(
      {
        success: true,
        message: "list of all events",
        events,
      },
      { status: 200 }
    );
  } catch (error:unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
