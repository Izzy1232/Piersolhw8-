console.log("Piersol's Output from Homework 8 Example 1");

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json()) 
  .then(paintings => {
    let table = document.getElementById("paintings")
    paintings.forEach(painting => {
      let row = document.createElement("tr")
      let name = document.createElement("td")
      name.textContent = painting.name
      row.appendChild(name)
      let year = document.createElement("td")
      year.textContent = painting.year
      row.appendChild(year)
      let artist = document.createElement("td")
      artist.textContent = painting.artist

      row.appendChild(artist)

      table.appendChild(row)
    })
  })
  .catch(error => {
    console.error(error.message)
  })
