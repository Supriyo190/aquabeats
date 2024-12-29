// Focus on the search input field when the search button is clicked
document.getElementById('searchButton').addEventListener('click', () => {
  document.getElementById('searchInput').focus();
});
// product section
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('searchInput');
  const products = document.querySelectorAll('.product');
  const noResultsMessage = document.getElementById('noResults');

  // Hide "No products found" message by default
  noResultsMessage.style.display = 'none';

  // Event listener for the search input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    let hasResults = false;

    products.forEach(product => {
      const productName = product.getAttribute('data-product').toLowerCase();

      if (productName.includes(query)) {
        product.style.display = 'block';
        hasResults = true;
      } else {
        product.style.display = 'none';
      }
    });

    // Show or hide the "No products found" message
    noResultsMessage.style.display = hasResults ? 'none' : 'block';
  });
});




// Cart array to store added products
let cart = [];

// Update the cart count and display products
function updateCart() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  
  cartCount.textContent = cart.length;

  // Update the cart items in the popup
  cartItems.innerHTML = '';
  cart.forEach((product, index) => {
    const li = document.createElement('li');
    li.textContent = product;

    // Create a remove button for each product
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn', 'btn-danger', 'ms-2');
    removeBtn.onclick = () => removeProduct(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
}

// Add product to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    cart.push(product);
    updateCart();
  });
});

// Remove product from cart
function removeProduct(index) {
  cart.splice(index, 1);
  updateCart();
}

// Open the cart popup
document.getElementById('cartBtn').addEventListener('click', () => {
  const cartPopup = document.getElementById('cartPopup');
  cartPopup.style.display = cartPopup.style.display === 'none' ? 'block' : 'none';
});

// Close the cart popup
document.getElementById('closePopup').addEventListener('click', () => {
  const cartPopup = document.getElementById('cartPopup');
  cartPopup.style.display = 'none';
});
// review
document.addEventListener("DOMContentLoaded", function () {
  // Select all rating buttons
  const ratingButtons = document.querySelectorAll(".rating-star");
  
  ratingButtons.forEach(button => {
    button.addEventListener("click", function () {
      const selectedRating = parseInt(button.getAttribute("data-rating"));

      // Clear previously selected ratings
      ratingButtons.forEach(btn => btn.classList.remove("selected"));

      // Highlight stars up to the selected rating
      ratingButtons.forEach(btn => {
        if (parseInt(btn.getAttribute("data-rating")) <= selectedRating) {
          btn.classList.add("selected");
        }
      });
      
      // Update average rating display (optional logic)
      const averageRatingElement = document.getElementById("averageRating");
      averageRatingElement.textContent = "★".repeat(selectedRating);
    });
  });
});

// contact
document.addEventListener("DOMContentLoaded", function () {
  const helpMeBtn = document.getElementById("helpMeBtn");
  const helpPopup = document.getElementById("helpPopup");
  const userQuery = document.getElementById("userQuery");
  const submitQuery = document.getElementById("submitQuery");
  const closeHelpPopup = document.getElementById("closeHelpPopup");

  // Show Help Popup
  helpMeBtn.addEventListener("click", function () {
    helpPopup.style.display = "block";
  });

  // Close Help Popup
  closeHelpPopup.addEventListener("click", function () {
    helpPopup.style.display = "none";
    userQuery.value = ""; // Clear query input
  });

  // Handle Query Submission
  submitQuery.addEventListener("click", function () {
    if (userQuery.value.trim() === "") {
      alert("Please enter your query.");
    } else {
      alert("Help Me section is under process.");
      helpPopup.style.display = "none";
      userQuery.value = ""; // Clear query input
    }
  });
});


