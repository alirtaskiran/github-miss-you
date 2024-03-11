fetch("https://api.github.com/users/alirtaskiran/repos")
  .then((response) => response.json())
  .then((data) => {

    data.forEach((repo) => {
      console.log(repo.updated_at);
    
  })
})
  .catch((error) => console.error(error));
