$(document).ready(function () {
  $("#create-block").click(function () {
    $("<div/>")
      .attr({
        class: "node",
      })
      .prepend("<span></span>")
      .append("<span></span>")
      .append("<span></span>")
      .append("<div class='node-content'> </div>")
      .append(
        "<input type='text' name='input' autoComplete = 'off' placeholder='write it out'>"
      )
      //   .html(
      //       "THOUGHT / DESIRE / TASK<br> <input type='text' name='input' placeholder='write it out'>"
      //     )
      .append('<button class="close-btn" type="button">X</button>')

      .appendTo("#area")
      .draggable({ containment: "window", scroll: false })
      .css({
        top:
          Math.random() *
            ($(window).innerHeight() - $(".node").height() * 1.5) +
          "px", // multiply random .width(0..1) value by window height minus div height
        left:
          Math.random() *
            ($(window).innerWidth() / 2 - $(".node").width() * 1.5) +
          "px",
      });

    // $("<div/>")
    // .attr({
    //   class: "node",
    // })
    // .append(<span></span>)
    // .append(<span></span>)
    // .append(<span></span>)
    // .html(
    //   "THOUGHT / DESIRE / TASK<br> <input type='text' name='input' placeholder='write it out'>"
    // )
    // .append('<button class="close-btn" type="button">X</button>')
    // .appendTo("#area")
    // .draggable()
    // .css({
    //   top:
    //     Math.random() *
    //       ($(window).innerHeight() - $(".node").height() * 1.5) +
    //     "px", // multiply random .width(0..1) value by window height minus div height
    //   left:
    //     Math.random() *
    //       ($(window).innerWidth() / 2 - $(".node").width() * 1.5) +
    //     "px",
    // });
  });

  //   $('.close-btn').on('click', function(e) { $(e.target).closest('.draggable').hide(); });

  $("body").on("click", ".close-btn", function () {
    $(this).parent().remove();
  });

  var textarray = [
    "What would make you happy?",
    "What woud you tell your past self?",
    // "You are in control!",
    "You got this! :).",
    "Just a reminder that you got this!",
    "What works towards your goals?",
    "Take care of yourself!",
    "What would make you proud of yourself?",
    // "Motivation and action are a loop, you can start anywhere!",
    "Call a friend?",
    "Try Again. Fail again. Fail better.", //Sam Levenson
    "The secret of getting ahead is getting started.", //Mark Twain
    "Perseverance is not a long race; it is many short races one after the other.", //Walter Elliot
    "What you do today can improve all your tomorrows.", //Ralph Marston
    "Resting is ok!",
  ];

  function RndText() {
    var rannum = Math.floor(Math.random() * textarray.length);

    $(".spawn-text").fadeOut("fast", function () {
      $(this).text(textarray[rannum]).fadeIn("fast");
    });
  }

  //   $(".draggable").draggable();
  $(".node").draggable({ containment: "window", scroll: false });

  $("#droppable").droppable({
    drop: function () {
      // $(".spawn-text").fadeIn();
      RndText();
    },
  });

  $("#bubble-1").on("click", function () {
    $("#bubble-2").fadeIn(3000);
  });

  $("#bubble-2").on("click", function () {
    $("#bubble-3").fadeIn(3000);
  });

  $("#bubble-3").on("click", function () {
    $("#bubble-4").fadeIn(3000);
  });

  //   $("#bubble-4").on("click", function () {
  //     $("#bubble-4").load("cerebrum.html");
  //   });
});

function openFunction() {
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginRight="350px";
    document.getElementById("mainbox").innerHTML="<3 <br> &nbsp&nbsp&nbsp&nbsp <3 <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <3";

}

function closeFunction() {
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginRight="25px";
    document.getElementById("mainbox").innerHTML ="&#9776; Open";

}

// document.getElementsByClassName('close-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     this.parentNode.style.display = 'none';
// }, false);

// document.querySelector("#tag").addEventListener("click", function(event) {
//     // document.getElementById("tag").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//     event.preventDefault();
// }, false);

// window.onload = function(){
//     document.getElementsByClassName('close-btn').onclick = function(){
//         this.parentNode.parentNode.parentNode
//         .removeChild(this.parentNode.parentNode);
//         return false;
//     };
// };

//   $("<div/>")
//     .attr({
//       class: "spawn-text",
//       // <input type="text" name="input" placeholder="type something">
//     })
//     .html("What would make you happy?")
//     .appendTo("#area")

// .draggable()
// .css({
//   top:
//     Math.random() *
//       ($(window).innerHeight() - $(".spawn-text").height()) +
//     "px", // multiply random .width(0..1) value by window height minus div height
//   left:
//     Math.random() *
//       ($(window).innerWidth() - $(".spawn-text").width()) +
//     "px",
// });
