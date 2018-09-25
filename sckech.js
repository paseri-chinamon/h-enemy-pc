var pad_radius = 0;
var button_radius = 0;
var pad_pos = {};
var a_button = {};
var b_button = {};

var pad_data = {};
var a_data = {};
var b_data = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  pad_radius = Math.min(windowWidth, windowHeight) / 2.5;
  button_radius = Math.min(windowWidth, windowHeight) / 4;
  pad_pos['x'] = windowWidth / 4;
  pad_pos['y'] = windowHeight / 2;
  a_button['x'] = (windowWidth / 8) * 5;
  a_button['y'] = (windowHeight / 4) * 2.5;
  b_button['x'] = (windowWidth / 8) * 6.5;
  b_button['y'] = (windowHeight / 4) * 2;

  pad_data['button'] = 'pad';
  a_data['button'] = 'a';
  b_data['button'] = 'b';

  noStroke();
}

function draw() {
  background(245, 245, 245);

  fill(190, 190, 190);
  ellipse(pad_pos['x'], pad_pos['y'], pad_radius, pad_radius);

  fill(255, 0, 0);
  ellipse(a_button['x'], a_button['y'], button_radius, button_radius);

  fill(0, 0, 255);
  ellipse(b_button['x'], b_button['y'], button_radius, button_radius);

  mouseEvent(mouseX, mouseY);
  touchEvent(touches);
}

function mouseEvent(X, Y) {

  if ((Math.pow(X - a_button['x'], 2) + Math.pow(Y - a_button['y'], 2)) <= Math.pow(button_radius / 2, 2)) {
    a_data['action'] = true;
    playerAction(a_data);
  }

  if ((Math.pow(X - b_button['x'], 2) + Math.pow(Y - b_button['y'], 2)) <= Math.pow(button_radius / 2, 2)) {
    b_data['action'] = true;
    playerAction(b_data);
  }

  if ((Math.pow(X - pad_pos['x'], 2) + Math.pow(Y - pad_pos['y'], 2)) <= Math.pow(pad_radius / 2, 2)) {
    pad_data['action'] = {
      'x' : X - pad_pos['x'],
      'y': Y - pad_pos['y']
    };
    playerAction(pad_data);
  }

  fill(0, 0, 0, 50);
  ellipse(X, Y, Math.min(windowWidth, windowHeight) / 8, Math.min(windowWidth, windowHeight) / 8);

}

function touchEvent(_touches) {
  for (var i = 0; i < _touches.length; i++) {
    if ((Math.pow(_touches[i].x - a_button['x'], 2) + Math.pow(_touches[i].y - a_button['y'], 2)) <= Math.pow(button_radius / 2, 2)) {
      a_data['action'] = true;
      playerAction(a_data);
    }

    if ((Math.pow(_touches[i].x - b_button['x'], 2) + Math.pow(_touches[i].y - b_button['y'], 2)) <= Math.pow(button_radius / 2, 2)) {
      b_data['action'] = true;
      playerAction(b_data);
    }

    if ((Math.pow(_touches[i].x - pad_pos['x'], 2) + Math.pow(_touches[i].y - pad_pos['y'], 2)) <= Math.pow(pad_radius / 2, 2)) {
      pad_data['action'] = {
        'x': _touches[i].x - pad_pos['x'],
        'y': _touches[i].y - pad_pos['y']
      };
      playerAction(pad_data);
    }

    fill(0, 0, 0, 50);
    ellipse(_touches[i].x, _touches[i].y, Math.min(windowWidth, windowHeight) / 8, Math.min(windowWidth, windowHeight) / 8);
  }
}