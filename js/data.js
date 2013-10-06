
    var actions = [

        /* Cryptography */

        {
            "shortname" : "crypt-1",
            "name" : "Cryptography I",
            "tagline" : "",
            "price" : 12000000,
            "outcomes" : [
				{
                    "money" : 10.0,
					"power" : 1000.0,
                    "approval": -5.0,
                    "progress": 2.5,
					"displayText" : "",
				}
			],
            "prereqs" : [],
            "column": 1
        },
        
        {
            "shortname" : "crypt-2",
            "name" : "Cryptography II",
            "tagline" : "",
            "price" : 24000000,
            "outcomes" : [
                {
                    "money" : 500.0,
                    "power" : 12000.0,
                    "approval": -5.0,
                    "progress": 6.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : ["crypt-1"],
            "column": 1
        }
        ,
        {
            "shortname" : "crypt-3",
            "name" : "Cryptography III",
            "tagline" : "",
            "price" : 92000000,
            "outcomes" : [
                {
                    "money" : 13000.0,
                    "power" : 360000.0,
                    "approval": -5.0,
                    "progress": 10.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : ["crypt-2"],
            "column": 1
        },

        {
            "shortname" : "decrypt-academic",
            "name" : "Sabotage academic cryptography",
            "tagline" : "",
            "price" : 18000,
            "outcomes" : [
                {
                    "money" : 120.0,
                    "power" : 15.0,
                    "approval": -7.0,
                    "progress": 6.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 1
        },

        {
            "shortname" : "decrypt-industry",
            "name" : "Sabotage industrial cryptography",
            "tagline" : "",
            "price" : 1230000,
            "outcomes" : [
                {
                    "money" : 12300.0,
                    "power" : 2139.0,
                    "approval": -5.0,
                    "progress": 12.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 1
        },

        {
            "shortname" : "mandate-standard",
            "name" : "Mandate compromised security standard",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 1
        },

        /* Computer Network Operations */

        {
            "shortname" : "cysec-1",
            "name" : "Cybersecurity I",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 2
        },
        
        {
            "shortname" : "cysec-2",
            "name" : "Cybersecurity II",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : ["cysec-1"],
            "column": 2
        },
        
        {
            "shortname" : "cysec-3",
            "name" : "Cybersecurity III",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : ["cysec-2"],
            "column": 2
        },

        {
            "shortname" : "attack-china",
            "name" : "Launch cyberattack against China",
            "tagline" : "",
        
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 2
        },

        {
            "shortname" : "attack-russia",
            "name" : "Launch cyberattack against Russia",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 2
        },

        {
            "shortname" : "malware",
            "name" : "Design and distribute malware",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 2
        },

        {
            "shortname" : "foreign-raid",
            "name" : "Raid foreign datacenter",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 2
        },

        /* Communications */

        {
            "shortname" : "comm-1",
            "name" : "Communications I",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        },
        
        {
            "shortname" : "comm-2",
            "name" : "Communications II",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : ["comm-1"],
            "column": 3
        },
        
        {
            "shortname" : "comm-3",
            "name" : "Communications III",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : ["comm-2"],
            "column": 3
        },

        {
            "shortname" : "mitm",
            "name" : "Deploy batch of MITM onion routing nodes",
            "tagline" : "",
            "price" : 2500000,
             "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        },

        {
            "shortname" : "backdoor",
            "name" : "Solicit software company to include backdoor",
            "tagline" : "",
            "price" : 2500000,
             "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        },

        {
            "shortname" : "fisa",
            "name" : "Issue FISA order for user data from US tech company",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        },

        {
            "shortname" : "surveil",
            "name" : "Contract mass-surveillance software project",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        },

        {
            "shortname" : "warehousing",
            "name" : "Provision data warehousing facility",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        },

        {
            "shortname" : "fiber-spy",
            "name" : "Install fiber optic interception apparatus",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
                ],
            "prereqs" : [],
            "column": 3
        }

        /* Domestic Politics */
/*
        {
            "shortname" : "statement",
            "name" : "Issue statement regarding activities",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
            "prereqs" : []
        }

        {
            "shortname" : "brief-congress",
            "name" : "Brief Congress on new initiatives",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
            "prereqs" : []
        } 

        {
            "shortname" : "influence-senate",
            "name" : "Exert influence on Senate",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
            "prereqs" : []
        } 

        {
            "shortname" : "terror-threat",
            "name" : "Fabricate terrorist threat",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
            "prereqs" : []
        } 

                {
            "shortname" : "snowden",
            "name" : "Snowden",
            "tagline" : "",
            "price" : 2500000,
            "outcomes" : [
                {
                    "money" : 0.0,
                    "power" : 1.0,
                    "approval": 0.0,
                    "progress": 0.0,
                    "displayText" : "",
                }
            "prereqs" : []
        } */

    ];

    var randomAction = []
/*
	var 

	action
		shortname
		name
		tagline
		price
		outcomes
		requires

	outcomes
		displayText
		*/