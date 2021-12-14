import fs from "fs-extra";
import { createImage } from "./create-image.js";
import { Format } from "./format.js";
import { engine, indexPath, outAssetsDir, outDir, publicDir } from "./globals.js";
import { formats } from "./formats.js";

const fallbackFormat = new Format({
    extension: "jpg",
    title: "JPEG (Fallback)",
    mime: "image/jpeg"
});

async function main() {
    const availFormats = new Set();

    // Create output dir
    await fs.ensureDir(outAssetsDir);

    // Create fallback image
    await createImage({ gradient: "#c32-#e75", format: fallbackFormat });

    // Create test images
    for (const format of formats) {
        const res = await createImage({ gradient: "#23c-#57e", format: format }).catch(e => {
            console.warn("Unable to create test image", { format, e });
        });

        if (res) {
            availFormats.add(format);
        }
    }

    // Render page
    const page = await engine.renderFile("index", {
        formats: [...availFormats],
        fallback: fallbackFormat
    });

    await fs.writeFile(indexPath, page);

    // Copy static public resources
    await fs.copy(publicDir, outDir);
}

await main().catch((e) => {
    console.error(e);
    throw e;
});
