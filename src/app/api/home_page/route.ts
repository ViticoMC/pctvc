import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo_db";
import HomePageInfoModel from "@/models/HomePageInfo";

// GET all home page info
export async function GET() {
  await connectMongo();
  const data = await HomePageInfoModel.findOne();

  return NextResponse.json(data || {});
}
