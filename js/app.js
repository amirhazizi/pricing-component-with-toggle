// data.js
import data from "./data.js"

// var
const chechbox = document.getElementById("checkbox")
const prices = document.querySelectorAll(".prices")
// data object index
let index = 1

// checkbox Listener func
const checkboxListener = () => {
  if (index === 0) index = 1
  else index = 0
  const newData = Object.values(data[index])
  let tempIndex = 0
  for (const price of prices) {
    price.textContent = newData[tempIndex]
    tempIndex++
  }
}
// checkbox change value event
chechbox.addEventListener("change", checkboxListener)
// DOMContentLoad event
window.addEventListener("DOMContentLoaded", checkboxListener)
