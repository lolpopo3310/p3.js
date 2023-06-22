function setUp(){
    createCanvas(400, 400);
}
  function draw() {
      Image(img, 10, 10, 150 ,120);

      circle(30, 30, 20);
      rect(30, 20, 55, 55, 20);
      rect(30, 20, 55, 55);
      rect(30, 20, 55, 55, 20, 15, 10, 5);
  }  
  function takeSnapshot(){
    save('student_name.png');
}