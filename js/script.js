function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var mote = new Path2D();
    ctx.beginPath();
    mote.arc(400, 200, 50, 0, Math.PI * 2, true); // Outer circle

    ctx.closePath();
    //mote.arc(75, 75, 60, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(166,222,222,1)";
    ctx.strokeStyle = "rgba(110,201,201,1)";
    ctx.lineWidth = 15;
    ctx.stroke(mote);
    ctx.fill(mote);

    var pulse = new Path2D();

  }
}

$(document).ready(function() {
  $("#start").on("click", draw());
});
