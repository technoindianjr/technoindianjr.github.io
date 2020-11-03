function ClearContent(id)
{
    var tagId = "tag" + id;
    var commentId = "comment" + id;
    var rankId = "tag" + id + "rank";
    document.getElementById(tagId).value = "";
    document.getElementById(commentId).value = "";
    document.getElementById(rankId).value="";
    if(id!=5)
    {
        for(var i=id; i<5; i++)
        {
            document.getElementById("tag" + parseInt(i)).value = document.getElementById("tag"+ (parseInt(i)+1)).value;
            document.getElementById("comment" + parseInt(i)).value = document.getElementById("comment"+ (parseInt(i)+1)).value;
            document.getElementById("tag" + parseInt(i) + "rank").value = document.getElementById("tag" + (parseInt(i)+1) + "rank").value;
            document.getElementById("tag" + (parseInt(i)+1)).value = "";
            document.getElementById("comment" + (parseInt(i)+1)).value = "";
            document.getElementById("tag" + (parseInt(i)+1) + "rank").value = "";
        }
    }
}

function PreventDupes(curr)
{
    var rank = curr.value;
    for (var i = 1; i<=5; i++)
    {
        if(("tag" + parseInt(i) + "rank") != curr.id)
        {
            if(rank == document.getElementById("tag" + parseInt(i) + "rank").value)
            {
                curr.value = "";
                alert("This rank is already selected");
            }
        }
    }
}

var tag1rank = document.getElementById("tag1rank");
var tag2rank = document.getElementById("tag2rank");
var tag3rank = document.getElementById("tag3rank");
var tag4rank = document.getElementById("tag4rank");
var tag5rank = document.getElementById("tag5rank");

tag1rank.onchange = function() {
    PreventDupes(this);
}
tag2rank.onchange = function() {
    PreventDupes(this);
}
tag3rank.onchange = function() {
    PreventDupes(this);
}
tag4rank.onchange = function() {
    PreventDupes(this);
}
tag5rank.onchange = function() {
    PreventDupes(this);
}
