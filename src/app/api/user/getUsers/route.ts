import { NextRequest, NextResponse } from "next/server";
import userModel from "../../../../../models/userModel";

export async function GET(request: NextRequest) {
  try {
    const users = await userModel.find();
    if (!users) {
      return NextResponse.json(
        {
          message: "No users founds",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
        users,
        success:true
    },{status:201})
  } catch (error:any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request", success: false, error: error?.message },
      { status: 500 }
    );
  }
}
