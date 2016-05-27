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

function updateQuestionFilteredList(matches) //makes change to list of rolez to click on
{
    $("#questionrolelist").empty();
    matches.forEach(function(role)
    {
        $("#questionrolelist").append("<span class = 'questionfilteredrole'>" + role + "</span><br>");
    });
    
    $(".questionfilteredrole").click(function(){
        console.log(getObjects(rolesJSON, 'role', $(this).text()));
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