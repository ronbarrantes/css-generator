import fs from 'fs/promises'
import path from 'path'

// import { sample } from '../utils/pathParser.js'

import { findHtmlTags, separateSelectors,  createCssTags } from '../utils/html-css-processor.js'

export const createCssFromHtml = async (input, output) => {
	try{
		if(!input || (path.extname(input) !== '.html' && path.extname(input) !== '.htm'))
			throw new Error('Please use an .html file')

	const filePaths = process.cwd()

	const htmlPath = path.join(filePaths, input)

	const data = await fs.readFile(htmlPath)
		const strData = data.toString()
		const cssProps = findHtmlTags(strData)
		const cssTags = separateSelectors(cssProps)
		const textTags = createCssTags(cssTags)

		const cssOutputPath = path.join(filePaths, output)
		await fs.writeFile(cssOutputPath, textTags)
		console.log('ALL DONE')	
	} catch(err){
		console.error('ERROR:', err.message)
	}
}