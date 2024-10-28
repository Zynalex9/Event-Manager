import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import eventModel from "../../../../../models/eventModel";
import userModel from "../../../../../models/userModel";
import { dbConnect } from "../../../../../helpers/connectDB";
dbConnect()
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { eventId, userId } = reqBody;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: "You need to login before joing the event",
        },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Event Does not exist",
        },
        { status: 400 }
      );
    }
    const event = await eventModel.findById(eventId);
    if (!event || event.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Event Does not exist !!",
        },
        { status: 400 }
      );
    }
    const user = await userModel.findById(userId);
    if (!user || user.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User not authenticated!!",
        },
        { status: 400 }
      );
    }
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const updatedAttendee = await eventModel.updateOne(
      { _id: eventId, attendees: userObjectId },
      { $pull: { attendees: userObjectId } },
      { new: true }
    );
    return NextResponse.json(
      {
        success: true,
        message: `${user.firstName} has left the ${event.title} event`,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        message: "Error processing request",
        success: false,
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
