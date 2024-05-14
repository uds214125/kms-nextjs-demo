import { NextResponse } from "next/server";
// Get by id
// export async function GET(req, context) {
//     console.log(' id ', context.params.id);
//     return NextResponse.json({"status": 200, "message":"OK", data: context.params.id});
// }
// http://localhost:3000/api/2
export const GET = async (req, {params})=> {
    console.log(' id ', params.id);
    return NextResponse.json({"status": 200, "message":"OK get by id", data: [params.id]});
}