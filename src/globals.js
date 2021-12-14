import path from "path";
import { fileURLToPath } from "url";
import { Liquid } from "liquidjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "/../dist/");
const publicDir = path.join(__dirname, "/../public/");
const indexPath = path.join(outDir, "index.html");
const outAssetsDir = path.join(outDir, "/assets/");
const imageBaseName = "test";

const engine = new Liquid({
    root: path.resolve(__dirname, "templates"),
    extname: ".liquid",
    globals: {
        outDir,
        outAssetsDir,
        imageBaseName,
        publicDir
    }
});

export { publicDir, indexPath, outDir, outAssetsDir, imageBaseName, engine };
