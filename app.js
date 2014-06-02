$(document).ready(function() {
	var number;
	
	number = +prompt("Enter number")
	while (isNaN(number) || number % 1 != 0 || number == "") {
		number = +prompt("You did not enter a number. Enter number!")
	} 
	
	fizzbuzz(number);
});

var fizzbuzz = function(num) {
	for (var i=1; i <= num; i++) {
		if (i%3 == 0 && i%5 == 0) {
			$("body").append("<p>FizzBuzz</p>");
		}else if (i%3 == 0) {
			$("body").append("<p>Fizz</p>");
		} else if (i%5 == 0) {
			$("body").append("<p>Buzz</p>");
		} else {
			$("body").append("<p>" + i + "</p>");
		}
	}
}