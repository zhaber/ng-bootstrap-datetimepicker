#!/bin/bash
set -o errexit -o nounset -o xtrace
npm run packagr
cd dist
npm login
npm pack
npm publish --access=public
