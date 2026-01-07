import { HomePageInfo } from "@/type/home_page";
import mongoose, { Schema } from "mongoose";

const HomePageInfoSchema: Schema = new Schema<HomePageInfo>({
  hero_section: {
    slogan: String,
    slide: [String],
  },
  welcome_section: {
    small_title: String,
    title: String,
    text_1: String,
    text_2: String,
    image: String,
  },
  confluencia_section: {
    title: String,
    empresa_text: String,
    escuela_text: String,
    parque_text: String,
    sector_institucional_text: String,
    title_info: String,
    text_info1: String,
    text_info2: String,
    text_info3: String,
  },
  servicios_section: {
    title: String,
    advantages: [
      {
        title: String,
        description: String,
        gradient: String,
        bgGlow: String,
      },
    ],
  },
  image_bg: String,
  ventajas_section: {
    title: String,
    advantages: [
      {
        title: String,
        description: String,
        bgColor: String,
        textColor: String,
      },
    ],
  },
  articles_section: {
    small_title: String,
    title: String,
  },
  events_section: {
    small_title: String,
    title: String,
    subtitle: String,
  },
  contact_section: {
    small_title: String,
    title: String,
    subtitle: String,
    emails: [String],
    phones: [String],
    extensiones: [String],
    address: [String],
  },
});

export default (mongoose.models.HomePageInfo as mongoose.Model<HomePageInfo>) ||
  mongoose.model<HomePageInfo>("HomePageInfo", HomePageInfoSchema);
