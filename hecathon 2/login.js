function handleLogin() {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;

   
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    
    localStorage.setItem('user', JSON.stringify({ email, password }));

    
    window.location.href = 'dashboard.html';
}


document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = 'dashboard.html';
    }
});



