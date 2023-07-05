const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const password = document.querySelector(".password");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userData = {
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
  };

  fetch("https://sabzlearn-630dd-default-rtdb.firebaseio.com/users.json", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => {
      console.log(res);
      clearData();
    })
    .catch((error) => console.log(error));
});

function clearData() {
  (firstname.value = ""), (lastname.value = ""), (password.value = "");
}
