var rolez = [
"Amnesiac",
"Bodyguard",
"Doctor",
"Escort",
"Investigator",
"Jailor",
"Lookout",
"Mayor",
"Medium",
"Retributionist",
"Sheriff",
"Spy",
"Survivor",
"Transporter",
"Vampire Hunter",
"Veteran",
"Vigilante",
];

var questions = false;

var allHidden = false;

var rolesJSON;

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

function getquestionfilteredrolez(text)
{
    var matches = [];
    rolez.forEach(function(role) //for each to check every role with the filtered text
    {
        if(role.toLowerCase().indexOf(text.toLowerCase()) > -1) //check if there are matches (case insensitive)
        {
            matches.push(role);
        }
    });
    return matches;
}

function ordinalSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function updateQuestionFilteredList(matches) //makes change to list of rolez to click on
{
    $("#questionrolelist").empty();
    matches.forEach(function(role)
    {
        $("#questionrolelist").append("<span class = 'questionfilteredrole'>" + role + "</span><br>");
    });
    
    $("#copyButton").click(function(){
        var ques = $(".copyques").text();
        
        window.prompt("Press CTRL+C to copy, then press OK or Enter", ques);
    });
    
    $(".questionfilteredrole").click(function(){
        var foundRole = getObjects(rolesJSON, 'role', $(this).text());
        var attr = foundRole[0].attributes;
        var attributes = "";
        $.each(attr, function(index, value){
            attributes += attr[index].attr + "<br>";
        });
        var abilities = foundRole[0].abilities;
        var fac = Math.floor(Math.random() * 2) + 1;
        if(fac == 1){
            var wordsArray = abilities.split(' ');
            var numberOfWords = wordsArray.length;
            var random = Math.floor(Math.random() * numberOfWords) + 1;
            if(random != numberOfWords && random != 1){
                $("#questions").html("Role Name: " + foundRole[0].role + "<br>" +
                "Alignment/Category: " + foundRole[0].alignment + "<br>" +
                "Abilities: " + foundRole[0].abilities + "<br>" +
                "Attributes: " + attributes +
                "Goal: " + foundRole[0].goal + "<br>" +
                "Question: <span class='copyques'>What is the " + ordinalSuffix(random) + " word of your ability?</span><br>" +
                "Answer: " + wordsArray[random - 1] + "<br>" +
                "<button class='btn btn-success' id='copyButton'>Copy Question</button>"
                );
            } else if(random == numberOfWords){
                var last = numberOfWords - 1;
                $("#questions").html("Role Name: " + foundRole[0].role + "<br>" +
                "Alignment/Category: " + foundRole[0].alignment + "<br>" +
                "Abilities: " + foundRole[0].abilities + "<br>" +
                "Attributes: " + attributes +
                "Goal: " + foundRole[0].goal + "<br>" +
                "Question: <span class='copyques'>What is the last word of your ability?</span><br>" +
                "Answer: " + wordsArray[last] + "<br>" +
                "<button class='btn btn-success' id='copyButton'>Copy Question</button>"
                );
            } else {
                $("#questions").html("Role Name: " + foundRole[0].role + "<br>" +
                "Alignment/Category: " + foundRole[0].alignment + "<br>" +
                "Abilities: " + foundRole[0].abilities + "<br>" +
                "Attributes: " + attributes +
                "Goal: " + foundRole[0].goal + "<br>" +
                "Question: <span class='copyques'>What is the first word of your ability?</span><br>" +
                "Answer: " + wordsArray[0] + "<br>" +
                "<button class='btn btn-success' id='copyButton'>Copy Question</button>"
                );
            }
        } else {
            var numberOfAttr = attr.length;
            var random = Math.floor(Math.random() * numberOfAttr) + 1;
            if(random != numberOfAttr && random != 1){
                $("#questions").html("Role Name: " + foundRole[0].role + "<br>" +
                "Alignment/Category: " + foundRole[0].alignment + "<br>" +
                "Abilities: " + foundRole[0].abilities + "<br>" +
                "Attributes: " + attributes +
                "Goal: " + foundRole[0].goal + "<br>" +
                "Question: <span class='copyques'>What is your " + ordinalSuffix(random) + " attribute?</span><br>" +
                "Answer: " + attr[random - 1].attr + "<br>" +
                "<button class='btn btn-success' id='copyButton'>Copy Question</button>"
                );
            } else if(random == numberOfAttr){
                var last = numberOfAttr - 1;
                $("#questions").html("Role Name: " + foundRole[0].role + "<br>" +
                "Alignment/Category: " + foundRole[0].alignment + "<br>" +
                "Abilities: " + foundRole[0].abilities + "<br>" +
                "Attributes: " + attributes +
                "Goal: " + foundRole[0].goal + "<br>" +
                "Question: <span class='copyques'>What is your last attribute?</span><br>" +
                "Answer: " + attr[last].attr + "<br>" +
                "<button class='btn btn-success' id='copyButton'>Copy Question</button>"
                );
            } else {
                $("#questions").html("Role Name: " + foundRole[0].role + "<br>" +
                "Alignment/Category: " + foundRole[0].alignment + "<br>" +
                "Abilities: " + foundRole[0].abilities + "<br>" +
                "Attributes: " + attributes +
                "Goal: " + foundRole[0].goal + "<br>" +
                "Question: <span class='copyques'>What is your first attribute?</span><br>" +
                "Answer: " + attr[0].attr + "<br>" +
                "<button class='btn btn-success' id='copyButton'>Copy Question</button>"
                );
            }
        }
        
        $("#generatedQuestion").modal("show");
        $("#questionfilter").val("");
        updateQuestionFilteredList(rolez);
    });
    
}

$(document).ready(function(){
    
    updateQuestionFilteredList(rolez);
    
    $.getJSON('roles.json', function(data){
        rolesJSON = data;
    });
    
    $("#extensionsSave").click(function(){
        if($("#questionGenCheck").is(':checked')){
           questions = true;
           $("#questionGenDiv").css('visibility', 'visible');
       } else {
           questions = false;
           $("#questionGenDiv").css('visibility', 'hidden');
       }
    });
    
    $("#extensionsCancel").click(function(){
        if($("#questionGenCheck").is(':checked') != questions){
            $("#questionGenCheck").prop("checked", !$("#questionGenCheck").prop("checked"));
        }
    });
    
    $("#extensionsCancel2").click(function(){
        if($("#questionGenCheck").is(':checked') != questions){
            $("#questionGenCheck").prop("checked", !$("#questionGenCheck").prop("checked"));
        }
    });
    
    $("#questionfilter").on('input', function() //check for changes in filter
    {
        var text = $(this).val();
        var rolez = getquestionfilteredrolez(text);
        updateQuestionFilteredList(rolez);
    });

    $("#questionfilter").keypress(function(event) //detect enter and use it to cross off elements
    {
        if(event.which == 13)
        {
            //submit on the first element
            $(".questionfilteredrole").first().trigger("click");
        }
    });
    
});