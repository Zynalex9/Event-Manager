import { NextRequest } from "next/server";
import { dbConnect } from "../../../../../helpers/connectDB";
import { createResponse } from "../../../../../helpers/createResponse"; 
import userModel from "../../../../../models/userModel";
import eventModel from "../../../../../models/eventModel";
dbConnect();
export async function DELETE(request: NextRequest) {
  const reqBody = await request.json();
  const { eventId } = reqBody;
  try {
    if (!eventId) {
      return createResponse("No event found", false, null, 404);
    }
    const deletedEvent = await eventModel.findByIdAndDelete(eventId);
    const hostId = deletedEvent.host;
    if (!hostId) {
      return createResponse("No  host found", false, null, 404);
    }
    await userModel.findByIdAndUpdate(hostId, {
      $pull: { eventHosted: eventId },
      new: true,
    });
    return createResponse("Event Deleted", true, null, 201);
  } catch (error: any) {
    console.error("Error deleting event:", error);
    return createResponse("Internal Server Error", false, error.message, 500);
  }
}
