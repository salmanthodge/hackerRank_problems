/*
 A Discrete Mathematics professor has a class of students.
 Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts.
  Arrival times go from on time (arrivalTime <=0) to arrived late (arrivaltime > 0).
 Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
 The first  students arrived on. The last  were late. The threshold is  students, so class will go on. Return YES.
 Note: Non-positive arrival times (a[i] <= 0) indicate the student arrived early or on time;
  positive arrival times (a[i] > 0) indicate the student arrived  minutes late.
 Function Description
 Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.
 angryProfessor has the following parameter(s):
 int k: the threshold number of students
 int a[n]: the arrival times of the  students
*/

function angryProfessor(k, a) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count++;
    }
    if (count == k) {
      return console.log("NO");
    }
  }
  return console.log("YES");
}
angryProfessor(3, [-2, -1, 0, 1, 2]);
