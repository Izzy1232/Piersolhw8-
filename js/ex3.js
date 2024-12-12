console.log("Piersol's Output from Homework 8 Example 3");
let travelData = {
  name: "Isabella Piersol", 
  countries: [
    { name: "France", year: 2019 },
    { name: "Germany", year: 2022 },
    { name: "Sweden", year: 2022 }
  ]
}
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body:JSON.stringify(travelData)
})
  .then(response => response.text()) 
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.error("Error:", err.message)
  })

  