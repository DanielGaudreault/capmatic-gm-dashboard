$(document).ready(function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('show production')) {
            $('[data-widget="production"]').get(0).scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('add task')) {
            const task = prompt('Enter task description:');
            if (task) $('#kanbanBoard').append(`<div class="kanban-card">${task}</div>`);
        }
    };
    $('#voiceCommand').click(function() {
        recognition.start();
    });
});
