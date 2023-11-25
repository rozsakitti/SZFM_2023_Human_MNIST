function answerClick(number) {
    clickCounts[number]++;
    updateStatistics();

    // Send the updated clickCounts to the server
    fetch('/meres', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clickCounts }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update click counts on the server');
            }
        })
        .catch(error => console.error('Error updating click counts on the server:', error));
}
