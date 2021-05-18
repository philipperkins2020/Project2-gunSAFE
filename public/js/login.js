const loginForm = (event) => {
    event.preventDefault();

    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (email && password) {
        fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        // if (response.ok) {
        //     document.location.replace('/');
        // } else {
        //     alert(response.statusText);
        // }
    }
};

document.getElementById('login-submit').addEventListener('submit', loginForm);