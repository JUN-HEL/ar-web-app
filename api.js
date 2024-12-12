// Mock API response for product details
const productAPI = {
    getProductDetails: function (productID) {
        const products = {
            "mobile": {
                name: "Mobile Phone",
                description: "Latest mobile phone with advanced features",
                amazonPrice: 999,
                flipkartPrice: 950,
                ebayPrice: 1050,
                ratings: 4
            }
        };
        return products[productID];
    }
};

// Simulate displaying product details
function displayProductDetails(productID) {
    const product = productAPI.getProductDetails(productID);
    const priceList = document.querySelector('#price-list');
    
    // Display product info dynamically
    priceList.innerHTML = `
        <li>Amazon: $${product.amazonPrice}</li>
        <li>Flipkart: $${product.flipkartPrice}</li>
        <li>eBay: $${product.ebayPrice}</li>
    `;
}
