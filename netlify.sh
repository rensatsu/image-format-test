#!/usr/bin/env bash
set -o errexit
set -o pipefail
set -o nounset

curl -L https://download.imagemagick.org/ImageMagick/download/binaries/magick -o magick.AppImage

alias convert='./magick.AppImage'
alias magick='./magick.AppImage'
