import path from 'path'

const options = process.argv.slice(2)
const workingDir = process.cwd()

const defaultCssFile = 'AUTO-GENERATED.css'

export const paths = {
    input: '',
    output: '',
}

for(let i = 0; i < options.length; i += 2 ){
    const optionKey = options[i]
    const optionValue = options[i + 1]
    const extName = path.extname(optionValue).toLowerCase()

    if((optionKey === '--input-file' || optionKey === '-i' ) && paths.input.length === 0){
        if(extName !== '.html')
            throw new Error('Not a valid html file')

        paths.input = path.join(workingDir, optionValue)
    }

    // TODO: Make a output file option (that's safe)
}

if(paths.output === '')
    paths.output = path.join(path.dirname(paths.input), defaultCssFile) 