


var canvas;
var stage;
var mote;
var halo;

function createEasel() {
  console.log("making an easel in the canvas");
  // create a new stage and point it at our canvas:
  canvas = document.getElementById('mote-canvas');
  stage = new createjs.Stage(canvas);

  var mote = new createjs.Shape();
  mote.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  mote.x = 100;
  mote.y = 100;
  stage.addChild(circle);

  stage.update();
}
