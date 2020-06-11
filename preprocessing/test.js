
function split(inp_text){

	inp_text = inp_text.concat("^");
	words = [];
	word = "";
	paranthesis = 0;

	for(letter of inp_text){
		if(letter == " " && paranthesis == 0){
			if(word != "")
				words.push(word);
			word = "";
			continue;
		}

		if(letter ==  "("){
			paranthesis++;
			if (paranthesis == 1)
			{
				if(word == ""){
					words[words.length - 1] = words[words.length -1].concat("(");
				}
				else{
					word = word.concat("(");
					words.push(word);
					word = "";
				}
				continue;
			}
			
		}

		if(letter == ")"){
			paranthesis--;
			if (paranthesis==0)
			{
				if(word != ""){
					words.push(word);
					word = "";
					
				}
				words.push(")");
				continue;
			}
		}

		if(letter == "^"){
			words.push(word);
			word="";
			continue;
		}
		word = word.concat(letter);
	}
	
	return words;
	
}


function is_keyword(word, keyword_array){
	for(keyword of keyword_array){
		
	}
}


function preprocess(inp_text, keywords_array){
	var words = split(inp_text);
	// console.log(words);
	for(var i =0; i< words.length; i++){
		if(!(keywords_array.includes(words[i].toUpperCase()))){
			words[i] = "^";
		}
	}

	processed_string = words.join(" ");
	return processed_string
}


keywords = ["INSERT","INTO","VALUES(","VALUES",")"];
text = "insert into table1 values(my friend) test"

console.log(preprocess(text,keywords));


