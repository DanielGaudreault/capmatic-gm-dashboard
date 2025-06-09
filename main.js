$(document).ready(function() {
    // Personal Welcome
    const gmName = localStorage.getItem('gmName') || prompt('Enter your name, GM:');
    localStorage.setItem('gmName', gmName);
    $('h1').text(`GM Command Center - Welcome, ${gmName}!`);

    // Dark Mode Toggle
    $('#darkModeToggle').click(function() {
        $('body').toggleClass('dark');
        $(this).text($('body').hasClass('dark') ? '☀️' : '🌙');
    });

    // Quick Notes Toggle
    $('#quickNotes').hide();
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#quickNotes').length && !$(e.target).is('#quickNotes')) {
            $('#quickNotes').hide();
        }
    });
    $(document).keypress(function(e) {
        if (e.key === 'n') $('#quickNotes').toggle();
    });
});
