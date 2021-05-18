const newUserForm = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-new').value.trim();
    const email = document.getElementById('email-new').value.trim();
    const password = document.getElementById('password-new').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response);

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('new-submit').addEventListener('submit', newUserForm);