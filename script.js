function collapse_nav() {
    // element heights
    var nav_height = document.getElementById("nav").clientHeight;
    var scroll_height = document.documentElement.scrollTop; 

    if (scroll_height > .4 * nav_height) { 
        document.getElementById("logo").style.fontSize = "3rem";
    } else { 
        document.getElementById("logo").style.fontSize = "5rem";
    }
}

var down_scroll = false;
var up_scroll = false;

function draw_flower() {
    var nav_height = document.getElementById("nav").clientHeight;
    var scroll_height = document.documentElement.scrollTop; 
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


function hello() { 
    var text = document.getElementById("search-bar").value;
    alert('"' + text + '"? omg i like that song too!! •ᴗ• (p.s. am not storing your input or anything so feel free to be as weird as you want hehe)');
    document.getElementById("search-bar").value = "";
    return;
}
