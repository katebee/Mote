function draw() {
  console.log("starts at draw");
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var mote = new Path2D();
    ctx.beginPath();
    mote.arc(400, 200, 50, 0, Math.PI * 2, true); // Outer circle
//create function draw circle
    ctx.closePath();
    //mote.arc(75, 75, 60, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(166,222,222,1)";
    ctx.strokeStyle = "rgba(110,201,201,1)";
    ctx.lineWidth = 15;
    ctx.stroke(mote);
    ctx.fill(mote);

    var pulse = new Path2D();
    ctx.beginPath();
    pulse.arc(400, 200, 70, 0, Math.PI * 2, true); // Outer circle

    ctx.closePath();
    //pulse.arc(75, 75, 60, 0, Math.PI * 2, true);
    //ctx.fillStyle = "rgba(166,222,222,1)";
    ctx.strokeStyle = "rgba(220,111,201,1)";
    ctx.lineWidth = 15;
    ctx.stroke(pulse);
    //ctx.fill(pulse);
  }
}
//use timeOut for 20ms to refresh
$(document).ready(function() {
    console.log("document is ready");
  $("#start").on("click", draw());
});
