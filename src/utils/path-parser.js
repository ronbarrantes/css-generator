import path from 'path'

const options = process.argv.slice(2)
const workingDir = process.cwd()

const defaultCssFile = 'AUTO-GENERATED.css'


export const paths = {
    input: '',
    output: '',
    outputRel: ''
}

for(let i = 0; i < options.length; i += 2 ){
    const optionKey = options[i]
    const optionValue = options[i + 1]
    const extName = path.extname(optionValue).toLowerCase()

    if(optionKey === '--input-file' && paths.input.length === 0){
        if(extName !== '.html')
            throw new Error('Not a valid html file')

        paths.input = path.join(workingDir, optionValue)
    }

    if(optionKey === '--output-file' && paths.output.length === 0){
        if(extName !== '.css')
            throw new Error('Not a valid css file')
        paths.outputRel = optionValue
        paths.output = path.join(workingDir, optionValue)
    }
}

// TODO: fix the default so that the outputRel always shows up in the correct dir
if(paths.output === '')
    paths.output = path.join(workingDir, defaultCssFile) 