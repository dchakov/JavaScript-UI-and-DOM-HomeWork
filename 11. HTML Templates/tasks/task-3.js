function solve() {
    return function() {
        $.fn.listview = function(data) {
            var $this = $(this),
                postTemplateHTML = $('#' + $this.attr('data-template')).html();
            postTemplateHTML =
                '{{#each data}}' +
                postTemplateHTML +
                '{{/each}}';
            var postTemplate = handlebars.compile(postTemplateHTML);
            $this.html(postTemplate({data:data}));
            return this;
        };
    };
}

module.exports = solve;
