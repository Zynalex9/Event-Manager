import { NextRequest, NextResponse } from "next/server";
import userModel from "../../../../../../models/userModel";

export async function GET( request: NextRequest, { params }: { params: { user: string } }) {
  const { user } = params;
  try {
    const isUser = await userModel.findOne({ username:user });
    if (!isUser) {
      return NextResponse.json({
        message: `No user found by username by ${user}`,
        success:false
      },{status:404});
    }
    return NextResponse.json({
        message:"User found",
        isUser
      })
  }  catch (error:any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request", success: false, error: error?.message },
      { status: 500 }
    );
  }
}
