#!/usr/bin/env bash
# Usage: scripts/set-domain.sh brickpaverscfl.com
# Switches canonical/OG/sitemap/robots URLs to the custom domain and writes CNAME.
set -euo pipefail
d="${1:?usage: $0 <domain, e.g. brickpaverscfl.com>}"
old="https://rodrigocostacamargos.github.io/brickpavers/"
new="https://${d}/"
cd "$(dirname "$0")/.."
sed -i "s|${old}|${new}|g" index.html sitemap.xml robots.txt
echo "$d" > CNAME
echo "OK: URLs now point to ${new} and CNAME written."
