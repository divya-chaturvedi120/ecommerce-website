// Array of products (static data; no backend fetch)
const products = [
  {name: "Summer Dress", category: "Dresses", price: 49.99, img: "Images/feature1.jpg"},
  {name: "Casual Shirt", category: "Shirts", price: 29.99, img: "Images/feature2.jpg"},
  {name: "Evening Dress", category: "Dresses", price: 59.99, img: "Images/feature3.jpg"},
  {name: "Blazer Classic", category: "Blazers", price: 89.99, img: "Images/women.png"},
  {name: "Jeans Slim Fit", category: "Jeans", price: 39.99, img: "Images/men.jpg"},
  {name: "Sneakers Red", category: "Sneakers", price: 49.99, img: "Images/shoes.jpg"},
  {name: "Boots Leather", category: "Boots", price: 69.99, img: "Images/shoes.jpg"}
];

// Get the container element where products will be displayed
const container = document.getElementById('products-container');

// Function to display products on the page
function displayProducts(items){
  container.innerHTML = ""; // Clear previous products
  items.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-card');
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p class="price">$${product.price}</p>
    `;
    container.appendChild(productDiv); // Add product to container
  });
}

// Display all products initially
displayProducts(products);

// Category filter functionality
const filters = document.querySelectorAll('.category-filters a');
filters.forEach(filter => {
  filter.addEventListener('click', e => {
    e.preventDefault(); // Prevent default link behavior
    const category = filter.getAttribute('data-filter'); // Get selected category
    if(category === "All"){
      displayProducts(products); // Show all products
    } else {
      const filtered = products.filter(p => p.category === category); // Filter by category
      displayProducts(filtered); // Display filtered products
    }
  });
});
