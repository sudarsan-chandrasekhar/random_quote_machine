// Random Quote Generator
$(document).ready(function(){
	getQuote();
})
var getQuote = function() {
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
	$.getJSON(url).done(function(data) {
		$(".quote-text").text(data.quoteText);
		var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @cubbiespride16 goo.gl/2h0NHo';
		if (data.quoteAuthor === '') {
			data.quoteAuthor = 'Unknown';
		}
		$(".author-text").text('Author: ' + data.quoteAuthor);
		$(".twitter-share-button").attr("href", quot);
	})
	$("#new-quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
  };


