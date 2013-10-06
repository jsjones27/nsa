
	function NSAGame () {

	/*

		var money = 0;
		var power = 0;
		var approval = 0;

		var start_date = new Date("01-01-1970");
		var days_passed = 0;

		var cryptoLevel = 0;
		var netopsLevel = 0;
		var commLevel = 0;

		var globalTick = 1000;
		var eventQueue = [];

	*/

		// user-initiated action

		function UserAction ( action ) {
			this.name = action["name"];
		}

		function init () {

			// initialize game variables

			this.money = this.pdf ( 12000000000, 10 );
			this.power = 0;
			this.approval = pdf ( 70, 5 );
		
			var start_date = new Date("01-01-1970");
			var days_passed = 0;

			var cryptoLevel = 0;
			var netopsLevel = 0;
			var commLevel = 0;

			var globalTick = 1000;
			var eventQueue = [ [], [], [], [], [], [], [], [] ];
			
		}

		/*
			Perform one step of the game:
				
		*/

		function tick () {

			// Pop the event that's supposed to happen today and do it.

			// Add an empty event off the end

		}

		function performAction () {

		}

		// Make a number "believable", +/- a given value
		// by "fuzz" percent, given as an integer.

		function pdf ( mean, error ) {

			return Math.floor((Math.random()*2*error)+mean-error);

		}

	}



		