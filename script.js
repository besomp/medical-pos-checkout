document.getElementById('service-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Calculate total price based on selected services
    let total = 0;
    if (document.getElementById('consultation').checked) total += parseFloat(document.getElementById('consultation').value);
    if (document.getElementById('blood-test').checked) total += parseFloat(document.getElementById('blood-test').value);
    if (document.getElementById('xray').checked) total += parseFloat(document.getElementById('xray').value);

    // Update total on UI
    document.getElementById('total').innerText = total;
});

document.getElementById('checkout-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const insurance = document.getElementById('insurance').value;

    const total = document.getElementById('total').innerText;

    // Sending the data to PHP for backend processing
    const data = new FormData();
    data.append('name', name);
    data.append('dob', dob);
    data.append('insurance', insurance);
    data.append('total', total);

    fetch('checkout.php', {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Payment Successful. Receipt sent!');
        } else {
            alert('Payment Failed: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
