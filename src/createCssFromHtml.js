const fs = require('fs/promises')
const path = require('path')

const stripHtml = (htmlString) => {
	let isLogging = false
	const stylesProps = new Set()
	let strLine = ''

	for(let idx = 0; idx < htmlString.length; idx++) {
		const char = htmlString[idx]

		if(!isLogging){
			if(char === '<' && htmlString[idx + 1] !== '/'){
				isLogging = true
			}
		} else {
			if(char === '>'){
				isLogging = false
				if(strLine.length !== 0){
					stylesProps.add(strLine)
					strLine = ''
				}
				continue
			}

			if(char === `'`)
				strLine += `"`
			else if(char === '=')
				strLine += ' '
			else
				strLine += char
		}
	}

	return stylesProps
}

const separateProps = (data) => {
	const propsMap = new Map([
		['tag', new Set()],
		['id', new Set()],
		['class', new Set()],
	])

	// REMOVE EVERYTHING BEFORE THE BODY
	let dataArr = [...data]
	const bodyIdx = dataArr.indexOf('body')
	dataArr = dataArr.slice(bodyIdx)

	for(let line of dataArr){
		// CLEANUP
		const lineArr = line
			.split(/\s/)
			.filter(word => word.length > 0)

		const tag = lineArr.shift()
		line = lineArr.join(' ')

		// GET THE TAGS
		propsMap.get('tag').add(tag)

		if(line.length === 0)
			continue

		// GET IDs OR CLASSES
		let idOrClass = ''
		let prop = ''
		let isLogging = false

		for(let i = 0; i < line.length; i++){
			const char = line[i]
			if(!isLogging){
				if(char === '"'){
					isLogging = true
					idOrClass = idOrClass.trim().toLowerCase()
					prop = ''
					continue
				}
				idOrClass += char
			} else {
				if(char === '"'){
					isLogging = false
					if(idOrClass === 'id')
						propsMap.get('id').add(prop)
					if(idOrClass === 'class')
						prop.split(' ').forEach(item => propsMap.get('class').add(item))
					idOrClass = ''
					continue
				}
				prop += char
			}
		}
	}
	// REMOVE THE PESKY SCRIPT TAG
	propsMap.get('tag').delete('script')
	return propsMap
}

const createCssTags = (tagMap) => {
	let text = ''
	text+='/*** TAGS ***/\n'
	tagMap.get('tag').forEach(item => text +=`${item} {}\n`)

	if(tagMap.get('id').size !== 0){
		text+='\n/*** IDs ***/\n'
		tagMap.get('id').forEach(item => text +=`#${item} {}\n`)
	}

	if(tagMap.get('class').size !== 0){
		text+='\n/*** CLASSES ***/\n'
		tagMap.get('class').forEach(item => text +=`.${item} {}\n`)
	}

	return text
}

const createCssFromHtml = async (input, output) => {


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

module.exports = { createCssFromHtml }