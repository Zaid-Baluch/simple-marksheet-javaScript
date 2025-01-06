var math = +prompt("Enter your obtained marks of math");
var english = +prompt("Enter your obtained marks of English");
var urdu = +prompt("Enter your obtained marks of Urdu");
var totalMarks = 300;
var totalObtndMarks = math + english + urdu;
var percentage = (totalObtndMarks / totalMarks) * 100;
var grade = "";
var remarks = "";

if (percentage >= 80) {
  grade = "A - one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}
document.write(
  "<h1>Marks Sheet</h1> \n Total Marks :" +
    totalMarks +
    "<br/> Marks Obtained : " +
    totalObtndMarks +
    " <br/> percentage : " +
    percentage +
    " %" +
    " <br/> Grade :" +
    grade +
    " <br/> Remarks : " +
    remarks
);
