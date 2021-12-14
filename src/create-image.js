import { exec } from "child_process";
import path from "path";
import { promisify } from "util";
import { imageBaseName, outAssetsDir } from "./globals.js";
const execPromise = promisify(exec);

function createImage({ gradient, format }) {
    const { title, extension } = format;
    const output = path.join(outAssetsDir, `${imageBaseName}.${extension}`);

    const opts = [
        `-size 640x120 gradient:${gradient}`,
        `-fill white -undercolor "#00000090"`,
        `-gravity Center`,
        `-pointsize 24`,
        `-annotate +0+5 "${title}"`,
        `-append`,
        `-quality 90%`,
        `"${output}"`,
    ].join(" ");

    return execPromise(`convert ${opts}`);
};

export { createImage };
