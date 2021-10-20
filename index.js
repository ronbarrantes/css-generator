const input = process.argv[2]
const output = process.argv[3] || 'AUTO-GENERATED.css'

import { createCssFromHtml } from './src/lib/create-css-from-html.js'

createCssFromHtml()