document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the player ID from the form input
    const playerID = document.getElementById('playerID').value;

    // Create a data object to send
    const data = {
        playerID: playerID,
    };

    // Make a POST request to the Google Apps Script URL
    fetch('https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbwnvccRkdCIHVJhyImBpfJU7ia390iUPt1FSL46xi4azAm5ceCR7PBU2R_b9btGw88lyA/exec/exec', { // Replace with your actual Apps Script URL
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            alert('Attendance logged successfully!');
        } else {
            alert('There was an issue logging attendance.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error logging attendance');
    });

    // Clear the form after submission
    document.getElementById('attendanceForm').reset();
});
