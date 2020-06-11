
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
			if (word != "")
				words.push(word);
			word="";
			continue;
		}
		word = word.concat(letter);
	}
	
	return words;
	
}


function is_substr_keyword(word, keyword_array){
	for(keyword of keyword_array){
		var pos = keyword.indexOf(word);
		
		if(pos == 0){
			return true;
		}
	}
	return false;
}


function preprocess(inp_text, keywords_array){
	var words = split(inp_text);
	console.log(words);
	var non_keywords = [];
	for(var i =0; i< words.length; i++){

		if(i == words.length -1){

			if(!is_substr_keyword(words[i].toUpperCase(),keywords_array)){
				non_keywords.push(words[i]);
				words[i] = "^";
			}
		}
		else
		{

			if(!(keywords_array.includes(words[i].toUpperCase()))){
				non_keywords.push(words[i]);
				words[i] = "^";
			}
		}
	}

	processed_string = words.join(" ");
	return [processed_string, non_keywords];
}


keywords = ["INSERT","INTO","VALUES(","VALUES",")"];
text = "insert into table1 values(my friend Inse "

console.log(preprocess(text,keywords));


