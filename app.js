const url = "https://api.github.com/users";
const token = "TOKEN_GOES_HERE";

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

async function getAvatar(username) {
  const requestOptions = {
    headers: {
      Authorization: `token ${token}`
    }
  };
  let response = await fetch(url + `/${username}`, requestOptions);
  let data = await response.json();

  return data.avatar_url;
}


function convertDiffToTime(diff) {
  let hours = Math.floor(diff / 60);
  let minutes = Math.floor(diff % 60);
  let seconds = Math.floor((diff * 60) % 60);

  return `${hours} saat ${minutes} dakika ${seconds} saniye`;
}


getLastPushed("alirtaskiran").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time2 = document.getElementById("time2");
  time2.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushed("Beornar").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time6 = document.getElementById("time6");
  time6.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushed("cerendn").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time4 = document.getElementById("time4");
  time4.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushed("HakanBerke").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time1 = document.getElementById("time1");
  time1.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushed("cagatayCvk").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time5 = document.getElementById("time5");
  time5.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushed("BarkinSayin").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time3 = document.getElementById("time3");
  time3.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});
getLastPushed("BerkayTurna").then((data) => {
  let now = new Date();
  let lastPushed = new Date(data[0]);
  let diff = (now - lastPushed) / (1000 * 60);
  let time7 = document.getElementById("time7");
  time7.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

// getRepos("alirtaskiran").then(
//   data => data.forEach(repo => console.log(repo.pushed_at))
// );

// getRepos("Beornar").then(
//   data => data.forEach(repo => console.log(repo.pushed_at))
// );


