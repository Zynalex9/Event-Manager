import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "../../../../../helpers/connectDB";
import eventModel from "../../../../../models/eventModel";
dbConnect();
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { title, shortDescription, longDescription, date, location, host } =
    reqBody;
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
    });
    await newEvent.save();
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
