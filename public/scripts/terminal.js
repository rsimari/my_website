var cmd = ["whoami ^1000", "printenv | tail -n 2", "cat interests.txt ^1000"]
// var cmd = ["whoami ^1000", "echo $SCHOOL &amp;&amp; echo $CLASS ^1000", "cat interests.txt ^1000"]
// add command that does something to the screen like scrolling (that would be dope)
var results = ["Robert Simari", "SCHOOL=Notre Dame <br> CLASS=2018", "Golfing, Hackathons, Teaching"]

var counter = 0

document.addEventListener('DOMContentLoaded', start);

function start() {
	startType('.terminal-text-0')
}

function startType(el) {
	Typed.new(el, {
		// counter / 2 >> 0 is equivalent to integer division
		strings: [cmd[counter / 2 >> 0] + "<br>"],
		typeSpeed: 150,
		onStringTyped: function() {
			// create new element for response text
			var prompt = document.createElement("span")
			prompt.innerHTML = results[counter / 2 >> 0] + "<br>rsimari:~ $ "
			var term = $(el)

			counter++
			prompt.setAttribute("class", "terminal-text-" + counter)
			term.after(prompt)

			// create new element to hold the input text for the next startType
			var temp = document.createElement("span")
			counter++
			temp.setAttribute("class", "terminal-text-" + counter)
			prompt.after(temp)
		}, 
		callback: function () {
			if (counter < 2 * cmd.length - 1) {
				// remove extra cursor
				$('.typed-cursor').remove()
				startType('.terminal-text-' + counter)
			}
		}
	});
}
