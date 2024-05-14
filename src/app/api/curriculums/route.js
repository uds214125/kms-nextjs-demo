import { NextResponse } from "next/server";
export async function GET(req) {
    console.log(req);
    return NextResponse.json({"status": 200, "message":"OK Curriculum route"});
}
// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }