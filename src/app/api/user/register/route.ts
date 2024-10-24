import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import userModel from "../../../../../models/userModel";
import { dbConnect } from "../../../../../helpers/connectDB";
dbConnect()
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  console.log("reqBody", reqBody);
  try {
    const { firstName, lastName, email, password,username } = reqBody;
    const user = await userModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: {
            response: "Email Already Exist",
          },
        },
        { status: 409 }
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      firstName,
      lastName,
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return NextResponse.json(
      {
        success: true,
        message: "User registered",
        newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error); 
    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
      },
      { status: 500 }
    );
  }
}
