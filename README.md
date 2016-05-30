# jss-legacy-browsers
JSS plugin that handles legacy browser support

##Description

This jss plugin checks for properties that can be mapped to legacy browsers styles at run time. 

```javascript
{
    '.container': {
        display: 'flex'
    }
}
```

In IE10 will be mapped to:


```css
.container {
    display: -ms-flexbox;
}
```

## Register plugin

```javascript
var jss = require('jss')
var legacyBrowsers = require('jss-legacy-browsers')
jss.use(legacyBrowsers())
```

## Legacy browsers supported
* IE10
* Mozilla Firefox Gecko

...more to come
