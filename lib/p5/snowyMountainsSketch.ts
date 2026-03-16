import p5 from "p5";

export default function snowyMountainsSketch(p: p5) {
  const myArr: number[] = [];
  let medium = 1.5;
  let large = 1.8;

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
      p.fill(myArr[i] * 2, 100, 115, 160);
      p.rect(0, yPos, p.width, p.height / 256);
      yPos += p.height / 256;
    }

    for (let i = 0; i < p.width; i++) {
      p.fill(250, 200);
      p.ellipse(i * 2, p.random(0, p.height), 2, 2);
      p.ellipse(i * 2, p.random(0, p.height), 3, 3);
    }

    cloud(125, 75);
    cloud(250, 200);
    cloud(575, 125);

    rangeMountain(250, 300);
    rangeMountain(390, 350);
    rangeMountain(610, 350);
    rangeMountain(780, 300);
    largeMountain(80, 190);
    mediumMountain(500, 350);
    smallMountain(300, 550);
    smallMountain(700, 550);

    p.stroke(246, 243, 243);
    p.strokeWeight(3);
    p.noFill();
    p.arc(375, 100, 80, 80, 200, 800);

    p.stroke(246, 243, 243);
    p.strokeWeight(3);
    p.noFill();
    p.arc(375, 100, 75, 80, 200, 800);
  };

  function cloud(x: number, y: number) {
    p.fill(246, 243, 243);
    p.ellipse(x - 50, y + 30, 70, 65);
    p.ellipse(x, y + 40, 70, 60);
    p.ellipse(x + 50, y + 30, 70, 65);
    p.ellipse(x, y, 80, 60);
  }

  function smallMountain(x: number, y: number) {
    p.fill(155, 117, 125);
    p.triangle(x - 200, y + 474, x, y, x + 200, y + 474);

    p.fill(246, 243, 243);
    p.triangle(x - 200 / 3, y + 474 / 3, x, y, x + 200 / 2, y + 474 / 2);
  }

  function mediumMountain(x: number, y: number) {
    p.fill(180, 151, 157);
    p.triangle(
      x - 200 * medium,
      y + 474 * medium,
      x,
      y,
      x + 200 * medium,
      y + 474 * medium
    );

    p.fill(246, 243, 243);
    p.triangle(
      x - (200 / 4) * medium,
      y + (475 / 4) * medium,
      x,
      y,
      x + (200 / 4) * medium,
      y + (475 / 4) * medium
    );
    p.triangle(
      x - 20,
      y + (473 / 4) * medium,
      x,
      y + (473 / 4) * medium + 35,
      x + 20,
      y + (473 / 4) * medium
    );
    p.triangle(
      x - 60,
      y + (473 / 4) * medium,
      x - 50,
      y + (473 / 4) * medium + 35,
      x - 20,
      y + (473 / 4) * medium
    );
    p.triangle(
      x - 75,
      y + (473 / 4) * medium,
      x - 90,
      y + (473 / 4) * medium + 35,
      x - 60,
      y + (473 / 4) * medium
    );
    p.triangle(
      x + 20,
      y + (473 / 4) * medium,
      x + 50,
      y + (473 / 4) * medium + 35,
      x + 60,
      y + (473 / 4) * medium
    );
    p.triangle(
      x + 60,
      y + (473 / 4) * medium,
      x + 90,
      y + (473 / 4) * medium + 35,
      x + 75,
      y + (473 / 4) * medium
    );
  }

  function largeMountain(x: number, y: number) {
    p.fill(180, 151, 157);
    p.triangle(
      x - 200 * large,
      y + 474 * large,
      x,
      y,
      x + 200 * large,
      y + 474 * large
    );

    p.fill(246, 243, 243);
    p.triangle(
      x - (200 / 4) * large,
      y + (474 / 4) * large,
      x,
      y,
      x + (200 / 4) * large,
      y + (474 / 4) * large
    );
    p.triangle(
      x - 20,
      y + (473 / 4) * large,
      x,
      y + (473 / 4) * large + 35,
      x + 20,
      y + (473 / 4) * large
    );
    p.triangle(
      x - 60,
      y + (473 / 4) * large,
      x - 55,
      y + (473 / 4) * large + 35,
      x - 20,
      y + (473 / 4) * large
    );
    p.triangle(
      x - 90,
      y + (473 / 4) * large,
      x - 105,
      y + (473 / 4) * large + 35,
      x - 60,
      y + (473 / 4) * large
    );
    p.triangle(
      x + 20,
      y + (473 / 4) * large,
      x + 55,
      y + (473 / 4) * large + 35,
      x + 60,
      y + (473 / 4) * large
    );
    p.triangle(
      x + 60,
      y + (473 / 4) * large,
      x + 105,
      y + (473 / 4) * large + 35,
      x + 90,
      y + (473 / 4) * large
    );
  }

  function rangeMountain(x: number, y: number) {
    p.fill(210, 192, 196);
    p.triangle(x - 400, y + 474, x, y, x + 400, y + 474);
  }
}