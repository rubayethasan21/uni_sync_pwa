// js/main.js
document.getElementById('syncButton').addEventListener('click', () => {
    // Dummy fetch request to demonstrate functionality
    // Replace with actual URL or API if needed
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Title: ${data.title}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error: ' + error;
        });
});
