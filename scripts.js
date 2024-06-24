// scripts.js
const products = [
    { name: 'Product 1', price: 50, image: 'https://via.placeholder.com/200' },
    { name: 'Product 2', price: 150, image: 'https://via.placeholder.com/200' },
    { name: 'Product 3', price: 250, image: 'https://via.placeholder.com/200' },
    { name: 'Product 4', price: 350, image: 'https://via.placeholder.com/200' },
    { name: 'Product 5', price: 450, image: 'https://via.placeholder.com/200' },

    // { name: 'Iphone 11', price: $159, image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg' },
    // { name: 'Iphone 12', price: $219, image: 'https://images.macrumors.com/article-new/2019/10/iphone12design.jpg' },
    // { name: 'Iphone 13', price: $329, image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg' },
    // { name: 'Iphone 14', price: $479, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHTDgo0tQgnrmgFqpWjjHMX5W60wS_z_oYqESQ7xvMvfrJXAkn8y7mrboXc_DulV42BU&usqp=CAU' },
    // { name: 'Iphone 15', price: $599, image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg' },
];

const productContainer = document.getElementById('productContainer');

function displayProducts(products) {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function searchProducts() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

function filterByPrice(maxPrice) {
    const filteredProducts = products.filter(product => product.price < maxPrice);
    displayProducts(filteredProducts);
}

// Initial display
displayProducts(products);
