const baseUrl = "https://api.github.com";
//const url = "https://api.github.com/users";
const token =
  "YOUR_TOKEN_HERE";

async function fetchData(path) {
  const requestOptions = { headers: { Authorization: `token ${token}` } };
  let response = await fetch(`${baseUrl}/${path}`, requestOptions);
  let data = await response.json();
  return data;
}

function getUser(username) {
  // Geriye Promise döndürür
  return fetchData(`users/${username}`);
  // const requestOptions = {
  //   headers: {
  //     Authorization: `token ${token}`
  //   }
  // };
  // let response = await fetch(url + `/${username}`, requestOptions);
  // let data = await response.json();
  // return data;
}

function getRepos(username) {
  return fetchData(`users/${username}/repos`);
  // const requestOptions = {
  //   headers: {
  //     Authorization: `token ${token}`,
  //   },
  // };
  // let response = await fetch(url + `/${username}/repos`, requestOptions);
  // let data = await response.json();
  // return data;
}

async function getLastPushDate(username) {
  const data = await getRepos(username);
  let lastPushed = data.map((repo) => repo.pushed_at);
  lastPushed.sort().reverse();
  console.log("lastPushes", lastPushed);
  return lastPushed[0];
  // const requestOptions = {
  //   headers: {
  //     Authorization: `token ${token}`,
  //   },
  // };
  // return new Promise((resolve, reject) => {
  //   fetch(url + `/${username}/repos`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let lastPushed = data.map((repo) => repo.pushed_at);
  //       resolve(lastPushed.sort().reverse());
  //     })
  //     .catch((err) => reject(err));
  // });
}

async function getAvatar(username) {
  const data = await getUser(username);
  return data.avatar_url;

  //return getUser(username).then((data) => data.avatar_url);

  // const requestOptions = {
  //   headers: {
  //     Authorization: `token ${token}`,
  //   },
  // };
  // let response = await fetch(url + `/${username}`, requestOptions);
  // let data = await response.json();

  // return data.avatar_url;
}

function formatDateDifference(startDate, endDate) {
  var timeDifference = Math.abs(endDate - startDate); // Milisaniye cinsinden fark

  // Bir günün milisaniye cinsinden değeri
  var oneDay = 24 * 60 * 60 * 1000;

  var days = Math.floor(timeDifference / oneDay);
  var hours = Math.floor((timeDifference % oneDay) / (60 * 60 * 1000));
  var minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  var differenceString = "";
  if (days > 0) differenceString += days + " gün ";
  if (hours > 0) differenceString += hours + " saat ";
  if (minutes > 0) differenceString += minutes + " dakika ";

  if (seconds > 0) {
    differenceString += seconds + " saniye ";

    return differenceString.trim();
  }
}

function convertDiffToTime(diffMinutes) {
  let days = Math.floor(diffMinutes / 1440);
  let hours = Math.floor(diffMinutes / 60);
  let minutes = Math.floor(diffMinutes % 60);
  let seconds = Math.floor((diffMinutes * 60) % 60);

  if (days == 0 && hours == 0 && minutes == 0) return `${seconds} saniye`;
  if (days == 0 && hours == 0) return `${minutes} dakika ${seconds} saniye`;
  if (days == 0) return `${hours} saat ${minutes} dakika ${seconds} saniye`;
  return `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
}

getLastPushDate("alirtaskiran").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let diff = (now - lastPushed) / (1000 * 60);
  let time2 = document.getElementById("time2");
  time2.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushDate("Beornar").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let diff = (now - lastPushed) / (1000 * 60);
  let time6 = document.getElementById("time6");
  time6.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushDate("cerendn").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let diff = (now - lastPushed) / (1000 * 60);
  let time4 = document.getElementById("time4");
  time4.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushDate("HakanBerke").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let diff = (now - lastPushed) / (1000 * 60);
  let time1 = document.getElementById("time1");
  time1.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});

getLastPushDate("cagatayCvk").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let time5 = document.getElementById("time5");
  time5.innerHTML = formatDateDifference(now, lastPushed);
  console.log(diff);
});

getLastPushDate("BarkinSayin").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let diff = (now - lastPushed) / (1000 * 60);
  let time3 = document.getElementById("time3");
  time3.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});
getLastPushDate("BerkayTurna").then((pushDate) => {
  let now = new Date();
  let lastPushed = new Date(pushDate);
  let diff = (now - lastPushed) / (1000 * 60);
  let time7 = document.getElementById("time7");
  time7.innerHTML = convertDiffToTime(diff);
  console.log(diff);
});
