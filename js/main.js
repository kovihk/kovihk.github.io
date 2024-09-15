/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if(toggle && nav)
	{
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	// Remove menu mobile
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Define an array to hold the cart items
let cart = [];

// Function to render the cart items in the HTML
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsElement.innerHTML = ''; // Clear previous cart items
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} x ${item.quantity}
                        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsElement.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = total.toFixed(2);
}

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: parseFloat(productPrice), quantity: 1 });
    }

    renderCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = e.target.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});
