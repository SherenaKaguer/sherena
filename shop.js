

document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    
    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }
    
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple form validation
            if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Assuming successful submission
            alert("Message sent successfully!");

            // Clear the form
            contactForm.reset();
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCountElement = document.getElementById('cart-count');
        const cartItemsElement = document.getElementById('cart-items');
        const totalItemsElement = document.getElementById('total-items');
        const totalPriceElement = document.getElementById('total-price');
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productElement = event.target.closest('.pro');
                const productId = productElement.dataset.id;
                const productName = productElement.dataset.name;
                const productPrice = parseFloat(productElement.dataset.price);
    
                const product = { id: productId, name: productName, price: productPrice, quantity: 1 };
    
                addToCart(product);
            });
        });
    
        function addToCart(product) {
            const existingProduct = cart.find(item => item.id === product.id);
    
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(product);
            }
    
            updateCartCount();
            saveCart();
            renderCartItems();
        }
    
        function updateCartCount() {
            const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
            cartCountElement.textContent = cartCount;
        }
    
        function renderCartItems() {
            if (cartItemsElement) {
                cartItemsElement.innerHTML = '';
    
                let totalItems = 0;
                let totalPrice = 0;
    
                cart.forEach(product => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.price} XOF</td>
                        <td>
                            <input type="number" value="${product.quantity}" min="1" class="quantity-input" data-id="${product.id}">
                        </td>
                        <td>${(product.price * product.quantity).toFixed(2)} XOF</td>
                        <td><button class="remove-item" data-id="${product.id}">Remove</button></td>
                    `;
    
                    cartItemsElement.appendChild(tr);
    
                    totalItems += product.quantity;
                    totalPrice += product.price * product.quantity;
                });
    
                totalItemsElement.textContent = totalItems;
                totalPriceElement.textContent = totalPrice.toFixed(2);
    
                const quantityInputs = document.querySelectorAll('.quantity-input');
                quantityInputs.forEach(input => {
                    input.addEventListener('change', updateQuantity);
                });
    
                const removeButtons = document.querySelectorAll('.remove-item');
                removeButtons.forEach(button => {
                    button.addEventListener('click', removeItem);
                });
            }
        }
    
        function updateQuantity(event) {
            const input = event.target;
            const productId = input.dataset.id;
            const newQuantity = parseInt(input.value);
    
            const product = cart.find(item => item.id === productId);
            if (product && newQuantity > 0) {
                product.quantity = newQuantity;
                saveCart();
                renderCartItems();
                updateCartCount();
            }
        }
    
        function removeItem(event) {
            const button = event.target;
            const productId = button.dataset.id;
    
            const productIndex = cart.findIndex(item => item.id === productId);
            if (productIndex !== -1) {
                cart.splice(productIndex, 1);
                saveCart();
                renderCartItems();
                updateCartCount();
            }
        }
    
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    
        // Initial render of the cart if on the Cart page
        renderCartItems();
        updateCartCount();
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const products = Array.from(document.querySelectorAll('.pro'));
    
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
    
        // Event listener for search form submission
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            filterProducts(searchTerm);
        });
    
        // Function to filter products based on search term
        function filterProducts(searchTerm) {
            products.forEach(product => {
                const productName = product.dataset.name.toLowerCase();
                const productElement = product.closest('.pro');
                if (productName.includes(searchTerm)) {
                    productElement.style.display = 'block';
                } else {
                    productElement.style.display = 'none';
                }
            });
        }
    
        // Function to reset product display
        function resetProductDisplay() {
            products.forEach(product => {
                const productElement = product.closest('.pro');
                productElement.style.display = 'block';
            });
        }
    
        // Initial render of the cart if on the Cart page
        renderCartItems();
        updateCartCount();
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const products = Array.from(document.querySelectorAll('.pro'));
        const searchForm = document.querySelector('.search-bar');
        const searchInput = document.querySelector('.form-control');
    
        // Event listener for search form submission
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            filterProducts(searchTerm);
        });
    
        // Function to filter products based on search term
        function filterProducts(searchTerm) {
            products.forEach(product => {
                const productName = product.querySelector('h5').textContent.trim().toLowerCase();
                const productElement = product.closest('.pro');
                if (productName.includes(searchTerm)) {
                    productElement.style.display = 'block';
                } else {
                    productElement.style.display = 'none';
                }
            });
        }
    
        // Function to reset product display
        function resetProductDisplay() {
            products.forEach(product => {
                const productElement = product.closest('.pro');
                productElement.style.display = 'block';
            });
        }
    });
    