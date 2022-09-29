//You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.

//You need print if area of rectangle 1 is greater than rectangle 2.

//You need print if perimeter of rectangle 1 is greater than rectangle 2.


function areaAndPerimeter(L1, B1, L2, B2) {
  let area1 = L1 * B1;
  let area2 = L2 * B2;
  if (area1 > area2) {
    console.log("true");
  }
  else {
    console.log("false");
  }
  let para1 = L1 + B1;
  para1 = para1 * 2
  let para2 = L2 * B2;
  para2 = para2 * 2;
  if (para1 > para2) {
    console.log("true")
  }
  else {
    console.log("false")
  }
}