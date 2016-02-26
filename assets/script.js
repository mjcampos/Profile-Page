$(document).ready(function() {
	var getTodaysDay = function() {
		switch(new Date().getDay()) {
			case 0:
				return "Sunday";
			case 1:
				return "Monday";
			case 2:
				return "Tuesday";
			case 3:
				return "Wednesday";
			case 4:
				return "Thursday";
			case 5:
				return "Friday";
			case 6:
				return "Saturday";
		}
	}

	var funFact = function() {
		switch(new Date().getDay()) {
			case 0:
				return "I'm first generation Peruvian-American";
			case 1:
				return "As a teenager I had a pet guinea pig named Richard who was brought all the way from Peru";
			case 2:
				return "I've been to Germany three times and am in the process of learning German";
			case 3:
				return "Although a student of computer science since my parents bought me a computer I'm  a history lover and have memorized the US Presidents after one of my elementary school teacher issued a challenge";
			case 4:
				return "My first night in France was spent sleeping on the beach of Corsica outside the town of Bastia";
			case 5:
				return "I have a motorcycle license and aspires to own my own motorcycle to travel the world with my German friend";
			case 6:
				return "My favorite author will forever be the great Kurt Vonnegut";
		}
	}

	$("#fun-facts").html("<p>Fun Fact For " + getTodaysDay() +":</p>" + "<p class='body'>" + funFact() + "</p>");
})