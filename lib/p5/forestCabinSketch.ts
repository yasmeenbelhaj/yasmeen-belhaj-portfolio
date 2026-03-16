import p5 from "p5";

export default function forestCabinSketch(p: p5) {
  const medium = 1.5;
  const large = 2;

  const starArr: Stars[] = [];
  let skyMode: "idle" | "single" | "shower" = "idle";

  let shooting1: ShootingStar;
  let shooting2: ShootingStar;
  let shooting3: ShootingStar;
  let shooting4: ShootingStar;
  let shooting5: ShootingStar;

  const canvasWidth = 700;
  const canvasHeight = 1024;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background(130);

    for (let i = 0; i < p.width; i++) {
      starArr.push(new Stars());
    }

    shooting1 = new ShootingStar();
    shooting2 = new ShootingStar();
    shooting3 = new ShootingStar();
    shooting4 = new ShootingStar();
    shooting5 = new ShootingStar();
  };

  p.draw = () => {
    p.noStroke();
    p.fill(15, 48, 102, 20);
    p.rectMode(p.CORNER);
    p.rect(0, 0, p.width, p.height);

    for (let i = 0; i < p.width; i++) {
      starArr[i].display();
    }

    switch (skyMode) {
      case "idle":
        break;
      case "single":
        shooting1.move();
        shooting1.display();
        break;
      case "shower":
        shooting2.move();
        shooting2.display();

        shooting3.move();
        shooting3.display();

        shooting4.move();
        shooting4.display();

        shooting5.move();
        shooting5.display();
        break;
    }

    p.fill(83, 112, 141);
    p.stroke(83, 112, 141);
    p.ellipse(0, 750, 1100, 800);

    smallTree(75, 290);
    smallTree(215, 305);
    smallTree(5, 330);
    mediumTree(145, 340);
    smallTree(300, 360);
    smallTree(175, 400);
    mediumTree(235, 425);
    smallTree(70, 435);
    mediumTree(15, 500);
    mediumTree(90, 600);

    p.fill(62, 84, 106);
    p.stroke(62, 84, 106);
    p.ellipse(700, 1200, 1600, 1400);

    mediumTree(685, 360);

    cabin(565, 540);

    largeTree(380, 595);
    mediumTree(665, 625);
    largeTree(565, 650);
    mediumTree(505, 715);
    largeTree(280, 770);
    largeTree(690, 815);
    largeTree(425, 840);
    mediumTree(190, 845);
    mediumTree(560, 930);
  };

  p.keyPressed = () => {
    if (p.key === "0") {
      skyMode = "idle";
    }

    if (p.key === "1") {
      skyMode = "single";
    }

    if (p.key === "2") {
      skyMode = "shower";
    }
  };

  function smallTree(x: number, y: number) {
    p.fill(112, 161, 209);
    p.stroke(112, 161, 209);

    p.triangle(x - 10, y + 30, x, y, x + 10, y + 30);
    p.triangle(x - 15, y + 50, x, y + 10, x + 15, y + 50);
    p.triangle(x - 20, y + 70, x, y + 20, x + 20, y + 70);
    p.triangle(x - 25, y + 90, x, y + 30, x + 25, y + 90);

    p.rectMode(p.CENTER);
    p.rect(x, y + 100, 10, 20);
  }

  function mediumTree(x: number, y: number) {
    p.fill(36, 77, 116);
    p.stroke(36, 77, 116);

    p.triangle(
      x - 10 * medium,
      y + 30 * medium,
      x,
      y,
      x + 10 * medium,
      y + 30 * medium
    );
    p.triangle(
      x - 15 * medium,
      y + 50 * medium,
      x,
      y + 10 * medium,
      x + 15 * medium,
      y + 50 * medium
    );
    p.triangle(
      x - 20 * medium,
      y + 70 * medium,
      x,
      y + 20 * medium,
      x + 20 * medium,
      y + 70 * medium
    );
    p.triangle(
      x - 25 * medium,
      y + 90 * medium,
      x,
      y + 30 * medium,
      x + 25 * medium,
      y + 90 * medium
    );

    p.rectMode(p.CENTER);
    p.rect(x, y + 100 * medium, 10 * medium, 20 * medium);
  }

  function largeTree(x: number, y: number) {
    p.fill(16, 33, 50);
    p.stroke(16, 33, 50);

    p.triangle(
      x - 10 * large,
      y + 30 * large,
      x,
      y,
      x + 10 * large,
      y + 30 * large
    );
    p.triangle(
      x - 15 * large,
      y + 50 * large,
      x,
      y + 10 * large,
      x + 15 * large,
      y + 50 * large
    );
    p.triangle(
      x - 20 * large,
      y + 70 * large,
      x,
      y + 20 * large,
      x + 20 * large,
      y + 70 * large
    );
    p.triangle(
      x - 25 * large,
      y + 90 * large,
      x,
      y + 30 * large,
      x + 25 * large,
      y + 90 * large
    );

    p.rectMode(p.CENTER);
    p.rect(x, y + 100 * large, 10 * large, 20 * large);
  }

  function cabin(x: number, y: number) {
    p.fill(7, 23, 49);
    p.stroke(7, 23, 49);
    p.rectMode(p.CENTER);

    p.rect(x, y, 190, 150);
    p.rect(x - 25, y - 110, 230, 70);
    p.rect(x + 45, y - 160, 25, 30);
    p.triangle(x - 160, y - 75, x - 140, y - 145, x + 105, y - 75);
    p.triangle(x - 155, y - 75, x + 90, y - 145, x + 110, y - 75);

    p.ellipse(x + 90, y - 62.5, 25, 25);
    p.ellipse(x + 90, y - 37.5, 25, 25);
    p.ellipse(x + 90, y - 12.5, 25, 25);
    p.ellipse(x + 90, y + 12.5, 25, 25);
    p.ellipse(x + 90, y + 37.5, 25, 25);
    p.ellipse(x + 90, y + 62.5, 25, 25);
    p.ellipse(x - 90, y - 62.5, 25, 25);
    p.ellipse(x - 90, y - 37.5, 25, 25);
    p.ellipse(x - 90, y - 12.5, 25, 25);
    p.ellipse(x - 90, y + 12.5, 25, 25);
    p.ellipse(x - 90, y + 37.5, 25, 25);
    p.ellipse(x - 90, y + 62.5, 25, 25);

    p.stroke(7, 23, 49);
    p.strokeWeight(7);
    p.line(x - 145, y - 75, x - 145, y + 71.5);
    p.line(x - 145, y + 15, x - 95, y + 15);
    p.line(x - 145, y + 71.5, x - 95, y + 71.5);
    p.line(x - 110, y + 15, x - 110, y + 71.5);
    p.line(x - 127.5, y + 15, x - 127.5, y + 71.5);

    if (
      p.mouseIsPressed &&
      p.mouseX >= x + 12.5 &&
      p.mouseX <= x + 67.5 &&
      p.mouseY >= y - 57.5 &&
      p.mouseY <= y + 7.5
    ) {
      p.fill(207, 195, 149);
    } else {
      p.fill(13, 42, 88);
    }

    p.noStroke();
    p.rect(x + 40, y - 25, 55, 65);

    p.stroke(7, 23, 49);
    p.strokeWeight(2);
    p.line(x + 40, y + 7.5, x + 40, y - 57.5);
    p.line(x + 12.5, y - 25, x + 67.5, y - 25);
  }

  class Stars {
    x: number;
    y: number;
    size: number;

    constructor() {
      this.x = p.random(0, p.width);
      this.y = p.random(0, p.height);
      this.size = p.random(0.3, 2.5);
    }

    display() {
      p.noStroke();
      p.fill(215);
      p.ellipse(this.x, this.y, this.size, this.size);
    }
  }

  class ShootingStar {
    x: number;
    y: number;
    size: number;
    xSpeed: number;
    ySpeed: number;
    xDir: number;
    yDir: number;

    constructor() {
      this.x = p.random(p.width / 2, p.width);
      this.y = p.random(0, -20);
      this.size = 4;

      this.xSpeed = p.random(1.5, 2.5);
      this.ySpeed = p.random(0.5, 1.5);
      this.xDir = -1;
      this.yDir = 1;
    }

    move() {
      this.x = this.x + this.xSpeed * this.xDir;
      this.y = this.y + this.ySpeed * this.yDir;

      if (this.x < -100) {
        this.x = p.random(p.width / 2, p.width);
        this.y = 0;
      }
    }

    display() {
      p.noStroke();
      p.fill(235);
      p.ellipse(this.x, this.y, this.size, this.size);
    }
  }
}