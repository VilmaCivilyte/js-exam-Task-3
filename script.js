/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getData(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }
  
async function getDataFromUrl(url) {
    const data = await getData(url);
    showUsers(data);
    console.log(data);
  }

function showUsers(data){
    const card = document.getElementById('output');

    data.forEach(item => {
        const login = document.createElement("h3");
        login.innerText = item.login;
    
        const avatarUrl = document.createElement("p");
        avatarUrl.innerText = item.avatar_url;
    
        const userCard = document.createElement("div");
        userCard.classList.add("user-card-style");
        userCard.append(login, avatarUrl);
        card.append(userCard);
    })
}

document.getElementById('btn').addEventListener("click", (event) => {
    event.preventDefault();
    getDataFromUrl(ENDPOINT);

    document.getElementById("message").innerText = "";
  });