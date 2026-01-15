import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo_db";
import HomePageInfoModel from "@/models/HomePageInfo";

// GET all home page info
export async function GET() {
  console.log("GET /home_page");
  await connectMongo();
  const data = await HomePageInfoModel.findOne();

  console.log(data, "data");
  return NextResponse.json(data || {});
}
