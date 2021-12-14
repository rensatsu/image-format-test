import commandExists from "command-exists";
import fs from "fs-extra";
import path from "path";
import { base } from "./globals.js";

function noop() { }

async function getImagemagick() {
    if (await commandExists("magick").catch(noop)) return "magick";
    if (await commandExists("convert").catch(noop)) return "convert";

    const appImage = path.join(base, "../magick.AppImage");
    if (await fs.exists(appImage)) return appImage;

    throw new Error("Unable to find Imagemagick");
}

export { getImagemagick };
