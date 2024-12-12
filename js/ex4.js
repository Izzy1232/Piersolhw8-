console.log("Piersol's Output from Homework 8 Example 3");

document.getElementById("infoForm").addEventListener("submit", e => {
  e.preventDefault()
  let formData = new FormData(e.target)
  let table = document.querySelector("#dataTable tbody")
  table.innerHTML = ""
  formData.forEach((value, key) => {
   let row = document.createElement("tr")
    let keyCell = document.createElement("td")
    let valueCell = document.createElement("td")
    keyCell.textContent = key
    valueCell.textContent = value
    row.appendChild(keyCell)
    row.appendChild(valueCell)
    table.appendChild(row)
  })
})
