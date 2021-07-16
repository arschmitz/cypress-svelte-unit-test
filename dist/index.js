"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
var utils_1 = require("./utils");
var rootId = 'cypress-root';
function mount(Component, options, styleOptions) {
    if (options === void 0) { options = {}; }
    if (styleOptions === void 0) { styleOptions = {}; }
    options = options || {};
    return cy.then(function () {
        // @ts-ignore
        var document = cy.state('document');
        utils_1.cleanupStyles(document);
        var el = document.getElementById(rootId);
        if (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }
        else {
            el = document.createElement('div');
            el.setAttribute('id', rootId);
            document.getElementsByTagName('body')[0].prepend(el);
        }
        return utils_1.injectStylesBeforeElement(styleOptions, document, el).then(function () {
            // by default we mount the component into the created element
            var target = el;
            if (styleOptions && styleOptions.html) {
                el.innerHTML = styleOptions.html;
                target = document.getElementById('here');
                if (!target) {
                    console.error('mount has HTML with DIV with ID "here"');
                    console.error(styleOptions.html);
                    throw new Error('Could not find element with ID "here" in the HTML passed');
                }
            }
            var allOptions = Object.assign({}, options, {
                target: target,
            });
            var component = new Component(allOptions);
            if (options.callbacks) {
                // write message callbacks
                Object.keys(options.callbacks).forEach(function (message) {
                    component.$$.callbacks[message] = [options.callbacks[message]];
                });
            }
            return cy.wrap(component);
        });
    });
}
exports.mount = mount;
beforeEach(function () {
    utils_1.polyfillFetchIfNeeded();
});
exports.default = mount;
