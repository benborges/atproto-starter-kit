document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    fetch('https://bsky.social/convert?username=' + username)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = 'DID: ' + data.did;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
