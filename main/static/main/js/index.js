document.addEventListener('DOMContentLoaded', function () {
    const date = moment().format('MMMM D, YYYY');
    const clock = document.querySelector('div.clock');
    clock.innerHTML = date;

    document.getElementById("edit").addEventListener('click', (e) => {
        if (e.target.innerHTML === 'Edit') {
            e.target.innerHTML = 'Finish';
            const h3s = document.querySelectorAll('.left-pad p');
            let instructions = '';
            h3s.forEach(element => {
                instructions += element.innerHTML + '\n';
                element.remove()
            })
            instructions = instructions.slice(0, -1);
            document.querySelector('textarea').style.display = 'block';
            document.querySelector('textarea').value = instructions;
        } else {
            e.target.innerHTML = 'Edit';
            const newIns = document.querySelector('textarea').value;
            const rows = newIns.split('\n');
            console.log(rows)
            rows.forEach(row => {
                const newP = document.createElement('p');
                newP.className = 'h3';
                newP.innerHTML = row;
                document.querySelector('.left-pad').appendChild(newP);
            });
            document.querySelector('textarea').style.display = 'none';

            const data = rows;
            fetch('/instruction/', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRFToken': getCookie('csrftoken'), // Include this line if you're handling CSRF tokens
                },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
                .then(response => response.json()) // parse JSON from request
                .then(data => {
                    console.log('Success:', data); // JSON data parsed by `response.json()` call
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    });
});