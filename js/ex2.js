console.log("Piersol's Output from Homework 8 Example 2");

document.getElementById("fetchProfile").addEventListener("click", () => {
  let login = document.getElementById("githubLogin").value
  fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(user => {
          let profilePic = document.getElementById("profilePicture")
          profilePic.innerHTML = `<img src="${user.avatar_url}" alt="Profile Picture" width="150">`
          document.getElementById("name").textContent = user.name || "N/A"
          document.getElementById("blog").textContent = user.blog || "N/A"
          document.getElementById("created").textContent = user.created_at || "N/A"
      })
      .catch(err => {
          console.error("Error with getting GitHub user:", err.message)
      })
})
