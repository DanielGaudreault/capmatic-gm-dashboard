$(document).ready(function() {
    $('#saveNote').click(function() {
        const note = $('#quickNotes textarea').val();
        if (note) {
            let notes = JSON.parse(localStorage.getItem('gmNotes') || '[]');
            notes.push({ text: note, date: new Date().toLocaleString() });
            localStorage.setItem('gmNotes', JSON.stringify(notes));
            $('#quickNotes textarea').val('');
            $('#quickNotes').hide();
            alert('Note saved!');
        }
    });
});
