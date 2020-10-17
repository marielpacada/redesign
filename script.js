function collapse_nav() {
    // element heights
    var nav_height = document.getElementById("nav").clientHeight;
    var scroll_height = document.documentElement.scrollTop;

    if (scroll_height > .4 * nav_height) {
        document.getElementById("logo").style.fontSize = "3rem";
        document.getElementById("dropbtn").style.fontSize = "1rem";
        document.getElementById("dropbtn").style.paddingLeft = "1rem";
        document.getElementById("dropbtn").style.paddingTop = "2rem";

    } else {
        document.getElementById("logo").style.fontSize = "5rem";
        document.getElementById("dropbtn").style.fontSize = "1.5rem";
    }
}

var down_scroll = false;
var up_scroll = false;

function draw_flower() {
    var flower = document.getElementById("flower");
    var flower_link = document.getElementById("flower-link");

    if (down_scroll) {
        return;
    }

    flower.parentNode.appendChild(flower);
    flower.classList.add("animate-in");
    flower.style.opacity = "1";
    flower_link.href = "#";
    flower_link.style.cursor = "pointer";
    down_scroll = true;
}


function search() {
    var text = document.getElementById("search-bar").value;
    if (text == "") {
        alert("type something, silly!");
        return;
    }
    alert('"' + text + '"? omg i like that song too!! •ᴗ• (p.s. am not storing your input or anything so feel free to be as weird as you want hehe)');
    document.getElementById("search-bar").value = "";
    return;
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

    document.getElementById("sidenav-button").style.marginLeft = "250px";
    document.getElementById("sidenav-button").style.cursor = "default";
    document.getElementById("sidenav-button").style.filter = "grayscale(100%)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenav-button").style.marginLeft = "0";
    document.getElementById("sidenav-button").style.cursor = "pointer";
    document.getElementById("sidenav-button").style.filter = "grayscale(0%)";

}




