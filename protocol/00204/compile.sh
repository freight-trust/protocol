#!/bin/bash
# specify your format extentsion
FILES=*.json
for f in $FILES
do
# extension="${f##*.}"
  # optional .extenstion reformat
 filename="${f%.*}"
  echo "compliling $f"
  `ajv compile -s $f -o $filename.js `
  # uncomment this line to delete the source file.
  # rm $f
done
