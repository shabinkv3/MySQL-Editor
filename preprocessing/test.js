function split(inp_text){

	// WORD SPLITTER

	inp_text = inp_text.concat(" ");
	words = [];
	word = "";
	paranthesis = 0;
	
	for (letter of inp_text){

		if((letter == " " || letter=="\n")&& paranthesis == 0){
			if(word != "")
				words.push(word);
			word = "";
			continue;
		}

		if(letter =="("){
			if(paranthesis == 0){
				if(word != ""){
					words.push(word.concat("("));
					word = "";
				}
				else{
					words[words.length - 1] = words[words.length -1].concat("(");
				}
				paranthesis++;
				continue;
			}
			paranthesis++;
		}

		if(letter ==")"){
			paranthesis--;
			if(paranthesis == 0){
				if (word!= ""){
					words.push(word);
					word="";
					words.push(")");
					continue;
				}
				words.push(")");
			}
		}

		word = word.concat(letter);
	}
	return words;
}


function preprocess(inp_text, keywords_array){
	var words = split(inp_text);
	for(var i =0; i< words.length; i++){
		if(!(keywords_array.includes(words[i]))){
			words[i] = "^";
		}
	}

	processed_string = words.join(" ");
	return processed_string
}


keywords = ["INSERT","INTO","VALUES(",")"];
text = "INSERT INTO TABLE1 VALUES(BLAH, Yay, Test)"

console.log(preprocess(text,keywords));


