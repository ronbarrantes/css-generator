import { assert } from 'chai'
import { findHtmlTags } from '../utils/html-css-processor.js'
import { fakeHtml } from './mocks/htmlMocks.js'

describe('Test for html-css-processor', () => {
    it('Should test the "findHtmlTags"', () => {
        const htmlTags = findHtmlTags(fakeHtml.htmlInText)
        assert.deepStrictEqual(htmlTags, fakeHtml.htmlTags, 'The tags did not match')
    })

    it('Should FAIL due to missing HTML', () => {
        assert.throws(findHtmlTags, 'Valid HTML must be passed in the form of text', 'Error due to missing html string')
    })
})