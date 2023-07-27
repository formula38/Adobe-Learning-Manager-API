async function getUsers() {
    try {
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;
        const encodedEmail = encodeURIComponent(email);

        const apiUrl = `https://learningmanager.adobe.com/primeapi/v2/users/${encodedEmail}/accounts?onlyActive=true&socialEnabledAccounts=false`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const userListElement = document.getElementById('userList');
        userListElement.innerHTML = ''; // Clear existing user list

        if (data.data.length === 0) {
            // If the API response does not contain any data (user not found), show "No User Found" message and wrong turn sign image
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h2 style="text-align: center">No User Found!</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjqr8xggw3YpL6bXFgBObvp46dYhBwfrLGA&usqp=CAU" class="wrong-turn-sign-image">
            `;
            userListElement.appendChild(userDiv);
        } else {
            // If the API response contains user data, display the user information as before
            data.data.forEach(user => {
                const acctId = user.id;
                const badge = user.attributes.logoUrl;

                const userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <h4>Account ID: ${acctId}</h4>
                    <img src="${badge}" class="responsive-image">
                    <hr>
                `;

                userListElement.appendChild(userDiv);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

