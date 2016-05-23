var roles = [
"Amnesiac",
"Arsonist",
"Blackmailer",
"Bodyguard",
"Consigliere",
"Consort",
"Disguiser",
"Doctor",
"Escort",
"Executioner",
"Forger",
"Framer",
"Godfather",
"Investigator",
"Jailor",
"Janitor",
"Jester",
"Lookout",
"Mafioso",
"Mayor",
"Medium",
"Retributionist",
"Serial Killer",
"Sheriff",
"Spy",
"Survivor",
"Transporter",
"Vampire",
"Vampire Hunter",
"Veteran",
"Vigilante",
"Werewolf",
"Witch"
];

var Jailor = "Jailor";

var TownInvest = [
"Investigator",
"Lookout",
"Sheriff",
"Spy"
];

var TownKilling = [
"Jailor",
"Vampire Hunter",
"Veteran",
"Vigilante"
];

var TownProtect = [
"Bodyguard",
"Doctor"
];

var TownSupport = [
"Escort",
"Mayor",
"Medium",
"Retributionist",
"Transporter"
];

var Godfather = "Godfather";

var Mafioso = "Mafioso";

var RandomMafia = [
"Disguiser",
"Forger",
"Framer",
"Janitor",
"Blackmailer",
"Consigliere",
"Consort"
];

var NeutralBenign = [
"Amnesiac",
"Survivor"
];

var NeutralEvil = [
"Executioner",
"Jester",
"Witch"
];

var NeutralKilling = [
"Arsonist",
"Serial Killer",
"Werewolf"
];

var jailor = false;
var towninvest = false;
var towninvest1 = false;
var townsupport = false;
var townsupport1 = false;
var townprotect = false;
var townkill = false;
var randomtown = false;
var godfather = false;
var mafioso = false;
var randommaf = false;
var neutralkill = false;
var neutralevil = false;
var neutralbenign = false;
var any = false;

function getFilteredRoles(text)
{
	var matches = [];
	roles.forEach(function(role) //for each to check every role with the filtered text
	{
		if(role.toLowerCase().indexOf(text.toLowerCase()) > -1) //check if there are matches (case insensitive)
		{
			matches.push(role);
		}
	});
	return matches;
}

function strikeThrough(target){
    $(".role").each(function(i, obj){
        text1 = $(this).text();
        if(text1 == target && $(this).css('textDecoration') != 'line-through'){
           $(this).css('textDecoration', 'line-through');
           return false;
        }
    });
}

function updateFilteredList(matches) //makes change to list of roles to click on
{
	$("#rolelist").empty();
	matches.forEach(function(role)
	{
		$("#rolelist").append("<span class = 'filteredrole'>" + role + "</span><br>");
	});
    
    $(".filteredrole").click(function(){
        var text = $(this).text();
        var text1, target;
        if(text == Jailor){
            if(!jailor){
                target = "Jailor";
                jailor = true;
            } else if(!townkill){
                target = "Town Killing";
                townkill = true;
            } else if(!randomtown){
                target = "Random Town";
                randomtown = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, TownInvest) > -1){
            if(!towninvest){
                target = "Town Investigative";
                towninvest = true;
            } else if(!towninvest1){
                target = "Town Investigative";
                towninvest1 = true;
            } else if(!randomtown){
                target = "Random Town";
                randomtown = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, TownSupport) > -1){
            if(!townsupport){
                target = "Town Support";
                townsupport = true;
            } else if(!townsupport1){
                target = "Town Support";
                townsupport1 = true;
            } else if(!randomtown){
                target = "Random Town";
                randomtown = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, TownProtect) > -1){
            if(!townprotect){
                target = "Town Protective";
                townprotect = true;
            } else if(!randomtown){
                target = "Random Town";
                randomtown = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, TownKilling) > -1){
            if(!townkill){
                target = "Town Killing";
                townkill = true;
            } else if(!randomtown){
                target = "Random Town";
                randomtown = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if(text == "Godfather"){
            if(!godfather){
                target = "Godfather";
                godfather = true;
            }
            strikeThrough(target);
        } else if(text == "Mafioso"){
            if(!mafioso){
                target = "Mafioso";
                mafioso = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, RandomMafia) > -1){
            if(!randommaf){
                target = "Random Mafia";
                randommaf = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, NeutralKilling) > -1){
            if(!neutralkill){
                target = "Neutral Killing";
                neutralkill = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, NeutralEvil) > -1){
            if(!neutralevil){
                target = "Neutral Evil";
                neutralevil = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        } else if($.inArray(text, NeutralBenign) > -1){
            if(!neutralbenign){
                target = "Neutral Benign";
                neutralbenign = true;
            } else if(!any){
                target = "Any";
                any = true;
            }
            strikeThrough(target);
        }
        $("#filter").val("");
        updateFilteredList(roles);
    });
    
}

$(document).ready(function() 
{
    updateFilteredList(roles);
	$(".role").click(function() 
	{
		if($(this).css('textDecoration') == 'line-through')
		{
			$(this).css('textDecoration', 'none');
            
            switch($(this).text()){
                case "Jailor":
                    jailor = false;
                    break;
                case "Town Investigative":
                    if($(this).attr("id") == "towninvest"){
                        towninvest = false;
                    } else if($(this).attr("id") == "towninvest1"){
                        towninvest1 = false;
                    }
                    break;
                case "Town Support":
                    if($(this).attr("id") == "townsupport"){
                        townsupport = false;
                    } else if($(this).attr("id") == "townsupport1"){
                        townsupport1 = false;
                    }
                    break;
                case "Town Protective":
                    townprotect = false;
                    break;
                case "Town Killing":
                    townkill = false;
                    break;
                case "Random Town":
                    randomtown = false;
                    break;
                case "Godfather":
                    godfather = false;
                    break;
                case "Mafioso":
                    mafioso = false;
                    break;
                case "Random Mafia":
                    randommaf = false;
                    break;
                case "Neutral Killing":
                    neutralkill = false;
                    break;
                case "Neutral Evil":
                    neutralevil = false;
                    break;
                case "Neutral Benign":
                    neutralbenign = false;
                    break;
                case "Any":
                    any = false;
                    break;
            }
		}
		else
		{
			$(this).css('textDecoration', 'line-through');
		}
		
	});

	$("#filter").on('input', function() //check for changes in filter
	{
		var text = $(this).val();
		var roles = getFilteredRoles(text);
		updateFilteredList(roles);
	});
    
});
