const users = [
    { username: "Aybars", password: "AybarsHLK123", balance: "0 HL" },
    { username: "Kamil", password: "KamilHLK123", balance: "0 HL" },
    { username: "Hamsi", password: "HamsiHLK123", balance: "0 HL" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kullanıcıyı bul
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Kullanıcı doğrulandı, bakiyeyi göster
        document.getElementById('balanceDisplay').classList.remove('hidden');
        document.getElementById('balanceAmount').textContent = user.balance;
    } else {
        alert("Kullanıcı adı veya şifre hatalı!");
    }
});
