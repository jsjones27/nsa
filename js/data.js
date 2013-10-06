
    var actions = [

        /* Cryptography */

        {
            "shortname" : "crypt-1",
            "name" : "Cryptography I",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [
				{
					"p" : 1.0,
					"displayText" : "",
					"effect" : function ( game ) {
						
					}
				}
			],
            "prereqs" : []
        },
        
        {
            "shortname" : "crypt-2",
            "name" : "Cryptography II",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : ["crypt-1"]
        }
        
        {
            "shortname" : "crypt-3",
            "name" : "Cryptography III",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : ["crypt-2"]
        }

        {
            "shortname" : "decrypt-academic",
            "name" : "Sabotage academic cryptography",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "decrypt-industry",
            "name" : "Sabotage industrial cryptography",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "mandate-standard",
            "name" : "Mandate compromised security standard",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        /* Computer Network Operations */

        {
            "shortname" : "cysec-1",
            "name" : "Cybersecurity I",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        },
        
        {
            "shortname" : "cysec-2",
            "name" : "Cybersecurity II",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : ["cysec-1"]
        }
        
        {
            "shortname" : "cysec-3",
            "name" : "Cybersecurity III",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : ["cysec-2"]
        }

        {
            "shortname" : "attack-china",
            "name" : "Launch cyberattack against China",
            "tagline" : "",
        
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "attack-russia",
            "name" : "Launch cyberattack against Russia",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "malware",
            "name" : "Design and distribute malware",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "foreign-raid",
            "name" : "Raid foreign datacenter",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        /* Communications */

        {
            "shortname" : "comm-1",
            "name" : "Communications I",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        },
        
        {
            "shortname" : "comm-2",
            "name" : "Communications II",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : ["comm-1"]
        }
        
        {
            "shortname" : "comm-3",
            "name" : "Communications III",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : ["comm-2"]
        }

        {
            "shortname" : "mitm",
            "name" : "Deploy batch of MITM onion routing nodes",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "backdoor",
            "name" : "Solicit software company to include backdoor",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "fisa",
            "name" : "Issue FISA order for user data from US tech company",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "surveil",
            "name" : "Contract mass-surveillance software project",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "warehousing",
            "name" : "Provision data warehousing facility",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "fiber-spy",
            "name" : "Install fiber optic interception apparatus",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        /* Domestic Politics */

        {
            "shortname" : "statement",
            "name" : "Issue statement regarding activities",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        }

        {
            "shortname" : "brief-congress",
            "name" : "Brief Congress on new initiatives",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        } 

        {
            "shortname" : "influence-senate",
            "name" : "Exert influence on Senate",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        } 

        {
            "shortname" : "terror-threat",
            "name" : "Fabricate terrorist threat",
            "tagline" : "",
            "price" : 0,
            "outcomes" : [],
            "prereqs" : []
        } 

    ];

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
		