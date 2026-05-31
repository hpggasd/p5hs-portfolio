function setup() {
  createCanvas(600, 400);
  background(220);

  // ===== 귀ㅣ =====
  fill(255, 220, 190);
  stroke(0);
  strokeWeight(2);
  ellipse(235, 180, 30, 50);
  ellipse(365, 180, 30, 50);

  // ===== 목 =====
  noStroke();
  fill(255, 220, 190);
  rect(280, 250, 40, 50);

  // ===== 얼굴 =====
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 190);
  ellipse(300, 180, 160, 180);

  // ===== 머리 =====
  noStroke();
  fill(0);
  arc(300, 150, 180, 160, PI, TWO_PI);

  // ===== 눈 =====
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(260, 180, 40, 40);
  ellipse(340, 180, 40, 40);

  fill(0);
  ellipse(260, 180, 10, 10);
  ellipse(340, 180, 10, 10);

  // ===== 안경 =====
  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(260, 180, 60, 60);
  ellipse(340, 180, 60, 60);
  line(290, 180, 310, 180);
  line(230, 175, 210, 165);
  line(370, 175, 390, 165);
  
  // ===== 코 =====
  strokeWeight(1);
  line(300, 200, 300, 230);

  // ===== 입 =====
  fill(255, 80, 80);
  stroke(0);
  strokeWeight(2);
  arc(300, 250, 60, 30, 0, PI);

  // ===== 몸 =====
  noStroke();
  fill(0, 0, 120);
  rect(200, 300, 200, 120, 40);

  // ===== 옷 선 =====
  stroke(0);
  strokeWeight(2);
  line(230, 340, 230, 400);
  line(370, 340, 370, 400);

  // ===== 후드 끈 =====
  stroke(0);
  strokeWeight(3);
  line(280, 300, 280, 350);
  line(320, 300, 320, 350);
}
