$(document).ready(function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('show production')) {
            $('#productionChart').parent().scrollIntoView({ behavior: 'smooth' });
        }
    };
    $('#voiceCommand').click(function() {
        recognition.start();
    });
});
