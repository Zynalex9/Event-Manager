import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "../../../../../helpers/connectDB";
dbConnect();
export async function DELETE(request:NextRequest) {
const reqBody = await request.json()  

}
