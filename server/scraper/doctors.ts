
import { supabase } from "../supabaseClient";
import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeDoctors() {
  const url = "https://medcy.in/doctors"; // or other site

  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  const doctors: any[] = [];

  $(".doctor-card").each((_, el) => {
    doctors.push({
      source_site: "medcy",
      slug: $(el).find("a").attr("href") || "",
      name: $(el).find(".doctor-name").text().trim(),
      designation: $(el).find(".doctor-title").text().trim(),
      location: $(el).find(".doctor-location").text().trim(),
      image_url: $(el).find("img").attr("src") || "",
    });
  });

  const { data, error } = await supabase
    .from("sakhi_scraped_doctors")
    .insert(doctors);

  if (error) throw error;

  return data;
}
