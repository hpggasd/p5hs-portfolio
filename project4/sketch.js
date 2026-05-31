function setup() {
  createCanvas(600, 400);
  textSize(16);
  frameRate(30);
}

function draw() {
  background(246, 240, 232);

  let t = frameCount;

  // 시간에 따른 움직임
  let move1 = sin(t * 0.03) * 12;
  let move2 = cos(t * 0.025) * 12;

  // 시간에 따른 크기 변화
  let pulse = 1 + sin(t * 0.04) * 0.08;
  let centerPulse = 1 + sin(t * 0.06) * 0.15;

  // 시간에 따른 색상 변화
  let colorAmount = (sin(t * 0.025) + 1) / 2;

  let warm1 = lerpColor(color(255, 120, 120, 90), color(255, 220, 100, 90), colorAmount);
  let warm2 = lerpColor(color(255, 170, 80, 90), color(255, 100, 160, 90), colorAmount);
  let cool1 = lerpColor(color(90, 180, 255, 90), color(120, 255, 220, 90), colorAmount);
  let cool2 = lerpColor(color(80, 130, 255, 90), color(180, 140, 255, 90), colorAmount);

  noStroke();

  // 왼쪽 위 따뜻한 색 영역
  fill(warm1);
  ellipse(120 + move1, 110 + move2, 210 * pulse, 210 * pulse);
  fill(warm2);
  ellipse(170 + move2, 135 - move1, 190 * pulse, 190 * pulse);
  fill(255, 230, 90, 90);
  ellipse(210 - move1, 165 + move2, 160 * pulse, 160 * pulse);

  // 오른쪽 위 차가운 색 영역
  fill(cool1);
  ellipse(470 - move1, 110 + move2, 210 * pulse, 210 * pulse);
  fill(120, 255, 220, 90);
  ellipse(430 - move2, 145 - move1, 180 * pulse, 180 * pulse);
  fill(cool2);
  ellipse(395 + move1, 175 + move2, 150 * pulse, 150 * pulse);

  // 왼쪽 아래 보라/핑크 색 영역
  fill(180, 120, 255, 90);
  ellipse(130 + move2, 300 - move1, 210 * pulse, 210 * pulse);
  fill(255, 120, 210, 90);
  ellipse(175 - move1, 275 + move2, 180 * pulse, 180 * pulse);
  fill(255, 180, 230, 90);
  ellipse(215 + move1, 245 - move2, 145 * pulse, 145 * pulse);

  // 오른쪽 아래 초록 계열 색 영역
  fill(120, 255, 150, 90);
  ellipse(470 - move2, 300 - move1, 210 * pulse, 210 * pulse);
  fill(70, 220, 170, 90);
  ellipse(430 + move1, 270 + move2, 180 * pulse, 180 * pulse);
  fill(170, 255, 120, 90);
  ellipse(390 - move1, 240 - move2, 145 * pulse, 145 * pulse);

  // 가운데 원형 구조
  fill(255, 255, 255, 130);
  ellipse(300, 200, 230 * centerPulse, 230 * centerPulse);
  fill(255, 250, 220, 150);
  ellipse(300, 200, 170 * centerPulse, 170 * centerPulse);
  fill(255, 200, 120, 110);
  ellipse(300, 200, 120 * centerPulse, 120 * centerPulse);
  fill(255, 120, 120, 100);
  ellipse(300, 200, 80 * centerPulse, 80 * centerPulse);
  fill(255, 240, 120, 220);
  ellipse(300, 200, 28 * centerPulse, 28 * centerPulse);

  // 사각형은 기존 구도를 유지하기 위해 그대로 배치
  fill(255, 255, 255, 160);
  rect(75, 60, 90, 55);
  rect(435, 60, 90, 55);
  rect(75, 285, 90, 55);
  rect(435, 285, 90, 55);

  fill(255, 255, 255, 120);
  rect(225, 70, 150, 40);
  rect(225, 290, 150, 40);

  // 삼각형도 중심 방향감을 유지
  fill(255, 255, 255, 160);
  triangle(245, 135, 355, 135, 300, 80);
  triangle(365, 145, 365, 255, 420, 200);
  triangle(245, 265, 355, 265, 300, 320);
  triangle(180, 145, 180, 255, 125, 200);

  // 구도 정리 선
  stroke(40, 50, 90, 180);
  strokeWeight(5);
  line(300, 40, 300, 360);
  line(80, 200, 520, 200);

  // 바깥 점들과 중심을 연결
  stroke(255, 255, 255, 170);
  strokeWeight(3);
  line(120 + move1, 110 + move2, 300, 200);
  line(470 - move1, 110 + move2, 300, 200);
  line(130 + move2, 300 - move1, 300, 200);
  line(470 - move2, 300 - move1, 300, 200);

  stroke(255, 130, 160, 160);
  line(70, 70, 530, 330);
  stroke(100, 180, 255, 160);
  line(530, 70, 70, 330);

  // 바깥 점들도 약간 움직이도록 설정
  noStroke();
  fill(40, 50, 90, 160);
  ellipse(120 + move1, 110 + move2, 24 * pulse, 24 * pulse);
  ellipse(470 - move1, 110 + move2, 24 * pulse, 24 * pulse);
  ellipse(130 + move2, 300 - move1, 24 * pulse, 24 * pulse);
  ellipse(470 - move2, 300 - move1, 24 * pulse, 24 * pulse);

  // 중심 주변 작은 점들은 크기 변화 중심으로 표현
  fill(255, 255, 255, 150);
  ellipse(300, 95, 24 * centerPulse, 24 * centerPulse);
  ellipse(405, 200, 24 * centerPulse, 24 * centerPulse);
  ellipse(300, 305, 24 * centerPulse, 24 * centerPulse);
  ellipse(195, 200, 24 * centerPulse, 24 * centerPulse);
}

// G 키를 누르면 GIF 저장
function keyPressed() {
  if (key === 'g' || key === 'G') {
    saveGif('abstract_animation', 5);
  }
}
