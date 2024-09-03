        const params = new URLSearchParams(window.location.search);
        const userId = params.get("id");
        
            var xhr = new XMLHttpRequest();
            xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`, true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var user = JSON.parse(xhr.responseText);
                    var userDiv = document.getElementById("userDetails");
                    userDiv.innerHTML = `
                        <p><strong>ID:</strong> ${user.id}</p>
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                    `;
                }
            };
            xhr.send();
    
        
