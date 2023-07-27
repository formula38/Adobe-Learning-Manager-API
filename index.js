async function getUsers() {
    try {
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;
        const encodedEmail = encodeURIComponent(email); // Encode the email address

        const apiUrl = `https://learningmanager.adobe.com/primeapi/v2/users/${encodedEmail}/accounts?onlyActive=true&socialEnabledAccounts=false`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const userListElement = document.getElementById('userList');
        userListElement.innerHTML = ''; // Clear existing user list

        data.data.forEach(user => {
            const acctId = user.id;
            const badge = user.attributes.logoUrl;

            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h4>Account ID: ${acctId}</h4>
                <img src="${badge}">
                <hr>
            `;

            userListElement.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
