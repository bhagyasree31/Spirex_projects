
// Product list

const products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 599,
        image: "👕"
    },

    {
        id: 2,
        name: "Shoes",
        price: 1499,
        image: "👟"
    },

    {
        id: 3,
        name: "Watch",
        price: 999,
        image: "⌚"
    },

    {
        id: 4,
        name: "Headphones",
        price: 1299,
        image: "🎧"
    },

    {
        id: 5,
        name: "Backpack",
        price: 899,
        image: "🎒"
    },

    {
        id: 6,
        name: "Sunglasses",
        price: 699,
        image: "🕶️"
    },

    {
        id: 7,
        name: "Laptop",
        price: 49999,
        image: "💻"
    },

    {
        id: 8,
        name: "Mobile Phone",
        price: 19999,
        image: "📱"
    }
];


// Cart array

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Display products

function displayProducts() {

    const productList =
        document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(function(product) {

        productList.innerHTML += `

            <div class="product">

                <div class="product-image">
                    ${product.image}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₹${product.price}
                </p>

                <button
                    class="add-button"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;
    });
}


// Add product to cart

function addToCart(productId) {

    const existingProduct =
        cart.find(item => item.id === productId);


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        const product =
            products.find(item => item.id === productId);

        cart.push({
            ...product,
            quantity: 1
        });
    }


    saveCart();

    displayCart();
}


// Display cart

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const totalPrice =
        document.getElementById("totalPrice");


    cartItems.innerHTML = "";

    let total = 0;

    let itemCount = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    } else {

        cart.forEach(function(item) {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;

            itemCount += item.quantity;


            cartItems.innerHTML += `

                <div class="cart-item">

                    <div class="cart-item-name">

                        <strong>
                            ${item.image}
                            ${item.name}
                        </strong>

                        <p>
                            ₹${item.price} each
                        </p>

                    </div>


                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${item.id})"
                        >
                            -
                        </button>

                        <span class="quantity">
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${item.id})"
                        >
                            +
                        </button>

                    </div>


                    <strong>
                        ₹${itemTotal}
                    </strong>


                    <button
                        class="remove-button"
                        onclick="removeFromCart(${item.id})"
                    >
                        Remove
                    </button>

                </div>
            `;
        });
    }


    cartCount.innerHTML = itemCount;

    totalPrice.innerHTML =
        total.toLocaleString("en-IN");
}


// Increase quantity

function increaseQuantity(productId) {

    const product =
        cart.find(item => item.id === productId);

    if (product) {

        product.quantity++;

    }

    saveCart();

    displayCart();
}


// Decrease quantity

function decreaseQuantity(productId) {

    const product =
        cart.find(item => item.id === productId);


    if (product) {

        product.quantity--;

        if (product.quantity <= 0) {

            cart =
                cart.filter(item => item.id !== productId);
        }
    }


    saveCart();

    displayCart();
}


// Remove product

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    saveCart();

    displayCart();
}


// Clear cart

function clearCart() {

    cart = [];

    saveCart();

    displayCart();
}


// Save cart in localStorage

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// Scroll to cart

function showCart() {

    document.getElementById("cartSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Initial display

displayProducts();

displayCart();
