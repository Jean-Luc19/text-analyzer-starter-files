var $inputText = $('textarea');

function countWords(text) {
	var wordArray = text.replace(/[\.!?]/g, '').split(' ');
   
	return wordArray.length;
}
function getUniqueWordCount(text) {
	text = text.replace(/[\.!?]/g, '').split(' ');
	var uniqueWordArray = [];
	for (var i = 0; i < text.length; i++) {
		if (uniqueWordArray.indexOf(text[i]) === - 1) {
			uniqueWordArray.push(text[i]);
		}
	}
	return uniqueWordArray.length;
}
function getAverageWordLength(text) {
  var cleanText = text.replace(/[\.!?]/g, '').split(' ');
  var wordLengths = 0;
  for (var i = 0; i < cleanText.length; i++) {
    wordLengths += cleanText[i].length;
  }
  return wordLengths / cleanText.length;
  
}
function getSentenceLengths (text) {
	var sentences = text.replace(/[!?]/g, '.').split('.').length - 1;
	return countWords(text) / sentences;
}
function displayWordCount(text) {
  $('.js-word-count').text(countWords(text));
}
function displayUniqueWordCount(text) {
  $('.js-unique-words').append(getUniqueWordCount(text));
}
function displayAverageWordLength(text) {
  $('.js-average-word-length').append(getAverageWordLength(text));
}
function displayAverageSentenceLength(text) {
  $('.js-average-sentence-length').append(getSentenceLengths(text));
}
function handleFormSubmit(){
  $('button').click(function(event){
    event.preventDefault();
    $('dl').removeClass('hidden');
    var theText = $inputText.val();
    displayWordCount(theText)
    displayUniqueWordCount(theText);
    displayAverageWordLength(theText)
    displayAverageSentenceLength(theText)
    
  });
}
$(function(){
  handleFormSubmit();
});



 



