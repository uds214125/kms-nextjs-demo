import { NextResponse } from "next/server";
import connectMDB from "../../_lib/connectMDB";
import PostModal from "../../models/Post";
export async function GET(req) {
    // const requestHeaders = new Headers(req.headers);
    // const {search, searchParams} = new URL(req.url); // req.nextUrl.searchParams
    // console.log(searchParams.get("name"));
    // return NextResponse.json({"status": 200, "message":"OK"});

    try {
        await connectMDB();
        const rs = await PostModal.find();
        // const rs = await PostModal.create({
        //     title: "test",
        //     body: "test body"
        // });
        return NextResponse.json({"status": 200, "message":"OK", data : rs});
    } catch (error) {
        return NextResponse.json({"status": 400, "message":"Something went wrong"});
    }
}

export async function POST(req) {
    // const requestHeaders = new Headers(req.headers);    
    console.log(req);
    return NextResponse.json({"status": 200, "message":"OK", data: []});
}