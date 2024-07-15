document.addEventListener("DOMContentLoaded", function () {
  const showAllBtn = document.getElementById("show-all-btn");
  const showLessBtn = document.getElementById("show-less-btn");

  function showAll() {
    const hiddenCards = document.querySelectorAll(
      "#product-container .product-card.d-none"
    );
    hiddenCards.forEach((card) => {
      card.classList.remove("d-none");
      card.classList.add("show-all");
      // Ensure transition is applied after class change
      setTimeout(() => card.classList.add("visible"), 10);
    });
    showAllBtn.classList.add("d-none"); // Hide "Show All" button
    showLessBtn.classList.remove("d-none"); // Show "Show Less" button
  }

  function showLess() {
    const visibleCards = document.querySelectorAll(
      "#product-container .product-card.visible"
    );
    visibleCards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.remove("visible");
        card.classList.remove("show-all");
        // Ensure hiding transition is applied before adding d-none
        setTimeout(() => card.classList.add("d-none"), 500); // Match transition duration
      }
    });
    showAllBtn.classList.remove("d-none"); // Show "Show All" button
    showLessBtn.classList.add("d-none"); // Hide "Show Less" button
  }

  // Initially ensure the first 3 cards are always visible
  const cards = document.querySelectorAll("#product-container .product-card");
  cards.forEach((card, index) => {
    if (index < 3) {
      card.classList.add("initial");
      card.classList.add("visible"); // Ensure first 3 cards are always visible
    } else {
      card.classList.add("d-none"); // Hide additional cards initially
    }
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", showAll);
  }

  if (showLessBtn) {
    showLessBtn.addEventListener("click", showLess);
  }
});
