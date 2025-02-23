// utils/getBlurData.js
import { getPlaiceholder } from "plaiceholder";
import path from "path";
import fs from "fs/promises";

export const getBlurData = async (src) => {
  try {
    const filePath = path.join(process.cwd(), "public", src);
    const file = await fs.readFile(filePath);
    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (error) {
    console.error("Error generating blur data for", src, error);
    return "";
  }
};
