document.addEventListener("DOMContentLoaded", function () {
// Get the button, body, and project/experience details elements
var darkModeToggle = document.getElementById("darkModeToggle");
var body = document.body;
var projectDetails = document.querySelectorAll(".project-details");
var experienceDetails = document.querySelectorAll(".experience-details");
// Check if the dark mode preference is stored in localStorage
var isDarkMode = localStorage.getItem("darkMode") === "enabled";
// Set initial theme based on the user's preference
if (isDarkMode) {
body.classList.add("dark");
}
// Toggle dark mode on button click
darkModeToggle.addEventListener("click", function () {
// Toggle the dark mode class on the body
body.classList.toggle("dark");
// Update the localStorage with the user's preference
if (body.classList.contains("dark")) {
localStorage.setItem("darkMode", "enabled");
} else {
localStorage.setItem("darkMode", "disabled");
}
});
// Add click event listeners for project details toggling
projectDetails.forEach(function (project) {
project.addEventListener("click", function () {
// Toggle the visibility of project details
var details = project.nextElementSibling;
details.classList.toggle("hidden");
});
});
// Add click event listeners for experience details toggling
experienceDetails.forEach(function (experience) {
experience.addEventListener("click", function () {
// Toggle the visibility of experience details
var details = experience.nextElementSibling;
details.classList.toggle("hidden");
});
});
});