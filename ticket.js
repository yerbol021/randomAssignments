function ticketKiosk(age) {
 
  return age <= 12
    ?
    "Here is your free ticket"
    : age >= 13 && age <= 17
      ? "Here is your discounted teen ticket"
      : age > 18 && age < 64
        ? "Here is your adult ticket"
        : "Here is your discounted senior ticket";

}
console.log(ticketKiosk(14))