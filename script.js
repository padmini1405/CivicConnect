
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = () => sidebar.style.right = "0";
closeBtn.onclick = () => sidebar.style.right = "-100%";

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

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const icon = button.querySelector('i');

        // Toggle the active class
        accordionItem.classList.toggle('active');

        // Toggle the icon (Caret Up / Down)
        if (accordionItem.classList.contains('active')) {
            icon.classList.replace('ph-caret-down', 'ph-caret-up');
        } else {
            icon.classList.replace('ph-caret-up', 'ph-caret-down');
        }
    });
});
//-complaint form

// ── Set today as minimum date & default ──────────────────────────────────
(function setMinDate() {
    var today = new Date().toISOString().split('T')[0];
    var dateInput = document.getElementById('date');
    dateInput.min = today;
    dateInput.value = today;
})();

// ── Character counter for description ────────────────────────────────────
document.getElementById('description').addEventListener('input', function () {
    var len = this.value.length;
    document.getElementById('charCount').textContent = len;
    var counter = document.querySelector('.char-counter');
    counter.style.color = len >= 680 ? '#e74c3c' : '#888';
});

// ── Name: allow only letters and spaces ──────────────────────────────────
document.getElementById('fullName').addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

// ── Phone: allow only digits, max 10 ─────────────────────────────────────
document.getElementById('phone').addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

// ── Date: block past dates on change ─────────────────────────────────────
document.getElementById('date').addEventListener('change', function () {
    var today = new Date().toISOString().split('T')[0];
    if (this.value < today) {
        this.classList.add('input-error');
        this.value = today;
    } else {
        this.classList.remove('input-error');
    }
});

// ── AM/PM Custom Dropdown ─────────────────────────────────────────────────
function toggleAmPm() {
    var menu = document.getElementById('ampmMenu');
    var arrow = document.getElementById('ampmArrow');
    var isOpen = menu.classList.contains('ampm-row-open');
    if (isOpen) {
        menu.classList.remove('ampm-row-open');
        arrow.classList.remove('ampm-arrow-up');
    } else {
        menu.classList.add('ampm-row-open');
        arrow.classList.add('ampm-arrow-up');
    }
}

function selectAmPm(value) {
    document.getElementById('ampmValue').value = value;
    document.getElementById('ampmSelected').textContent = value;
    // Highlight selected cell
    document.getElementById('amCell').classList.toggle('ampm-cell-active', value === 'AM');
    document.getElementById('pmCell').classList.toggle('ampm-cell-active', value === 'PM');
    // Keep row open so user can see their choice, but close after a moment
    setTimeout(function () {
        document.getElementById('ampmMenu').classList.remove('ampm-row-open');
        document.getElementById('ampmArrow').classList.remove('ampm-arrow-up');
    }, 300);
    // Clear error
    document.getElementById('timeWrapper').classList.remove('input-error');
}

// Close AM/PM row when clicking outside
document.addEventListener('click', function (e) {
    var wrapper = document.getElementById('timeWrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        document.getElementById('ampmMenu').classList.remove('ampm-row-open');
        document.getElementById('ampmArrow').classList.remove('ampm-arrow-up');
    }
});

// ── Complaint Form Functions ──────────────────────────────────────────────
function openComplaintForm(problemType) {
    var modal = document.getElementById('complaintModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    var today = new Date().toISOString().split('T')[0];
    var dateInput = document.getElementById('date');
    dateInput.min = today;
    dateInput.value = today;
}

function closeComplaintForm() {
    var modal = document.getElementById('complaintModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetComplaintForm();
}

function resetComplaintForm() {
    document.getElementById('complaintForm').reset();
    document.getElementById('charCount').textContent = '0';
    document.querySelector('.char-counter').style.color = '#888';
    // Reset AM/PM dropdown display
    document.getElementById('ampmSelected').textContent = '';
    document.getElementById('ampmValue').value = '';
    document.getElementById('ampmMenu').classList.remove('ampm-row-open');
    document.getElementById('ampmArrow').classList.remove('ampm-arrow-up');
    document.getElementById('amCell').classList.remove('ampm-cell-active');
    document.getElementById('pmCell').classList.remove('ampm-cell-active');
    hideFormErrors();
    document.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
    });
    var today = new Date().toISOString().split('T')[0];
    var dateInput = document.getElementById('date');
    dateInput.min = today;
    dateInput.value = today;
}

function showFormErrors(messages) {
    var box = document.getElementById('formErrors');
    box.innerHTML = messages.map(function (m) {
        return '<div><i class="fa-solid fa-circle-exclamation"></i> ' + m + '</div>';
    }).join('');
    box.style.display = 'block';
}

function hideFormErrors() {
    var box = document.getElementById('formErrors');
    box.style.display = 'none';
    box.innerHTML = '';
}

function submitComplaint(event) {
    event.preventDefault();
    var errors = [];
    hideFormErrors();
    document.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
    });

    // ── Full Name: required + letters/spaces only ─────────────────────────
    var fullName = document.getElementById('fullName').value.trim();
    if (!fullName) {
        errors.push('Full Name is required.');
        document.getElementById('fullName').classList.add('input-error');
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        errors.push('Full Name must contain only letters and spaces (no numbers or symbols).');
        document.getElementById('fullName').classList.add('input-error');
    }

    // ── Phone: required + exactly 10 digits ──────────────────────────────
    var phone = document.getElementById('phone').value.trim();
    if (!phone) {
        errors.push('Phone Number is required.');
        document.getElementById('phone').classList.add('input-error');
    } else if (!/^\d{10}$/.test(phone)) {
        errors.push('Phone Number must be exactly 10 digits.');
        document.getElementById('phone').classList.add('input-error');
    }

    // ── Email: required + must contain @ and valid format ─────────────────
    var email = document.getElementById('email').value.trim();
    if (!email) {
        errors.push('Email is required.');
        document.getElementById('email').classList.add('input-error');
    } else if (!email.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Please enter a valid email address containing the @ symbol (e.g. name@domain.com).');
        document.getElementById('email').classList.add('input-error');
    }

    // ── Location: required ────────────────────────────────────────────────
    var location = document.getElementById('location').value.trim();
    if (!location) {
        errors.push('Location / Area is required.');
        document.getElementById('location').classList.add('input-error');
    }

    // ── Landmark: required ────────────────────────────────────────────────
    var landmark = document.getElementById('landmark').value.trim();
    if (!landmark) {
        errors.push('Exact Landmark is required.');
        document.getElementById('landmark').classList.add('input-error');
    }

    // ── Date: required + today or future only ─────────────────────────────
    var dateVal = document.getElementById('date').value;
    var today = new Date().toISOString().split('T')[0];
    if (!dateVal) {
        errors.push('Date is required.');
        document.getElementById('date').classList.add('input-error');
    } else if (dateVal < today) {
        errors.push('Date must be today or a future date \u2014 past dates are not allowed.');
        document.getElementById('date').classList.add('input-error');
    }

    // ── Time: both time and AM/PM must be selected ────────────────────────
    var timeVal = document.getElementById('timeInput').value;
    var ampmVal = document.getElementById('ampmValue').value;
    if (!timeVal || !ampmVal) {
        errors.push('Please select a Time and choose AM or PM.');
        document.getElementById('timeWrapper').classList.add('input-error');
    }

    // ── Days: required + at least 1 ──────────────────────────────────────
    var days = document.getElementById('days').value;
    if (!days || Number(days) < 1) {
        errors.push('Problem duration (days) must be at least 1.');
        document.getElementById('days').classList.add('input-error');
    }

    // ── Priority: required ────────────────────────────────────────────────
    var priority = document.getElementById('priority').value;
    if (!priority) {
        errors.push('Please select a Priority Level.');
        document.getElementById('priority').classList.add('input-error');
    }

    // ── Description: required + max 700 chars ─────────────────────────────
    var description = document.getElementById('description').value.trim();
    if (!description) {
        errors.push('Description is required.');
        document.getElementById('description').classList.add('input-error');
    } else if (description.length > 700) {
        errors.push('Description must not exceed 700 characters.');
        document.getElementById('description').classList.add('input-error');
    }

    // ── Stop if any errors ────────────────────────────────────────────────
    if (errors.length > 0) {
        showFormErrors(errors);
        var firstErr = document.querySelector('.input-error');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // ── Success ───────────────────────────────────────────────────────────
    hideFormErrors();
    alert('Complaint submitted successfully!\n\nThank you, ' + fullName + '. We will get back to you shortly.');
    closeComplaintForm();
}

// Close modal when clicking on overlay
document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeComplaintForm);
    }
});

