
	function NSAGame () {

	

		var money = 0;
		var power = 0;
		var approval = 0;

		var v_money = 0;
		var v_power = 0;
		var v_approval = 0;

		var progress = 0;

		var start_date = new Date("01-01-1970");
		var days_passed = 0;

		var cryptoLevel = 0;
		var netopsLevel = 0;
		var commLevel = 0;

		var globalTick = 1000;
		var pastEvents = [];
		var eventQueue = [];

	

		// user-initiated action

		function UserAction ( action ) {
			if (this.money >= action.price) {
				this.money -= action.price;
				addEvent(action);
			} else {
				displayText("You do not have enough funds for " + action.name);
			}
			
		}

		function init () {
			
			// initialize game variables

			this.money = this.pdf ( 12000000000, 10 );
			this.power = 0;
			this.approval = pdf ( 70, 5 );
		
			var date = new Date("01-01-1970");

			var cryptoLevel = 0;
			var netopsLevel = 0;
			var commLevel = 0;

			var globalTick = 1000;
			var eventQueue = [];
			
		}

		/*
			Perform one step of the game:
				
		*/

		function checkPreReqs(action) {
			var count = 0;
			for(e in pastEvents){
				for(preReq in action.prereqs){
					if(e == preReq) {
						counter += 1;
					}
				}
			}
			if (counter == action.prereqs.length) {
				return true;
			} else {
				return false;
			}
		}

		function tick () {

			console.debug("testing tick...");
			// Pop the event that's supposed to happen today and do it.

			var currentAction = eventQueue.pop();
			while(currentAction != undefined){
				preformAction(currentAction);
				this.pastEvents.push(currentAction);
			}

			//Increments our values
			this.money += this.v_money;
			this.power += this.v_power;
			this.approval += this.v_approval;

			// Add an empty event off the end

			this.date.setTime(this.date.getTime() + 86400000);

			if (checkVictory()) {
				return false;
			}else {
				return true;
			}

		}

		function performAction (action) {
			this.v_money += action.outcomes.money;
			this.v_power += action.outcomes.power;
			this.v_approval += actions.outcomes.approval;
			this.progress += action.progress;

			displayText(actions.outcomes.displayText);

		}

		function displayText(text) {
			//adds the text to the bottom of the status terminal

		}

		function getAction(actionName) {
			for( action in actions) {
				if(action.name == actionName) {
					return action;
				}
			}
			return false;
		}

		function checkVictory() {
			if (progress >= 100) {
				return true;
			} else if (progess <= 0) {
				return false;
			}
			if (this.date >= Date("06-01-2013")) {
				addEvent("snowden");
			}

		}

		function addEvent(newAction) {
			eventQueue.push(newAction);
		}

		// Make a number "believable", +/- a given value
		// by "fuzz" percent, given as an integer.

		function pdf ( mean, error ) {

			return Math.floor((Math.random()*2*error)+mean-error);

		}

	}

	var game = new NSAGame();
	game.init();
	setInterval(game.tick(), globalTick);
