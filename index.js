async function getUsers() {
    try {
        const response = await fetch('https://learningmanager.adobe.com/primeapi/v2/users/mrtakata%40ucdavis.edu/accounts?onlyActive=true&socialEnabledAccounts=false');

        const responseData = await response.text();
        console.log('API Response:', responseData);

        const data = await response.json();

        const userListElement = document.getElementById('userList');
        userListElement.innerHTML = ''; // Clear existing user list

        data.data.forEach(user => {
            const name = user.attributes.subdomain;

            const userDiv = document.createElement('user');
            userDiv.innerHTML = `
                <h3>SubDomain: ${name}</h3>
                <hr>
            `;

            userListElement.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
