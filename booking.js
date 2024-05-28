const theaterBox = document.querySelector(".theater-box");
const seats = document.querySelectorAll(".seat:not(.seat-label reserved");

//function that checks selected seats picks out the id of each one and saves to local storage.
function selectedSeats() {
  const clickedSeats = document.querySelectorAll(".row .seat:checked");

  const arrayOfSeats = Array.from(clickedSeats);

  const seatsId = arrayOfSeats.map((seat) => seat.getAttribute("id"));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsId));
}

//eventlistener that picks up wich seats are selected and that they are not allready booked.
theaterBox.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("seat-label reserved")
  ) {
    e.target.classList.toggle("seat-label.available");
  }

  selectedSeats();
});

//redirects to buyticket page for confirmation
function bookTicket() {
  window.location.href = "buyTickets.html";
}

//function that runs when buyticket.html loads and retrieves the reserved seats from local storage
function getBookedSeats() {
  document.getElementById("selected-seats").innerHTML = JSON.parse(
    localStorage.selectedSeats
  );
}

/* let confirmation = document.getElementById("confirmation");
let name = document.getElementById("fullName");
const message = "Thank you for booking";

confirmation.addEventListener("click", function () {
  alert(name + message);
}); */

function confirmationAlert() {
  alert("Your booking is now done! please check yor E-mail");
  localStorage.clear();
  location.reload();
}
