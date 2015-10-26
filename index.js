'use strict'

var legacyBrowsers = require('css-legacy-browsers')

/**
 * Changes property/value to style when supported values found for legacy browsers
 *
 * @param {Rule} rule
 * @api public
 */
module.exports = function (rule) {
    var style = rule.style

    for (var prop in style) {
        var value = style[prop]

        var changeProp = false
        var changeValue = false

        var legacyStyle = legacyBrowsers.supportedStyles(prop, value)

        if (legacyStyle && legacyStyle.property !== prop) changeProp = true
        if (legacyStyle && legacyStyle.value !== value) changeValue = true

        if (changeProp || changeValue) {
            if (changeProp) delete style[prop]
            style[legacyStyle.property] = legacyStyle.value
        }
    }
}
