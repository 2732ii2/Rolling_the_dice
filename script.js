document.querySelector(".left").style.background = "blue";
// this is also same thing
//for just trying to make a smaller code refrenece
function get_i() {
  var a = document.querySelector(".im");
  a.style.backgroundPosition = "center";
  a.style.backgroundSize = "cover";
  a.style.backgroundRepeat = "no-repeat";
}
//this is for rolling the dice
var count = 0;
main_dice = 0;
function dice_im() {
  var a = Math.random() * (6 - 1) + 1;
  a = parseInt(a);

  // console.log(a);
  if (a == 1) {
    main_dice = 1;
    var a = document.querySelector(".im");
    // url(./images_fold/_1.png)
    a.style.background = "url('./images_fold/_1.png')";
    var d = 1;
    count += d;
    console.log("this is one number dice");
    get_i();
  }
  if (a == 2) {
    main_dice = 0;
    var a = document.querySelector(".im");
    a.style.background = "url('./images_fold/_2.png')";
    get_i();
    var d = 2;
    count += d;
    console.log("this is two number dice");
  }
  if (a == 3) {
    main_dice = 0;
    var a = document.querySelector(".im");
    a.style.background = "url('./images_fold/_3.png')";
    get_i();
    var d = 3;
    count += d;
    console.log("this is three number dice");
  }
  if (a == 4) {
    main_dice = 0;
    var a = document.querySelector(".im");
    a.style.background = "url('./images_fold/_4.png')";
    get_i();
    var d = 4;
    count += d;
    console.log("this is fourth number dice");
  }
  if (a == 5) {
    main_dice = 0;
    var a = document.querySelector(".im");
    a.style.background = "url('./images_fold/_5.png')";
    get_i();
    var d = 1;
    count += 5;
    console.log("this is fifth number dice");
  }
  if (a == 6) {
    main_dice = 0;
    var a = document.querySelector(".im");
    a.style.background = "url('./images_fold/_6.png')";
    get_i();
    var d = 6;
    count += d;
    console.log("this is sixth number dice");
  }
}
//This function for adding the condition of 1
function dic_in() {
  console.log("hi");
}

// this is for initialize the count of player 1 current
var main = 0;
function gamer() {
  // now here i am creating the divisions.
  var a = document.querySelector(".left").style.background;
  if (a == "blue") {
    // for getting the value;

    console.log("this is the whole count " + count);
    // putting the value
    document.getElementById("__1").innerText = count;
    main = count;
  } else {
    // for getting the value;

    console.log("this is the whole count " + count);
    // putting the value
    document.getElementById("_2").innerText = count;
    main = count;
  }
}

//this is toggle button or hold button function
function on_check() {
  var a = document.querySelector(".left").style.background;
  if (a == "blue") {
    document.querySelector(".left").style.background = "skyblue";
    document.querySelector(".right").style.background = "blue";
    // this is for initailizing count for player 1
    document.getElementById("__1").innerText = 0;
    if (main_dice == 1) {
      document.getElementById("sp").innerText = 0;
    } else {
      document.getElementById("sp").innerText =
        main + parseInt(document.getElementById("sp").innerText);
    }
    count = 0;
    main = 0;
  } else {
    document.querySelector(".left").style.background = "blue";
    document.querySelector(".right").style.background = "skyblue";
    // this is for initailizing count for player 2
    document.getElementById("_2").innerText = 0;
    // here we just adding the with last current value and right now current value.
    if (main_dice == 1) {
      document.getElementById("sp1").innerText = 0;
    } else {
      document.getElementById("sp1").innerText =
        main + parseInt(document.getElementById("sp1").innerText);
    }
    main = 0;
    count = 0;
  }
}
// this is for making the count labelling

function new_game() {
  console.log("new game is clicked");
  document.getElementById("sp").innerText = 0;
  document.getElementById("__1").innerText = 0;
  document.getElementById("sp1").innerText = 0;
  document.getElementById("_2").innerText = 0;
}

document.getElementById("__1").innerText = 0;
