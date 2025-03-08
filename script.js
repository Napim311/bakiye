const users = [
    { username: "Aybars", password: "AybarsHLK123", balance: "1.500,00 TL" },
    { username: "Yusuf", password: "YusufHLK123", balance: "2.300,00 TL" },
    { username: "Hamsi", password: "HamsiHLK123", balance: "3.750,00 TL" },
    { username: "Kamil", password: "HamsiHLK123", balance: "3.750,00 TL" }
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