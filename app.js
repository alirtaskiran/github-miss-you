const url = "https://api.github.com/users";

async function getUser(username) {
  let response = await fetch(url + `/${username}`);
  let data = await response.json();
  return data;
}

async function getRepos(username) {
  let response = await fetch(url + `/${username}/repos`);
  let data = await response.json();
  return data;
}

async function getLastPushed(username) {
  return new Promise((resolve, reject) => {
    fetch(url + `/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        let lastPushed = data.map((repo) => repo.pushed_at);
        resolve(lastPushed.sort().reverse()[0]);
      })
      .catch((err) => reject(err));
  });

  // let response = await fetch(url + `/${username}/repos`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let lastPushed = data.map((repo) => repo.pushed_at);
  //     console.log(lastPushed.sort().reverse()[0]);
  //   })
  //   .catch((err) => console.log(err));
  // return response;
}

getLastPushed("alirtaskiran").then((data) => console.log(data));

// getRepos("alirtaskiran").then(
//   data => data.forEach(repo => console.log(repo.pushed_at))
// );

// getRepos("Beornar").then(
//   data => data.forEach(repo => console.log(repo.pushed_at))
// );
