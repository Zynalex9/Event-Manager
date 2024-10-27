import { NextResponse, NextRequest } from "next/server";
import userModel from "../../../../../models/userModel";
import eventModel from "../../../../../models/eventModel";
import mongoose from "mongoose";

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

    const checkValidId = await userModel.findOne({ _id: userId });
    if (!checkValidId) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login to join this event",
        },
        { status: 402 }
      );
    }

    const isEvent = await eventModel.findOne({ _id: eventId });
    if (!isEvent) {
      return NextResponse.json(
        {
          success: false,
          message: "No event exists",
        },
        { status: 402 }
      );
    }
  if (isEvent.attendees.includes(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: "You are already joined to this event",
        },
        { status: 409 } 
      );
    }
    const updatedAttendee = await eventModel.findByIdAndUpdate(eventId, {
      $push: { attendees: checkValidId._id },
      new:true
    });

    return NextResponse.json(
      {
        success: true,
        message: "You have joined this event",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
