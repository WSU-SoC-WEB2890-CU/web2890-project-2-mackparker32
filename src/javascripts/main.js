//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

//format selection to be the current date in the trip form
const currentDate = new Date()
const formattedDate = currentDate.toISOString().split("T")[0]

const dateInput = document.getElementById("departure")
//to make it work in both files
if (dateInput) {
  dateInput.value = formattedDate
}

const tripDateInput = document.getElementById("departureDate")
if (tripDateInput) {
  tripDateInput.value = formattedDate
}
