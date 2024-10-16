var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Get values from the form fields
    var name = document.getElementById("name").value; // Input text
    var email = document.getElementById("email").value; // Input email
    var phone = document.getElementById("phone").value; // Input tel
    var education = document.getElementById("education").value; // Textarea
    var experience = document.getElementById("experience").value; // Textarea
    var skills = document.getElementById("skills").value; // Textarea
    // Create the resume HTML
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p><b>Education:</b> ").concat(education, "</p>\n        <h3>Experience</h3>\n        <p><b>Experience:</b> ").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p><b>Skills:</b> ").concat(skills, "</p>\n    ");
    // Display the generated resume in the div
    resumeDisplayElement.innerHTML = resumeHTML;
});
