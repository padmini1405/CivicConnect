
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

