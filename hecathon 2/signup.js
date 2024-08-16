
function handleSignup() {
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const UserName = document.getElementById('UserName').value;

   
    if (email === "" || password === "" || UserName === "") {
        alert("Please fill in both fields.");
        return;
    }
    localStorage.setItem('user', JSON.stringify({ email, password }));
     window.location.href = 'dashboard.html';
}
