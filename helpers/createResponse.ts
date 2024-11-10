import { NextResponse } from "next/server";

export async function createResponse(message: string, success:boolean, data:any =null, status:number) {
    return NextResponse.json(
        {
          message,
          success,
          data,
        },
        { status }
      );
    
}