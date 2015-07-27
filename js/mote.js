//MODULE FOR CANVAS

function responsiveCanvas() {
  var canvasWidth = $(window).width() - 50;
  console.log("window width is: " + canvasWidth);
  var canvasArea = $("#mote-canvas").height() * canvasWidth;
  //if (canvasWidth < 800) {

  //}

}

//MODULE FOR CLOCK - keeping clock components confined to local scope

var Clock = (function () {
  var displayTime = function() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      var clockDiv = document.getElementById('clock');
      clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
    }

    return {
    displayTime: displayTime //public method
  };
}()); // Immediately-Invoked-Function-Expression



//SCRIPT FOR CANVAS DISPLAY - PHENOTYPE / GENE EXPRESSION

function draw() {
  console.log("starts at draw");

  var canvas = document.getElementById('mote-canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  /*  var canvasHeight = canvas.height();
    var canvasWidth = canvas.width(); */

    var pulse = new Path2D();
    ctx.beginPath();
    pulse.arc(400, 300, 160, 0, Math.PI * 2, true); // Outer circle
    ctx.closePath();
    ctx.fillStyle = "rgba(220,111,201,0.5)"; //get chromophore func return value
    ctx.lineWidth = 15;
    ctx.fill(pulse);

    var mote = new Path2D();
    ctx.beginPath();
    mote.arc(400, 300, 120, 0, Math.PI * 2, true); // Body of mote
    ctx.closePath();
    //mote.arc(75, 75, 60, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(166,222,222,1)";
    ctx.strokeStyle = "rgba(110,201,201,1)";
    ctx.lineWidth = 15;
    ctx.stroke(mote);
    ctx.fill(mote);
  };
}

//use timeOut for 20ms to refresh



//--------------------- main ---------------------

$(document).ready(function() {

  console.log("document is ready");

  //Add the clock and update each second
  Clock.displayTime();
  setInterval(Clock.displayTime, 1000);


  draw();

  //$("#start").on("click", draw());
  $('#title-link').smoothScroll({offset: -109});
  $('#about-link').smoothScroll({offset: -40});
  $('#contact-link').smoothScroll({offset: -40});

  $(window).resize(function() {
    var windowWidth = $(window).width() - 50;
    console.log("window width is: " + windowWidth);
    var canvasArea = $("#mote-canvas").height() * $("#mote-canvas").width();
    console.log("canvas area is: " + canvasArea);

  });
});
