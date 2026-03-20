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