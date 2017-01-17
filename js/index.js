$(document).ready(function() {
    function getNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en'
        },
        success: function(response) {
            console.log(response.quoteText);
            }
        });
    }
    getNewQuote();
});
