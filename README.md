Prodyogiki
---
The website is to promote a technocrat event with practical implementation of what has been learnt in NIT Hamirpur, with schedule and registration forms.

To ease the development and maintainence following technologies will be used:
+ **NODE.JS(webpack and libs)**: To provide modules helpfull in developement. As the site will be static as of now no node features other than npm will be required.

+ **PUG(HTML)**: To easily write and maintain web pages *pug* templating engine provide conveinient way,with python like indentation syntax.

+ **LESS(CSS)**: Extended css with features like inheritance variables improved selectors, completely compatible with traditional css. All of less is compiled down to traditional css files.


---
## Setup
This is a template repository so use this to create a repository from GitHub.

Clone your repository go in the folder and run
```
npm install
```

## Using
To **develop** with live reloading
```
npm run develop
```
It opens up a new browser window with address `localhost:9600`

To **build** for production _a.k.a._ render
```
npm run build
```


## Hacking

### JavaScript
Use **ES6** for your development without worrying about backwards compatibility powered
by **babel**.

There is only one file `app.js` importing modules setting up things in your `scripts`
directory the files you need to import, you can make any number of js files in the import any
structure just it should be imported once in already imported file.

**vendor.js** imports your files that need to be linked to your html files.

### less
`includes` contains all files that are not imported as reference

`reference` is used when you `@import (reference) ...`

### pug 
`includes` inline substitutions

`bases` the layouts that you extend

to add more pages see `html-webpack-plugin`

### assets
Just a folder to keep do anything

### root
All files and folder are put in root as is, in root of `dist` _e.g._ `favicon.ico`

---
## #JustAsk
Feel free to raise an issue if you encounter any problem or are unclear about something.

