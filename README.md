# image-format-test
Simple website to test available image formats in browsers

## Create demo images
Use imagemagick to create demo images:

```bash
convert wall.png -sepia-tone 80% -resize '640x360^' -crop '640x100+0+0' label:JPEG -gravity Center -append -quality 80% test.jpg
convert wall.png -resize '640x360^' -crop '640x100+0+0' label:WebP -gravity Center -append -quality 80% test.webp
convert wall.png -resize '640x360^' -crop '640x100+0+0' label:AVIF -gravity Center -append -quality 80% test.avif
convert wall.png -resize '640x360^' -crop '640x100+0+0' label:HEIC -gravity Center -append -quality 80% test.heif
```
