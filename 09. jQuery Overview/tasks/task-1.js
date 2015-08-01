/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if:OK
    * COUNT is a `Number`, but is less than 1:OK
    * COUNT is **missing**, or **not convertible** to `Number`:OK
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
    return function(selector, count) {
        if (!count || isNaN(count)) {
            throw Error('not a valid number')
        }
        if (count < 1) {
            throw Error('Number, but is less than 1');
        }
        if (typeof selector !== 'string' || !$(selector)) {
            throw Error('the provided selector does not selects anything');
        }
        var $ul = $('<ul>').addClass('items-list');
        for (var i = 0; i < count; i++) {
          $('<li>').addClass('list-item')
                .html('List item #' + i).appendTo($ul);
        }
        $(selector).append($ul);
    };
};

module.exports = solve;
