document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.red-bc').addEventListener('click', (e) => {
        document.querySelector('.color-panel').style.display = 'flex';
        document.querySelector('.color-panel').style.left = e.clientX + 'px';
        document.querySelector('.color-panel').style.top = e.clientY + 'px';
    })
    document.querySelectorAll('.bc-color').forEach(ele => {
        ele.addEventListener('click', (e) => {
            const computedStyle = window.getComputedStyle(e.target);
            const backgroundColor = computedStyle.backgroundColor;
            fetch('/changebccolor/', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRFToken': getCookie('csrftoken'), // Include this line if you're handling CSRF tokens
                },
                body: JSON.stringify(backgroundColor), // body data type must match "Content-Type" header
            })
                .then(response => response.json()) // parse JSON from request
                .then(data => {
                    console.log('Success:', data); // JSON data parsed by `response.json()` call
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            document.getElementById('app').style.backgroundColor = backgroundColor;
            document.querySelector('.color-panel').style.display = 'none';
        })
    })
});