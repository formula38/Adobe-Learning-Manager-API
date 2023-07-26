async function getUsers() {
    try {
        const response = await fetch('https://captivateprime.adobe.com/primeapi/v2/users?page[offset]=0&page[limit]=10&sort=id');

        const responseData = await response.text();
        console.log('API Response:', responseData);

        const data = await response.json();

        const userListElement = document.getElementById('userList');
        userListElement.innerHTML = ''; // Clear existing user list

        data.data.forEach(user => {
            const name = user.attributes.name;
            const email = user.attributes.email;
            const profile = user.attributes.profile;

            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h3>Name: ${name}</h3>
                <p>Email: ${email}</p>
                <p>Profile: ${profile}</p>
                <hr>
            `;

            userListElement.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
