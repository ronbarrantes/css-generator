import fs from 'fs/promises'
import { paths } from '../utils/path-parser.js'

import { findHtmlTags, separateSelectors, stringifySelectors } from '../utils/html-css-processor.js'

export const createCssFromHtml = async () => {
	try{
		const data = await fs.readFile(paths.input)
		const strData = data.toString()
		const cssProps = findHtmlTags(strData)
		const cssTags = separateSelectors(cssProps)
		const textTags = stringifySelectors(cssTags)
		await fs.writeFile(paths.output, textTags)
		console.log(`A css file was created at "${paths.outputRel}"`)
	} catch(err){
		console.error('ERROR:', err.message)
	}
}