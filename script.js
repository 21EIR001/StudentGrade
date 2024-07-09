// Function to handle submission of student info
function submitStudentInfo() {
    // Extracting values from the form
    var rollNo = document.getElementById('rollNo').value;
    var regNo = document.getElementById('regNo').value;
    var dob = document.getElementById('dob').value;

    // Store data in localStorage for use in marks.html
    localStorage.setItem('rollNo', rollNo);
    localStorage.setItem('regNo', regNo);
    localStorage.setItem('dob', dob);

    // Redirecting to marks.html
    window.location.href = 'marks.html';
}

// Function to calculate grades based on marks entered
function calculateGrades() {
    // Extracting values from the form
    var tamil = parseFloat(document.getElementById('tamil').value);
    var english = parseFloat(document.getElementById('english').value);
    var maths = parseFloat(document.getElementById('maths').value);
    var science = parseFloat(document.getElementById('science').value);

    // Calculate total marks and average
    var totalMarks = tamil + english + maths + science;
    var average = totalMarks / 4;

    // Determine grade based on average
    var grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Displaying the grade
    var gradeDisplay = document.getElementById('gradeDisplay');
    gradeDisplay.innerHTML = `<p>Average Marks: ${average.toFixed(2)}</p><p>Grade: ${grade}</p>`;
}
