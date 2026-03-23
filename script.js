
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = () => sidebar.style.right = "0";
closeBtn.onclick = () => sidebar.style.right = "-50%";

const chart = document.getElementById("issueChart");

new Chart(chart, {
    type: "doughnut",
    data: {
        labels: [
            "Garbage",
            "Potholes",
            "Streetlights",
            "Water Leakages",
            "Stray Dogs",
            "Others"
        ],
        datasets: [{
            data: [25, 20, 18, 17, 15, 5],
            backgroundColor: [
                "#ff6384",
                "#36a2eb",
                "#ffce56",
                "#4bc0c0",
                "#9966ff",
                "#6b6b6b"
            ],
            hoverOffset: 14
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { size: 14 },
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    }
});


//complaint form validation 

//GET ELEMENTS
var form = document.getElementById("complaintForm");

var nameInput = document.getElementById("fullName");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var locationInput = document.getElementById("location");
var landmarkInput = document.getElementById("landmark");
var dateInput = document.getElementById("date");
var daysInput = document.getElementById("days");
var priorityInput = document.getElementById("priority");
var descriptionInput = document.getElementById("description");

//ERRORS
var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");
var locationError = document.getElementById("locationError");
var landmarkError = document.getElementById("landmarkError");
var dateError = document.getElementById("dateError");
var daysError = document.getElementById("daysError");
var priorityError = document.getElementById("priorityError");
var descriptionError = document.getElementById("descriptionError"); 

//NAME
function validateName() {
    var name = nameInput.value.trim();
    var pattern = /^[A-Za-z ]+$/;

    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    } else if (!pattern.test(name)) {
        nameError.innerHTML = "Only letters allowed";
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

//PHONE
function validatePhone() {
    var phone = phoneInput.value.trim();

    if (phone === "") {
        phoneError.innerHTML = "Phone is required";
        return false;
    } else if (phone.length !== 10 || isNaN(phone)) {
        phoneError.innerHTML = "Enter valid 10-digit number";
        return false;
    } else {
        phoneError.innerHTML = "";
        return true;
    }
}

//EMAIL
function validateEmail() {
    var email = emailInput.value.trim();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.innerHTML = "Email is required";
        return false;
    } else if (!pattern.test(email)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

//LOCATION
function validateLocation() {
    if (locationInput.value.trim() === "") {
        locationError.innerHTML = "Location required";
        return false;
    } else {
        locationError.innerHTML = "";
        return true;
    }
}

//LANDMARK
function validateLandmark() {
    if (landmarkInput.value.trim() === "") {
        landmarkError.innerHTML = "Landmark required";
        return false;
    } else {
        landmarkError.innerHTML = "";
        return true;
    }
}

//DATE
function validateDate() {
    if (dateInput.value === "") {
        dateError.innerHTML = "Select date";
        return false;
    } else {
        dateError.innerHTML = "";
        return true;
    }
}

//DAYS
function validateDays() {
    var days = daysInput.value;

    if (days === "" || days < 1) {
        daysError.innerHTML = "Enter valid days";
        return false;
    } else {
        daysError.innerHTML = "";
        return true;
    }
}

//PRIORITY
function validatePriority() {
    if (priorityInput.value === "") {
        priorityError.innerHTML = "Select priority";
        return false;
    } else {
        priorityError.innerHTML = "";
        return true;
    }
}

//DESCRIPTION
function validateDescription() {
    var text = descriptionInput.value.trim();
    var cleanedText = text.split("-")[1]?.trim();

    if (!cleanedText) {
        descriptionError.innerHTML = "Description required";
        return false;
    } else if (cleanedText.length < 5) {
        descriptionError.innerHTML = "Please add more details";
        return false;
    } else if (text.length > 700) {
        descriptionError.innerHTML = "Max 700 characters";
        return false;
    } else {
        descriptionError.innerHTML = "";
        return true;
    }
}

nameInput.addEventListener("blur", validateName);
phoneInput.addEventListener("blur", validatePhone);
emailInput.addEventListener("blur", validateEmail);
locationInput.addEventListener("blur", validateLocation);
landmarkInput.addEventListener("blur", validateLandmark);
dateInput.addEventListener("blur", validateDate);
daysInput.addEventListener("blur", validateDays);
priorityInput.addEventListener("blur", validatePriority);
descriptionInput.addEventListener("blur", validateDescription);

form.addEventListener("submit", submitComplaint);

function submitComplaint(event) {
    event.preventDefault();

    var isNameValid = validateName();
    var isPhoneValid = validatePhone();
    var isEmailValid = validateEmail();
    var isLocationValid = validateLocation();
    var isLandmarkValid = validateLandmark();
    var isDateValid = validateDate();
    var isDaysValid = validateDays();
    var isPriorityValid = validatePriority();
    var isDescriptionValid = validateDescription();

    if (
        isNameValid &&
        isPhoneValid &&
        isEmailValid &&
        isLocationValid &&
        isLandmarkValid &&
        isDateValid &&
        isDaysValid &&
        isPriorityValid &&
        isDescriptionValid
    ) {
        var name = nameInput.value.trim();
        alert("You are successfully submitted the complaint form. Welcome " + name);
        form.reset();
        closeComplaintForm();
    } else {
        console.log("Validation failed. Please check the red error messages.");
    }
}

// OPEN MODAL
function openComplaintForm(problemType) {
    document.getElementById("complaintModal").style.display = "flex";
    descriptionInput.value = problemType + " - ";
}

// CLOSE MODAL
function closeComplaintForm() {
    document.getElementById("complaintModal").style.display = "none";
    form.reset();
}

var overlay = document.querySelector(".modal-overlay");

if (overlay) {
    overlay.addEventListener("click", closeComplaintForm);
}


document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll('.faq-preview-card');

    items.forEach(item => {
        const button = item.querySelector('.accordion-header');

        button.addEventListener('click', () => {

            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

        });
    });

});