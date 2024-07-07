document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            name: 'Product 1',
            description: 'This is product 1',
            price: '$20.00',
            image: 'images/IMG-20240701-WA0034.jpg'
        },
        {
            name: 'Product 2',
            description: 'This is product 2',
            price: '$30.00',
            image: 'images/IMG-20240701-WA0032.jpg'
        },
        {
            name: 'Product 3',
            description: 'This is product 3',
            price: '$25.00',
            image: 'images/IMG-20240701-WA0033.jpg'
        },
        {
            name: 'Product 4',
            description: 'This is product 4',
            price: '$30.00',
            image: 'images/IMG-20240701-WA0035.jpg'
        },
        {
            name: 'Product 5',
            description: 'This is product 5',
            price: '$35.00',
            image: 'images/IMG-20240701-WA0036.jpg'
        }
    ];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const cartLink = document.getElementById('cart-link');
    const checkoutBtn = document.getElementById('checkout-btn');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    let cart = [];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p class="price">${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
        cartLink.innerHTML = `Cart (${cart.length})`;
    }

    window.addToCart = function (index) {
        cart.push(products[index]);
        renderCart();
    };

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        renderCart();
    };

    checkoutBtn.addEventListener('click', function () {
        alert('Checkout feature is not implemented yet.');
    });

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    renderProducts();
    renderCart();
});

$(document).ready(function() {
    // Login Form Submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        let email = $('#loginEmail').val();
        let password = $('#loginPassword').val();
        
        // Perform validation and authentication (replace with backend logic)
        if (email === 'user@example.com' && password === 'password') {
            alert('Login successful!');
            $('#loginModal').modal('hide');
            // Redirect or update UI accordingly
        } else {
            alert('Invalid email or password');
        }
    });

    // Sign Up Form Submission
    $('#signupForm').submit(function(e) {
        e.preventDefault();
        let name = $('#signupName').val();
        let email = $('#signupEmail').val();
        let password = $('#signupPassword').val();
        
        // Perform validation and user registration (replace with backend logic)
        alert(`Registered successfully! Welcome, ${name}`);
        $('#signupModal').modal('hide');
        // Reset form fields if needed
        $('#signupForm')[0].reset();
    });
});
