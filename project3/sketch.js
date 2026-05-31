/*********************************************
  1. mouse:
    - 마우스 버튼 클릭시 배경색이 랜덤하게 바뀜
    - 마우스 포인터 이동시 눈동자가 마우스를 따라 움직임
  2. keyboard:
    - 키보드의 S 키를 누르면 웃는 표정으로 바뀜
    - 키보드의 N 키를 누르면 기본 표정으로 돌아감
    - 키보드의 G 키를 누르면 GIF 파일이 저장됨
*********************************************/

let bgR = 220;
let bgG = 220;
let bgB = 220;
let smile = false;
let moveX = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgR, bgG, bgB);

  moveX = sin(frameCount * 0.05) * 4;

  let eyeMoveX = map(mouseX, 0, width, -6, 6);
  let eyeMoveY = map(mouseY, 0, height, -6, 6);
  eyeMoveX = constrain(eyeMoveX, -6, 6);
  eyeMoveY = constrain(eyeMoveY, -6, 6);

  fill(255, 220, 190);
  stroke(0);
  strokeWeight(2);
  ellipse(235 + moveX, 180, 30, 50);
  ellipse(365 + moveX, 180, 30, 50);

  noStroke();
  fill(255, 220, 190);
  rect(280 + moveX, 250, 40, 50);

  stroke(0);
  strokeWeight(2);
  fill(255, 220, 190);
  ellipse(300 + moveX, 180, 160, 180);

  noStroke();
  fill(0);
  arc(300 + moveX, 150, 180, 160, PI, TWO_PI);

  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(260 + moveX, 180, 40, 40);
  ellipse(340 + moveX, 180, 40, 40);

  fill(0);
  ellipse(260 + moveX + eyeMoveX, 180 + eyeMoveY, 10, 10);
  ellipse(340 + moveX + eyeMoveX, 180 + eyeMoveY, 10, 10);

  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(260 + moveX, 180, 60, 60);
  ellipse(340 + moveX, 180, 60, 60);
  line(290 + moveX, 180, 310 + moveX, 180);
  line(230 + moveX, 175, 210 + moveX, 165);
  line(370 + moveX, 175, 390 + moveX, 165);

  stroke(0);
  strokeWeight(1);
  line(300 + moveX, 200, 300 + moveX, 230);

  stroke(0);
  strokeWeight(2);
  fill(255, 80, 80);

  if (smile == true) {
    arc(300 + moveX, 245, 60, 35, 0, PI);
    noStroke();
    fill(255, 170, 170);
    ellipse(250 + moveX, 230, 20, 10);
    ellipse(350 + moveX, 230, 20, 10);
  } else {
    stroke(0);
    line(275 + moveX, 250, 325 + moveX, 250);
  }

  noStroke();
  fill(0, 0, 120);
  rect(200 + moveX, 300, 200, 120, 40);

  stroke(0);
  strokeWeight(2);
  line(230 + moveX, 340, 230 + moveX, 400);
  line(370 + moveX, 340, 370 + moveX, 400);

  stroke(0);
  strokeWeight(3);
  line(280 + moveX, 300, 278 + moveX, 350);
  line(320 + moveX, 300, 322 + moveX, 350);
}

function mousePressed() {
  bgR = random(255);
  bgG = random(255);
  bgB = random(255);
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    smile = true;
  }

  if (key == 'n' || key == 'N') {
    smile = false;
  }

  if (key == 'g' || key == 'G') {
    saveGif("my_character", 5);
  }
}
