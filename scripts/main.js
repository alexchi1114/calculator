function add(num1,num2){
	return num1+num2;
}

function multiply(num1,num2){
	return num1*num2;
}

function divide(num1,num2){
	return num1/num2;
}

function subtract(num1,num2){
	return num1-num2;
}

function calculation(string){

}


$(document).ready(function(){

	$display_text = '';

	$('.button').click(function(){
		$display_text += $(this).text().replace(/\s/g, '');
		$('#display').text($display_text);
	})

	$('#clear').click(function(){
		$display_text = ''
		$('#display').text($display_text);
	})

	$('#equal').click(function(){
		$display_text = eval($display_text)
		$('#display').text($display_text);
	})

})