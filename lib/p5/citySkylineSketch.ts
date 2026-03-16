import p5 from "p5";

export default function citySkylineSketch(p: p5) {
  const myArr: number[] = [];

  const small = 1;
  const medium = 1.5;
  const large = 2;

  const canvasWidth = 700;
  const canvasHeight = 1024;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background(255);
    p.noLoop();

    for (let i = 0; i < 256; i++) {
      myArr.push(i);
    }
  };

  p.draw = () => {
    p.noStroke();

    let yPos = 0;

    for (let i = 0; i < myArr.length; i++) {
      p.fill(myArr[i] / 1.5, 0, 80, 200);
      p.rect(0, yPos, p.width, p.height / 256);
      yPos += p.height / 256;
    }

    for (let i = 0; i < p.width; i++) {
      p.fill(255, 150);
      p.ellipse(i * 2, p.random(0, p.height), 2, 2);
      p.ellipse(i * 3, p.random(0, p.height), 3, 3);
    }

    p.fill(227, 215, 232);
    p.ellipse(350, 400, 300, 300);

    p.fill(255, 8);
    p.ellipse(350, 400, 400, 400);
    p.ellipse(350, 400, 500, 500);
    p.ellipse(350, 400, 600, 600);

    p.fill(255, 5);
    p.ellipse(350, 400, 700, 700);

    backTower(60, 680, large);
    backBuilding(200, 730, medium);
    backBuilding(250, 630, medium);
    backBuilding(350, 700, small);
    backTower(380, 640, small);
    backBuilding(420, 665, small);
    backTower(485, 590, small);
    backBuilding(500, 640, small);
    backBuilding(645, 630, large);

    midBuilding(50, 660, small);
    midBuilding(110, 750, small);
    midCathedral(200, 940, small);
    midBuilding(300, 805, medium);
    midTower(405, 855, small);
    midBuilding(490, 785, small);
    midBuilding(500, 880, small);
    midTower(625, 800, medium);

    frontTower(100, 1120, large);
    frontBuilding(250, 1020, small);
    frontBuilding(280, 890, small);
    frontBuilding(300, 1070, small);
    frontBuilding(390, 920, small);
    frontBuilding(450, 970, small);
    frontTower(550, 1070, small);
    frontBuilding(650, 920, small);
  };

  function frontBuilding(x: number, y: number, scale: number) {
    p.fill(79, 51, 91);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 305 * scale);
  }

  function midBuilding(x: number, y: number, scale: number) {
    p.fill(116, 75, 133);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 305 * scale);
  }

  function backBuilding(x: number, y: number, scale: number) {
    p.fill(160, 118, 177);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 305 * scale);
  }

  function frontTower(x: number, y: number, scale: number) {
    p.fill(79, 51, 91);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 305 * scale);
    p.triangle(
      x - 50 * scale,
      y - 152 * scale,
      x,
      y - 202 * scale,
      x + 50 * scale,
      y - 152 * scale
    );
  }

  function midTower(x: number, y: number, scale: number) {
    p.fill(116, 75, 133);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 305 * scale);
    p.triangle(
      x - 50 * scale,
      y - 152 * scale,
      x,
      y - 202 * scale,
      x + 50 * scale,
      y - 152 * scale
    );
  }

  function backTower(x: number, y: number, scale: number) {
    p.fill(160, 118, 177);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 305 * scale);
    p.triangle(
      x - 50 * scale,
      y - 152 * scale,
      x,
      y - 202 * scale,
      x + 50 * scale,
      y - 152 * scale
    );
  }

  function midCathedral(x: number, y: number, scale: number) {
    p.fill(116, 75, 133);
    p.rectMode(p.CENTER);
    p.rect(x, y, 100 * scale, 150 * scale);
    p.triangle(
      x - 50 * scale,
      y - 75 * scale,
      x,
      y - 450 * scale,
      x + 50 * scale,
      y - 75 * scale
    );
  }
}