import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "../../../../../helpers/connectDB";
import eventModel from "../../../../../models/eventModel";
import userModel from "../../../../../models/userModel";
dbConnect();
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const {
    title,
    shortDescription,
    longDescription,
    date,
    location,
    host,
    public_id,
  } = reqBody;
  try {
    const isTitle = await eventModel.findOne({ title });
    if (isTitle) {
      return NextResponse.json(
        {
          success: false,
          message: "This title already exist already exist",
        },
        { status: 409 }
      );
    }
    const newEvent = new eventModel({
      title,
      shortDescription,
      longDescription,
      date,
      location,
      host,
      public_id
    });
    await newEvent.save();
    await userModel.findByIdAndUpdate(host, {
      $push: { eventHosted: newEvent._id },
      new: true,
    });
    return NextResponse.json(
      {
        success: true,
        message: "New Event added",
        event: newEvent,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
