import { Format } from "./format.js";

export const formats = new Set([
    new Format({ extension: "webp", title: "WebP", mime: "image/webp" }),
    new Format({ extension: "avif", title: "AVIF", mime: "image/avif" }),
    new Format({ extension: "heic", title: "HEIF/HEIC", mime: ["image/heif", "image/heic"] }),
    new Format({ extension: "jxl", title: "JPEG XL", mime: "image/jxl" }),
]);
