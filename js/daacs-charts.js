document.addEventListener('DOMContentLoaded', function() {
    // Overall Results Radar Chart
    new Chart(document.getElementById('overallChart'), {
        type: 'radar',
        data: {
            labels: ['Self-Regulated Learning', 'Writing', 'Mathematics', 'Reading'],
            datasets: [{
                label: 'Overall Results',
                data: [2, 3, 1, 3],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            elements: {
                line: { borderWidth: 3 }
            },
            scales: {
                r: {
                    angleLines: { color: 'rgba(0, 0, 0, 0.2)' },
                    suggestedMin: 0,
                    suggestedMax: 3
                }
            }
        }
    });

    // Self-Regulated Learning Bar Chart
    new Chart(document.getElementById('selfRegulatedLearningChart'), {
        type: 'bar',
        data: {
            labels: ['Motivation', 'Strategies', 'Metacognition', 'Self-Efficacy'],
            datasets: [{
                label: 'Self-Regulated Learning',
                data: [3, 3, 1, 2],
                backgroundColor: 'rgba(54, 162, 235, 0.8)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3
                }
            }
        }
    });

    // Function to create donut charts
    function createDonutChart(elementId, data, labels) {
        new Chart(document.getElementById(elementId), {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)'
                    ]
                }]
            }
        });
    }

    // Writing Donut Chart
    createDonutChart('writingChart', [3, 2, 2, 2, 3], ['Content', 'Organization', 'Paragraphs', 'Sentences', 'Conventions']);

    // Math Donut Chart
    createDonutChart('mathChart', [2, 2, 3, 2, 3, 2], ['Geometry', 'Lines and Functions', 'Number and Calculation', 'Statistics', 'Variables and Equations', 'Word Problems']);

    // Reading Donut Chart
    createDonutChart('readingChart', [2, 2, 2, 3, 2], ['Structure', 'Inference', 'Language', 'Purpose', 'Ideas']);
});
