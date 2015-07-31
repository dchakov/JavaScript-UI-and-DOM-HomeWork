/* globals $ */

/* 

Create a function that takes an id or DOM element and:OK
  * If an id is provided, select the element:OK
* Finds all elements with class `button` or `content` within the provided element:OK
  * Change the content of all `.button` elements with "hide":OK
* When a `.button` is clicked:OK
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:OK
  * The provided DOM element is non-existant:OK
  * The id is either not a string or does not select any DOM element:OK

*/

function solve() {
    return function(selector) {
        var root;
        if (typeof selector === 'string') {
            root = document.getElementById(selector);
        } else if (selector instanceof HTMLElement) {
            root = selector;
        } else {
            throw Error('The id is either not a string or does not select any DOM element');
        }
        if (!document.getElementById(selector)) {
            throw Error('does not select any DOM element');
        }

        var elementButton = root.getElementsByClassName('button'),
            elementContent = root.getElementsByClassName('content'),
            len,
            i = 0;

        for (i = 0, len = elementButton.length; i < len; i += 1) {
            elementButton[i].innerHTML = 'hide';
            elementButton[i].addEventListener('click', onItemClick);
        }

        function onItemClick(ev) {
            var clickedButton = ev.target,
                contentElement = clickedButton.nextElementSibling;

            while (contentElement && contentElement.className !== 'content') {
                contentElement = contentElement.nextElementSibling;
            }

            if (contentElement.style.display === 'none') {
                contentElement.style.display = '';
                clickedButton.innerHTML = 'hide';
            } else {
                contentElement.style.display = 'none';
                clickedButton.innerHTML = 'show';
            }


            // if (clickedElement.previousElementSibling &&
            //     clickedElement.previousElementSibling.previousElementSibling) {

            //     previousElement = clickedElement.previousElementSibling,
            //         previousContent = clickedElement.previousElementSibling.previousElementSibling;

            //     if (previousElement.className === 'button' &&
            //         previousElement.previousElementSibling.className === 'content') {
            //         if (previousContent.style.display === 'none') {
            //             previousContent.style.display = '';
            //             clickedElement.innerHTML = 'hide';
            //         } else {
            //             previousContent.style.display = 'none';
            //             clickedElement.innerHTML = 'show';
            //         }
            //     }
            // }
        }
    };
};

module.exports = solve;
