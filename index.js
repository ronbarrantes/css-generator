const input = process.argv[2]
const output = process.argv[3] || 'AUTO-GENERATED.css'

const { createCssFromHtml } = require('./src/createCssFromHtml')

createCssFromHtml(input, output)