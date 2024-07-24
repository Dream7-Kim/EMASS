document.getElementById('image').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('preview').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('avatar').addEventListener('click', (e) => {
    document.getElementById('image').click();
})


document.getElementById('waiver').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('waiver_preview').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('waiver-row').addEventListener('click', (e) => {
    document.getElementById('waiver').click();
})


let phone1 = document.querySelector('#phone1');
phone1.addEventListener('input', function (event) {
    let input = event.target.value;
    input = input.replace(/\D/g, ''); // Remove all non-digit characters

    // Format input as (123) 456-7890
    if (input.length > 3 && input.length <= 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
    } else if (input.length > 3) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}`;
    } else {
        input = `(${input}`;
    }

    event.target.value = input;
});

let phone2 = document.querySelector('#phone2');
phone2.addEventListener('input', function (event) {
    let input = event.target.value;
    input = input.replace(/\D/g, ''); // Remove all non-digit characters

    // Format input as (123) 456-7890
    if (input.length > 3 && input.length <= 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
    } else if (input.length > 3) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}`;
    } else {
        input = `(${input}`;
    }

    event.target.value = input;
});

let phone3 = document.querySelector('#phone3');
phone3.addEventListener('input', function (event) {
    let input = event.target.value;
    input = input.replace(/\D/g, ''); // Remove all non-digit characters

    // Format input as (123) 456-7890
    if (input.length > 3 && input.length <= 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
    } else if (input.length > 3) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}`;
    } else {
        input = `(${input}`;
    }

    event.target.value = input;
});

let phone4 = document.querySelector('#phone4');
phone4.addEventListener('input', function (event) {
    let input = event.target.value;
    input = input.replace(/\D/g, ''); // Remove all non-digit characters

    // Format input as (123) 456-7890
    if (input.length > 3 && input.length <= 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
    } else if (input.length > 3) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}`;
    } else {
        input = `(${input}`;
    }

    event.target.value = input;
});


const radios = document.querySelectorAll('input[type="radio"][name="waiver"]');
radios.forEach(radio => {
    radio.addEventListener('change', function (event) {
        console.log('Radio button clicked:', event.target.value);
        if (event.target.value === 'y') {
            document.getElementById('waiver-container').style.display = 'block';
        } else {
            document.getElementById('waiver-container').style.display = 'none';
        }
    });
});

const periods = document.querySelectorAll('input[type="radio"][name="tuitionperiod"]');
periods.forEach(radio => {
    radio.addEventListener('change', function (event) {
        console.log('Radio button clicked:', event.target.value);
        if (event.target.value === 'm') {
            document.getElementById('monthlyPanel').style.display = 'flex';
            document.getElementById('annualPanel').style.display = 'none';
            document.getElementById('otherPanel').style.display = 'none';
        } else if (event.target.value === 'a') {
            document.getElementById('monthlyPanel').style.display = 'none';
            document.getElementById('annualPanel').style.display = 'flex';
            document.getElementById('otherPanel').style.display = 'none';
        } else {
            document.getElementById('monthlyPanel').style.display = 'none';
            document.getElementById('annualPanel').style.display = 'none';
            document.getElementById('otherPanel').style.display = 'block';
        }
    });
});