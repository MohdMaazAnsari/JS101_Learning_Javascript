let subject = "english";
let marks = 75;
let passing_marks = 70;
if (subject == "english") {
  if (marks > passing_marks) {
    console.log("passed in english")
  }
  else {
    console.log("failed")
  }
}
else {
  console.log("not english")
}
//logical operator
if (subject == "english" && marks >= passing_marks) { console.log("passed in en") }

//ternary operator

subject == "english" && marks >= passing_marks ? console.log("passed") : console.log("failed");
