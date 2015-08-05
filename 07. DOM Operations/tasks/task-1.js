/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element:OK
* Add divs to the element:OK
  * Each div's content must be one of the items from the contents array:OK
* The function must remove all previous content from the DOM element provided:OK
* Throws if:
  * The provided first parameter is neither string or existing DOM element:OK
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing:OK
  * Any of the function params is not as described:OK
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {
    return function(element, contents) {
        var root,
            div,
            container,
            i;
        if (typeof element === 'string') {
            root = document.getElementById(element);
        } else if (element instanceof HTMLElement) {
            root = element;
        } else {
            throw Error("The provided first parameter is neither string or existing DOM element");
        }
        
        if (!contents || contents.some(function (argument) {
             return typeof argument !== 'string' && typeof argument !== 'number';
          })) {
            throw Error("Any of the contents is neight `string` or `number`");
        }

        while (root.lastChild) {
            root.removeChild(root.lastChild);
        }

        container = document.createDocumentFragment();
        for (i = 0; i < contents.length; i += 1) {
            div = document.createElement('div');
            div.innerHTML = contents[i];
            container.appendChild(div);
        };
        root.appendChild(container);
    };
};

module.exports = solve();