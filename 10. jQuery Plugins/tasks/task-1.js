function solve() {
    return function(selector) {
        var $dropdownMenu = $(selector);
        var options = $dropdownMenu.find('option');

        $dropdownMenu.attr('id', 'the-select')
            .css('display', 'none');

        $('<div>')
            .addClass("dropdown-list")
            .html($dropdownMenu)
            .appendTo('body');

        $('<div>')
            .addClass('current')
            .text('Option 1')
            .attr('data-value', "")
            .appendTo('.dropdown-list');

        $('<div>')
            .addClass('options-container')
            .css({
                'position': 'absolute',
                'display': 'none'
            })
            .appendTo('.dropdown-list');

        for (var i = 0, len = options.length; i < len; i += 1) {
            $('<div>').addClass('dropdown-item')
                .attr('data-value', $(options[i]).val())
                .attr('data-index', i)
                .text($(options[i]).text())
                .appendTo('.options-container');
        }

        $('.current').on('click', function() {
            var $this = $(this);
            $('.options-container').show();
            $this.text('Select option');
        })

        $('.dropdown-item').on('click', function() {
            var $this = $(this);
            $('.options-container').hide();
            $('.current').text($this.text());
            $('#the-select').val($this.attr('data-value'));
        })

        console.log($('body').html());
    };
}

module.exports = solve;
