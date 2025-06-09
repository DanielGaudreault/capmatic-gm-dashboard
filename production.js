$(document).ready(function() {
    const ctx = document.getElementById('productionChart').getContext('2d');
    const productionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Bottles Per Minute',
                data: [120, 130, 110, 140, 135, 150],
                borderColor: '#007bff',
                fill: false
            }]
        },
        options: { responsive: true }
    });
});
