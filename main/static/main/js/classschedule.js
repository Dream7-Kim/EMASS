document.addEventListener('DOMContentLoaded', function () {
    const date = moment().format('MMMM D, YYYY');
    const clock = document.querySelector('div.clock');
    clock.innerHTML = date;

    let editone = true;

    const tds = document.querySelectorAll('td');
    tds.forEach(td => {
        td.addEventListener('click', (e) => {
            if (editone) {
                if (td.children.length === 0) {
                    td.innerHTML = `
                    <form action="/classschedule" method="POST">
                        <div class="input-group input-group-sm">
                            <input type="text" class="form-control" placeholder="New Value" name="new_value">
                            <button type="submit" class="btn btn-outline-secondary" type="button">Update</button>
                        </div>
                    </form>
                `;
                }
                editone = false;
            }
        })
    });
});