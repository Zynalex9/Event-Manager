import { NextRequest } from "next/server";
import eventModel from "../../../../../../models/eventModel";
import { dbConnect } from "../../../../../../helpers/connectDB";
dbConnect()
export async function GET(
  request: NextRequest,
  { params }: { params: { searchterm: string } }
) {
  try {
    const { searchterm } = params; 
    const regex = new RegExp(searchterm, "i");
    const events = await eventModel.find({ title: { $regex: regex } });
    if (events.length === 0) {
      return Response.json(
        { success: false, message: `No event found for ${searchterm}` },
        { status: 404 }
      );
    }
    return Response.json({ success: true, events }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return Response.json(
      { message: "Error processing request", success: false },
      { status: 500 }
    );
  }
}
