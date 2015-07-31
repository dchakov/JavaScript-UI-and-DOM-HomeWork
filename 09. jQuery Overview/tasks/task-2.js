/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
    return function(selector) {
        if (typeof selector !== 'string' || !($(selector).length)) {
            throw Error('The provided ID is not a **jQuery object** or a `string`');
        };

        var elementButton = $(selector).children('.button').text('hide'),
            len, i;

        for (i = 0, len = elementButton.length; i < len; i += 1) {
            $(elementButton[i]).on('click', onItemClick);
        }

        function onItemClick(ev) {
            var $clickedButton = $(ev.target),
                $contentElement = $clickedButton.next();

            while ($contentElement && !($contentElement.hasClass('content'))) {
                $contentElement = $contentElement.next();
            }

            if ($contentElement.css('display') === 'none') {
                $contentElement.css('display', '');
                $clickedButton.text('hide');
            } else {
                $contentElement.css('display', 'none');
                $clickedButton.text('show');
            }
        }
    };
};

module.exports = solve;
