var blurbs = [
    ["Drew Malzahn", "Drew is good at computers, sort of.", "./media/DM.png"],
    ["Shawn Fodor" , "Shawn is good at Photoshop."        , "./media/SF.jpg"],
    ["Henry Paul"  , "Henry is good at CSS."              , "./media/HP.jpg"],
    ["Ayse Akin"   , "Ayse is good at CSS, too!"          , "./media/AA.jpg"],
    ["Ali Smith"   , "Ali is good at HTML."               , "./media/HP.jpg"]
];
var blurblen = 5;
var index = 0;
function forward()
{
    if (index >= blurblen - 1)
        index = 0;
    else
        index++;
    load();
}

function back()
{
    if (index <= 0)
        index = blurblen - 1;
    else
        index--;
    load();
}

function load()
{
    var name = document.getElementById("name");
    name.textContent = blurbs[index][0];

    var blurb = document.getElementById("blurb");
    blurb.textContent = blurbs[index][1];

    var blurbimg = document.getElementById("picture");
    blurbimg.src = blurbs[index][2];
}
