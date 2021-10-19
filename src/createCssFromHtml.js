import fs from 'fs/promises'
import path from 'path'

import { stripHtml, separateProps,  createCssTags } from './utils/htmlCssProcessor.js'

export const createCssFromHtml = async (input, output) => {
	console.log(input, output)
	try{
		if(!input || (path.extname(input) !== '.html' && path.extname(input) !== '.htm'))
			throw new Error('Please use an .html file')

	const filePaths = process.cwd()

	const htmlPath = path.join(filePaths, input)

	const data = await fs.readFile(htmlPath)
	console.log(data.toString())
		const strData = data.toString()
		const cssProps = stripHtml(strData)
		const cssTags = separateProps(cssProps)
		const textTags = createCssTags(cssTags)

		const cssOutputPath = path.join(filePaths, output)
		console.log(cssOutputPath)
		await fs.writeFile(cssOutputPath, textTags)
		console.log('ALL DONE')



	
	} catch(err){
		console.error('ERROR:', err.message)
	}
}