const url = "https://api.github.com/users";
const token = "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";

async function getUser(username) {
  const requestOptions = {
    headers: {
      Authorization: `token ${token}`
    }
  };
  let response = await fetch(url + `/${username}`, requestOptions);
  let data = await response.json();
  return data;
}

async function getRepos(username) {
  const requestOptions = {
    headers: {
      Authorization: `token ${token}`
    }
  };
  let response = await fetch(url + `/${username}/repos`, requestOptions);
  let data = await response.json();
  return data;
}

async function getLastPushed(username) {
  const requestOptions = {
    headers: {
      Authorization: `token ${token}`
    }
  };
  return new Promise((resolve, reject) => {
    fetch(url + `/${username}/repos`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let lastPushed = data.map((repo) => repo.pushed_at);
        resolve(lastPushed.sort().reverse());
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


getLastPushed("alirtaskiran").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});

getLastPushed("Beornar").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});

getLastPushed("cerendn").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});

getLastPushed("HakanBerke").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});

getLastPushed("cagatayCvk").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});

getLastPushed("BarkinSayin").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});
getLastPushed("BerkayTurna").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  console.log(diff);
});

// getRepos("alirtaskiran").then(
//   data => data.forEach(repo => console.log(repo.pushed_at))
// );

// getRepos("Beornar").then(
//   data => data.forEach(repo => console.log(repo.pushed_at))
// );
