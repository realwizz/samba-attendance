document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the player ID from the form input
    const playerID = document.getElementById('playerID').value;

    // Create a data object to send
    const data = {
        playerID: playerID,
    };

    // Make a POST request to the Google Apps Script URL
   fetch('https://script.google.com/macros/s/AKfycby3nREl9QJ93dkV1G7UNm-yk-haxcf7CsvGVPbe6nUsADNcvZy7WaN5lNkMLWeiKN1m/exec', {
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
