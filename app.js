const goTo = ["Chick Fil A","Agua Linda","Peppinos","Barberitos"];

const newList = [];

function handleGoTo() {
	$('.js-goto').click(function() {
		makeDecision();
	});
}

function generateChoiceHtml(answer) {
	return `<div class="answer">
				<h3>Your choice is...</h3>
				<h2>${answer}</h2>
				<button class="js-start-over">Start Over</button>
			</div>`
}

function handleAddOption() {
	$('.js-form').submit(function(event) {
		event.preventDefault();
		let input = $('.js-input').val();
		if(input === '' || input === ' ') {
			alert('Please enter a choice before selecting "Add Choice"');
		}
		else {
			newList.push(input);
			$('.js-added').append(`${input} / `);
			$('.js-form').each(function() {
				this.reset();
			});
		}
	});
}

function handleAddNewGoTo() {
	$('.js-add-goto').click(function(event) {
		event.preventDefault();
		let input = $('.js-add-input').val();
		if(input === '' || input === ' ') {
			alert('Please enter a choice before selecting `Add to "Go To"`');
		}
		else {
			goTo.push(input);
			$('.js-goto-added').append(`${input} / `);
			$('.js-goto-form').each(function() {
				this.reset();
			});
		}
	});
}

function handleDecide() {
	$('.js-decide').click(function() {
		if(newList.length === 0 || newList.length === 1) {
			alert('Please enter multiple choices before deciding.');
		}
		else {
			makeDecision(newList);
		}
	});
}

function handleStartOver() {
	$('.js-decision').on('click','.js-start-over',function() {
		location.reload();
	});
}

function makeDecision(added) {
	if(!added) {
		let choice = Math.floor(Math.random() * goTo.length);
		let html = generateChoiceHtml(goTo[choice]);
		$('.baseLevel').addClass('hidden');
		$('.js-decision').html(html);
	}
	else {
		let choice = Math.floor(Math.random() * added.length);
		let html = generateChoiceHtml(added[choice]);
		$('.baseLevel').addClass('hidden');
		$('.js-decision').html(html);
	}
}

function handleApp() {
	handleGoTo();
	handleAddOption();
	handleDecide();
	handleStartOver();
	handleAddNewGoTo();
}

$(handleApp);