#!/bin/sh -e
for f in *.cs; do tr -d '\r' < "$f" > "$f"; done
