export const findHtmlTags = (htmlString) => {
	let isLogging = false
	const tagList = new Set()
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
					tagList.add(strLine)
					strLine = ''
				}
				continue
			}

			if(char === `'`)
				strLine += `"` // Makes all quotes the same
			else if(char === '=')
				strLine += ' ' // Remove '=' (For quality of life later)
			else
				strLine += char
		}
	}

	return tagList
}

export const separateSelectors = (data) => {
	const selectors = new Map([
		['tag', new Set()],
		['id', new Set()],
		['class', new Set()],
	])

	// remove all selectors before the body
	let dataArr = [...data]
	const bodyIdx = dataArr.indexOf('body')
	dataArr = dataArr.slice(bodyIdx)

	for(let line of dataArr){
		const lineArr = line
			.split(/\s/)
			.filter(word => word.length > 0)

		const tag = lineArr.shift()
		line = lineArr.join(' ')

		// Add tag
		selectors.get('tag').add(tag)

		if(line.length === 0)
			continue

		// Add id and class
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
						selectors.get('id').add(prop)

					if(idOrClass === 'class')
						prop.split(' ').forEach(item => selectors.get('class').add(item))

					idOrClass = ''
					continue
				}

				prop += char
			}
		}
	}
	
	// Remove pesky script tag
	selectors.get('tag').delete('script')
	return selectors
}

export const createCssTags = (tagMap) => {
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