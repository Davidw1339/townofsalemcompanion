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

function updateFilteredList(matches) //makes change to list of roles to click on
{
	$("#rolelist").empty();
	matches.forEach(function(role)
	{
		$("#rolelist").append("<span class = 'filteredrole'>" + role + "</span><br>");
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
