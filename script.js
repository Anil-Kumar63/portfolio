// Dynamic Role Change
const roles = [
    "Full-Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Data Engineer",
    "SQL Developer",
    "Backend Developer",
    "Power BI Developer"
];

let currentRoleIndex = 0;
const dynamicRoleElement = document.getElementById("dynamicRole");

function typeRole(role) {
    let index = 0;
    dynamicRoleElement.textContent = ""; // Clear previous text
    const typingInterval = setInterval(() => {
        if (index < role.length) {
            dynamicRoleElement.textContent += role.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeRole(roles[currentRoleIndex]); // Type next role
            }, 2000); // Wait before typing next role
        }
    }, 100); // Typing speed
}

// Start typing the first role
typeRole(roles[currentRoleIndex]);

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the form
    this.style.display = "none";

    // Show success message and pulse circle
    document.getElementById("successContainer").style.display = "block";
    document.getElementById("successMessage").style.opacity = "1";

    // Reset the form fields
    this.reset();

    // Show the success message for a few seconds
    setTimeout(() => {
        document.getElementById("successContainer").style.display = "none";
    }, 3000);
});

// Back to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the back-to-top button when scrolling
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display current time in the footer
function updateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute                : '2-digit', 
        second: '2-digit', 
        hour12: true // Set hour12 to true to include AM/PM
    };
    document.getElementById("current-time").textContent = now.toLocaleTimeString([], options);
}
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

// Show project information
function showProjectInfo(project) {
    const projectInfo = document.getElementById("project-info");
    const projectDescription = document.getElementById("project-description");

    if (project === 'project1') {
        projectDescription.textContent = "This project showcases my personal portfolio website, developed using HTML, CSS, Bootstrap, and JavaScript. It is fully responsive and highlights my skills and projects.";
    } else if (project === 'project2') {
        projectDescription.textContent = "This project involves data analysis using Python and SQL to evaluate employee performance and trends. It includes data visualization and reporting.";
    }

    projectInfo.style.display = "block";
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column"; // Stack links vertically
        navLinks.style.position = "absolute"; // Position it absolutely
        navLinks.style.top = "60px"; // Position below the navbar
        navLinks.style.left = "0"; // Align to the left
        navLinks.style.width = "100%"; // Full width
        navLinks.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Background color
    }
}