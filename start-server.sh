#!/bin/bash

# Simple local web server for testing the portfolio site
# This script starts a Python HTTP server on port 8000

PORT=8000
DIR="portfolio"

echo "🚀 Starting local web server..."
echo "📁 Serving directory: $DIR"
echo "🌐 Server running at: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd "$DIR" && python3 -m http.server $PORT
