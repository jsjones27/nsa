
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

		this.globalTick = 1000;
		var pastEvents = [];
		var eventQueue = [];

	
		/** Funstion called when the user tries to play and action. Thre pre requisits 
		 *  and required resources are check before the action is added to the eventQueue
		 *  to be processed.
		 *
		 *  @param action - the action the user plays
		 */
		function UserAction ( action ) {
			if (this.money >= action.price && checkPreReqs(action)) {
				this.money -= action.price;
				addEvent(action);
			} else {
				displayText("You do not have enough funds for " + action.name);
			}
			
		}

		/** Function initializes local variables for gameplay.
		 */
		this.init = function () {			
			// initialize game variables

			this.money = this.pdf ( 12000000000, 10 );
			this.power = 0;
			this.approval = this.pdf ( 70, 5 );
		
			this.date = new Date("01-01-1970");

			var cryptoLevel = 0;
			var netopsLevel = 0;
			var commLevel = 0;

			var eventQueue = [];

			init_buttons();
			
		}

		function init_buttons(){
			var column1 = [];
			var column2 = [];
			var column3 = [];

			for(action in actions) {
				if(checkPreReqs(action)) {
					if(action.column == 1){
						column1.push(action);
					}else if(action.column == 2){
						column2.push(action);
					}else if(action.column == 3){
						column3.push(action);
					}
				}
			}
			var workingColumn = document.getElementById("column1");
			if (workingColumn == undefined) {
				console.debug("Nothing in column");
			}
			for(e in column1){
				workingColumn.innerHTML += createButtonHTML(e);
			}

			var workingColumn = document.getElementById("column2");
			for(e in column3){
				workingColumn.innerHTML += createButtonHTML(e);
			}

			var workingColumn = document.getElementById("column3");
			for(e in column3){
				workingColumn.innerHTML += createButtonHTML(e);
			}
		}

		function createButtonHTML(action) {
			return "<a href=\"#\" class=\"gamemenu-action\">\n<span class=\"action-title\">" + action.name + "</span>\n<span class=\"action-tagline\">" + action.tagline + "</span>\n<span class=\"action-price\">$" + action.price + "</span>\n</a>";
		}

		/** Function checks that all the pre-requisits for the action have been played.
		 *
		 *  @param action - action to be checked.
		 *  @return true if pre-requisits have been met, false otherwise.
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
			if (count == action.prereqs.length) {
				return true;
			} else {
				return false;
			}
		}

		/** Function processes one day of gameplay.
		 *
		 * @return returns false if game has ended, true otherwise.
		 */
		this.tick = function () {

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

		/**  Function preforms the changes dictated by the action
		 *
		 *  @param action - the action from which the changes originate
		 */
		function performAction (action) {
			this.v_money += action.outcomes.money;
			this.v_power += action.outcomes.power;
			this.v_approval += actions.outcomes.approval;
			this.progress += action.progress;

			displayText(actions.outcomes.displayText);

		}

		/**  Function displays text on the game status terminal
		 *
		 *   @param text - text ot be displayed
		 */
		function displayText(text) {
				var console = document.getElementById("action-console-text");
				console.innerHTML += (text + "<br>");
				console.scrollTop = console.scrollHeight;
			}

		/** Function gets an action from the action name
		 *
		 *  @param actionName - the name of the action
		 *  @return the action found with that name, undefined otherwise
		 */
		function getAction(actionName) {
			for( action in actions) {
				if(action.name == actionName) {
					return action;
				}
			}
			return undefined;
		}

		/**  Checks if the victory or failure conditions of the game have been met
		 */ 
		function checkVictory() {
			if (progress >= 100) {
				return true;
			} else if (progress <= 0) {
				return false;
			}
			if (this.date >= Date("06-01-2013")) {
				addEvent("snowden");
			}

		}

		/** Adds and even to the eventQueue
		 *
		 *  @param newAction - action o t add to the queue
		 */
		function addEvent(newAction) {
			eventQueue.push(newAction);
		}

		/** Function returns a number random number from a gaussian distibution with a provided mean
		 *  and within the error range
		 *
		 *  @mean - the mean of the gaussian distribution
		 *  @error - the max distance from the mean the number will lie
		 *  @return and semi random number 
		 */
		this.pdf = function( mean, error ) {

			return Math.floor((Math.random()*2*error)+mean-error);

		}

	}

	var game = new NSAGame();
	game.init();
	game.running = true;
	startGame();
	
	function startGame() {
		timer = setInterval(function(){game.tick()}, game.globalTick);
		console.debug($('#gamecontrol a').text("asdf"));
		$('#gamecontrol a').text("asd");
	}

	function pauseGame() {
		clearInterval(timer);
	}
	$('#startpause').text('asdf');
	$('#startpause').click(function(){
		$(this).text("asfd'");
		console.debug("adsf");
		if (game.running) {
			pauseGame();
		} else {
			startGame();
		}
		game.running = !game.running;
	});
