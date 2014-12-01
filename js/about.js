var blurbs = [
    [
        "Drew Malzahn", 
        "Drew Malzahn is a freshman majoring in Cybersecurity at Stevens Institute of Technology. He likes UNIX and eating eggs.", 
        "./media/DM.png"
    ],
    [
        "Shawn Fodor",
        "Shawn Fodor is a freshman majoring in Cybersecurity at Stevens Insitute of Technology. ",
        "./media/SF.png"
    ],
    [
        "Henry Paul",
        "Henry Paul is a freshman majoring in Computer Science at Stevens Institute of Technology.",
        "./media/HP.png"
    ],
    [
        "Ayse Akin", 
        "Ayse Akin is a freshman majoring in Computer Science at Stevens Institute of Technology.",
        "./media/AA.png"
    ],
    [
        "Ali Smith", 
        "Ali Smith is a freshman majoring in Computer Science at Stevens Institute of Technology.",
        "./media/AS.png"
    ]
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
