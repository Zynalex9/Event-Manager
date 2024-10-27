import { NextRequest } from "next/server";
import eventModel from "../../../../../../models/eventModel";

export async function GET(
  request: NextRequest,
  { params }: { params: { searchterm: string } }
) {
  try {
    console.log("Parameters:", params);
    const { searchterm } = params; // Destructure the searchterm from params
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
