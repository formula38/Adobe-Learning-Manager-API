function getUser() {
    const userCountValue = 100;
    const userCountElement = document.getElementById("userCount");

    userCountElement.textContent = `Number of Users: ${userCountValue}`;
}
