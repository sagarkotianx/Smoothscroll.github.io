document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "Audi A6", price: "$50000", image: "product1.jpg" },
    { name: "Audi A4", price: "$40000", image: "product2.jpg" },
    { name: "Audi Rs7 Sportback", price: "$85000", image: "product3.jpg" },
    ];
   
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });
   
   