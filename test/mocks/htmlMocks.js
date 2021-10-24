export const fakeHtml = {
    htmlInText: `<!DOCTYPE html><html lang="en"><head><title>ample</title></head><body><wrapper><header><h1 class="title main-title">ample Document</h1><nav><ul class="main-nav"><li class="nav-item"><a href="/">age 1</a></li><li class="nav-item"><a href="/">age 2</a></li><li class="nav-item"><a href="/">age 3</a></li></ul></nav></header><section id="section-main"><h2 class="section-sub-heading">ain section</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum corrupti impedit, culpa voluptatum incidunt nisi exercitationem ad labore.</p><p>Excepturi quibusdam cum, voluptatibus rerum accusamus ducimus debitis suscipit reiciendis nostrum voluptatem.</p></section><footer><p class="footer-info">ome contact info</p></footer></wrapper><script src="test.js">/script></body></html>`,
    htmlTags: new Set(['!DOCTYPE html', 'html lang "en"', 'head', 'title', 'body', 'wrapper', 'header', 'h1 class "title main-title"', 'nav', 'ul class "main-nav"', 'li class "nav-item"', 'a href "/"', 'section id "section-main"', 'h2 class "section-sub-heading"', 'p', 'footer', 'p class "footer-info"', 'script src "test.js"']),
    selectors: new Map([
        ['tag', new Set('body', 'wrapper', 'header', 'h1', 'nav', 'ul', 'li', 'a', 'section', 'h2', 'p', 'footer')],
        ['id', new Set('section-main')], 
        ['class', new Set('title', 'main-title', 'main-nav', 'nav-item', 'section-sub-heading', 'footer-info')]
    ]),
}