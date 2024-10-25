import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "../../../../../helpers/connectDB";
import { useSession } from "next-auth/react";
dbConnect();
export async function DELETE() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json(
      {
        success: false,
        message: "User does not authorized",
      },
      { status: 401 }
    );
  }
  
}
