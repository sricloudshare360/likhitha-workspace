
const student = {
    name: "Likhitha Bendadi",
    age: 21,
    marks: 98,
    college: "SBIT", 
    subject: "Mathematics"
  };
  function displayStudentDetails(studentObj) {
    const details = `
    <p><strong>Name:</strong> ${studentObj.name}</p>
    <p><strong>Age:</strong> ${studentObj.age}</p>
    <p><strong>Marks:</strong> ${studentObj.marks}</p>
    <p><strong>College:</strong> ${studentObj.college}</p>
    <p><strong>subject:</strong> ${studentObj.subject}</p>
    `;
    document.getElementById('student-details').innerHTML = details;
  }
  displayStudentDetails(student);
  