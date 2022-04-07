# lighthouse-to-spreedsheet

## How it works
Lighthouse is a tool created by Google to evaluate sites quality. This script get the json output from a lib called [lighthouse-batch](https://www.npmjs.com/package/lighthouse-batch) and process it to output a spreadsheet friendly summaryt format to paste in your favorite spreedsheet app.

## Dependencies
- Fs
- Clipboardy

## Step by Step
**1. Run lighthouse do get your data** ``$ lighthouse-batch -f exemple.txt -o exemple``
**2. Process the file**
``$ node lighthouse-to-spreedsheet exemple/summary.json`` 
**3. Paste in your spreedsheet**
