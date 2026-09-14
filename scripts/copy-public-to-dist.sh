#!/bin/sh
set -eu

PUBLIC_DIR="public"
DIST_DIR="dist"

if [ ! -d "$PUBLIC_DIR" ]; then
  echo "No public directory found at $PUBLIC_DIR"
  exit 0
fi

mkdir -p "$DIST_DIR"

find "$PUBLIC_DIR" -mindepth 1 ! -name "index.html" | while IFS= read -r src; do
  rel="${src#"$PUBLIC_DIR"/}"
  dest="$DIST_DIR/$rel"

  if [ -d "$src" ]; then
    mkdir -p "$dest"
  else
    mkdir -p "$(dirname "$dest")"
    cp "$src" "$dest"
  fi
done
