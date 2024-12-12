function calculateGradeIfElse(marks) {
    if (marks >= 90) {
      return 'O';
    } else if (marks >= 80) {
      return 'A';
    } else if (marks >= 70) {
      return 'B';
    } else if (marks >= 60) {
      return 'C';
    } else if (marks >= 50) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  function getGradeColor(grade) {
    if (grade === 'O' || grade === 'A') {
      return 'green';
    } else if (grade === 'C' || grade === 'D') {
      return 'orange';
    } else if (grade === 'F') {
      return 'red';
    }
  }
  
  function calculateGrade() {
    let marksInput = document.getElementById('marks');
    let marks = parseInt(marksInput.value);
    let resultDiv = document.getElementById('result');
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      resultDiv.innerHTML = "Please enter a valid number between 0 and 100.";
      resultDiv.className = 'result red';
      return;
    }
  
    let grade = calculateGradeIfElse(marks);
    let colorClass = getGradeColor(grade);
  
    resultDiv.innerHTML = `Your Grade: <strong>${grade}</strong>`;
    resultDiv.className = `result ${colorClass}`;
  }
  