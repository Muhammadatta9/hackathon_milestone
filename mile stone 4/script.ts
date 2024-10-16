const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent form submission

    // Get values from the form fields
    const name = (document.getElementById("name") as HTMLInputElement).value; // Input text
    const email = (document.getElementById("email") as HTMLInputElement).value; // Input email
    const phone = (document.getElementById("phone") as HTMLInputElement).value; // Input tel
    const education = (document.getElementById("education") as HTMLTextAreaElement).value; // Textarea
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value; // Textarea
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value; // Textarea

    // Create the resume HTML
    const resumeHTML = `
        <h2><b>Editable resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span conteneditible="true">${name}</span></p>
        <p><b>Email:</b> <span conteneditible="true">${email}</span></p>
        <p><b>Phone:</b> <span conteneditible="true">${phone}</span></p>
        <h3>Education</h3>
        <p conteneditible="true">${education}</p>
        <h3>Experience</h3>
        <p conteneditible="true">${experience}</p>
        <h3>Skills</h3>
        <p conteneditible="true">${skills}</p>
    `;

    // Display the generated resume in the div
    resumeDisplayElement.innerHTML = resumeHTML;
});
