let cart = [];
let totalPrice = 0;

// Adding item to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const carName = this.getAttribute('data-car');
        const price = parseInt(this.getAttribute('data-price'));

        // Add product to the cart array
        cart.push({ carName, price });
        updateCart();
    });
});

// Updating the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');

    // Clear the cart content
    cartItems.innerHTML = '';
    totalPrice = 0;

    // Add each item in the cart to the list
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.carName} - $${item.price} 
            <button class="remove-btn" onclick="removeItem(${index})">X</button>`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price
    totalPriceElem.innerText = totalPrice;

    // Show checkout button if there are items in the cart
    if (cart.length > 0) {
        document.querySelector('.checkout-btn').style.display = 'block';
    } else {
        document.querySelector('.checkout-btn').style.display = 'none';
    }
}

// Removing item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout function
function checkout() {
    alert(`Your total is $${totalPrice}. Proceeding to checkout.`);
    // You can redirect to a payment page or implement checkout functionality here.
    // Example: window.location.href = 'checkout.html';
}
