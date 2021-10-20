# CSS Creator
Creates a basic CSS "boilerplate" file based on all the tags, ids, and classes from a given HTML document.

## Installation and Use

To install it run the command
`npm i -D csscreator`

To use it use the command 
`csscreator --input-file /path/to/file.html`

The `csscreator` command requires an `--input-file` flag to work. The value expected by the input file must be of extension `.html` with valid HTML

## Examples

If you have a an HTML doument that looks like this

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sample</title>
  </head>
  <body>
    <wrapper>
      <header>
        <h1 class="title main-title">Sample Document</h1>
        <nav>
          <ul class="main-nav">
            <li class="nav-item">
              <a href="/">Page 1</a>
            </li>
            <li class="nav-item">
              <a href="/">Page 2</a>
            </li>
            <li class="nav-item">
              <a href="/">Page 3</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="section-main">
        <h2 class="section-sub-heading">Main section</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          corrupti impedit, culpa voluptatum incidunt nisi exercitationem ad
          labore.
        </p>
        <p>
          Excepturi quibusdam cum, voluptatibus rerum accusamus ducimus debitis
          suscipit reiciendis nostrum voluptatem.
        </p>
      </section>
      <footer>
        <p class="footer-info">some contact info</p>
      </footer>
    </wrapper>
  </body>
</html>
```

It will create a css file like this 

```css
/*** TAGS ***/
body {}
wrapper {}
header {}
h1 {}
nav {}
ul {}
li {}
a {}
section {}
h2 {}
p {}
footer {}

/*** IDs ***/
#section-main {}

/*** CLASSES ***/
.title {}
.main-title {}
.main-nav {}
.nav-item {}
.section-sub-heading {}
.footer-info {}

```

