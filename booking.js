const theaterBox = document.querySelector(".theater-box");
const seats = document.querySelectorAll(".seat:not(.seat-label reserved");
/* const selectedSeats = document.querySelector(".row .seat: checked");
 */

function selectedSeats() {
  const clickedSeats = document.querySelectorAll(".row .seat:checked");

  const arrayOfSeats = Array.from(clickedSeats);

  const seatsId = arrayOfSeats.map((seat) => seat.getAttribute("id"));
  console.log(seatsId);
}

theaterBox.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("seat-label reserved")
  ) {
    e.target.classList.toggle("seat-label.available");
  }
  selectedSeats();
});
