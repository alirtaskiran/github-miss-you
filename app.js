const url = "https://api.github.com/users";

async function getUser(username) {
  let response = await fetch(url + `/${username}`);
  let data = await response.json();
  return data;
}

getUser("alirtaskiran").then(data => console.log(data));