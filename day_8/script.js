       document.getElementById("loadUsers").addEventListener("click", function () {
           var xhr = new XMLHttpRequest();
           xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
           xhr.onreadystatechange = function () {
               if (xhr.readyState === 4 && xhr.status === 200) { /// دا ال check   الصحيح
                   //    عشان احوله ل js obj بقى
                   // عشان اقدر اعدل عليه واشتغل عليه 
                   var data = JSON.parse(xhr.responseText);
                  var tableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];
                   tableBody.innerHTML = "";
                   // همشي على الداتا واحده واحده 
                   data.forEach(user => {   
                      var row = `<tr>
                           <td>${user.id}</td>
                           <td>${user.name}</td>
                           <td>${user.username}</td>
                           <td>${user.email}</td>
                           <td>${user.phone}</td>
                           <td>${user.website}</td>
                           <td><a href="view.html?id=${user.id}" class="btn">
                           View Details</a>
                           </td>
                       </tr>`;
                       // تعمل صفوف بقى جديده 
                       tableBody.innerHTML += row; 
                   });
               }
           };
           xhr.send();
       });