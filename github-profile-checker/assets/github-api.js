const github_form = document.querySelector("#github-search-form");
const github_api_url = "https://api.github.com/users/";

github_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#github-username").value;

  fetch(github_api_url + username)
  .then((res) => res.json())
  .then((data) => {
    if (data.message === "Not Found") {
      document.querySelector("#github-result").innerHTML = `
        <h3 class="text-danger">User not found</h3>
      `;
    }
    else {
      const github_result = document.querySelector("#github-result");

      github_result.innerHTML = `
        <div class="card">
          <div class="card-header">
            <img src="${data.avatar_url}" class="img-fluid" alt="User Avatar">
            <h3><a href="${data.html_url}" target="_blank">${data.name}</a></h3>
          </div>
          <div class="card-body">
            <span class="badge">Public Repos: ${data.public_repos}</span>
            <span class="badge">Public Gists: ${data.public_gists}</span>
            <span class="badge">Followers: ${data.followers}</span>
            <span class="badge">Following: ${data.following}</span>
            <ul class="user-info">
              <li class="user-info-item"><span class="title">Company:</span> ${data.company}</li>
              <li class="user-info-item"><span class="title">Website/Blog:</span> ${data.blog}</li>
              <li class="user-info-item"><span class="title">Location:</span> ${data.location}</li>
              <li class="user-info-item"><span class="title">Member Since:</span> ${data.created_at}</li>
            </ul>
          </div>
        </div>
      `;
    }
  })
  .catch((err) => {
    console.log(err);
  });
});