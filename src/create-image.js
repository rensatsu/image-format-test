import { exec } from "child_process";
import path from "path";
import { promisify } from "util";
import { getImagemagick } from "./get-imagemagick.js";
import { imageBaseName, outAssetsDir } from "./globals.js";
const execPromise = promisify(exec);

async function createImage({ gradient, format }) {
    const { title, extension } = format;
    const output = path.join(outAssetsDir, `${imageBaseName}.${extension}`);

    const opts = [
        `-size 640x120 gradient:${gradient}`,
        `-fill white -undercolor "#00000090"`,
        `-gravity Center`,
        `-pointsize 24`,
        `-font "DejaVu-Sans"`,
        `-annotate +0+5 "${title}"`,
        `-append`,
        `-quality 90%`,
        `"${output}"`,
    ].join(" ");

    const magick = await getImagemagick();

    console.log({ magick, opts });

    return await execPromise(`${magick} ${opts}`);
};

export { createImage };
