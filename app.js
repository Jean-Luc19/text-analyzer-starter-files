function countWords(text) {
	var wordArray = text.split(' ');
	return wordArray.length;
}
function getUniqueWordCount(text) {
	text = text.replace(/\./g, '').split(' ');
	var uniqueWordArray = [];
	for (var i = 0; i < text.length; i++) {
		if (uniqueWordArray.indexOf(text[i]) === - 1) {
			uniqueWordArray.push(text[i]);
		}
	}
	return uniqueWordArray;
}
function getSentenceLengths (text) {
	var sentences = text.split('.');
	var individualSentenceWordArray = [];
	var totalSentenceLength = 0;
	var numSentences = sentences.length;
	for (var i = 0; i < sentences.length; i++) {
		individualSentenceWordArray = sentences[i].split(' ');
		totalSentenceLength += individualSentenceWordArray.length;
	}
	return totalSentenceLength;

}


var text = 'string is a string. yes it is';

 


debug(getSentenceLengths(text));
