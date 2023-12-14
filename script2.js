document.addEventListener("DOMContentLoaded", function () {
    const products = [
        
        {
            name:"Hunter 350",
            price:182628,
            src:"C:\Users\SHRESTA\Desktop\task\Hunter350.jpg",
        },
        {
            name:"Bullet 350",
            price:209941,
            image:"C:\Users\SHRESTA\Desktop\task\Bullet350.jpg",
        },
        {
            name:"Classic 350",
            price:232352,
            image:"C:\Users\SHRESTA\Desktop\task\Classic350.jpg",
        },
        {
            name:"Continental GT 650",
            price:386581,
            image:"C:\Users\SHRESTA\Desktop\task\ContinentalGT650.jpg",
        },
        {
            name:"Himalayan 450",
            price: 329080,
            image:"C:\Users\SHRESTA\Desktop\task\Himalayan450.jpg",
        },
        {
            name:"Himalayan",
            price:268781,
            image:"C:\Users\SHRESTA\Desktop\task\Himalayan.jpg",
        },
        {
            name:"Interceptor 650",
            price:368162,
            image:"C:\Users\SHRESTA\Desktop\task\Interceptor650.jpg",
        },
        {
            name:"Meteor 350",
            price:247098,
            image:"C:\Users\SHRESTA\Desktop\task\Meteor350.jpg",          
        },
        {
            name:"Super Meteor 650",
            price:434872,
            image:"C:\Users\SHRESTA\Desktop\task\SuperMeteor650.jpg", 
        },
        {
            name:"Scram 411",
            price:257013,
            image:"C:\Users\SHRESTA\Desktop\task\Scram411.jpg",
        },
    ]; 

    const productsContainer = document.getElementById("products");

    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <a href="#" class="button">By Now</a>
        `;

        productsContainer.appendChild(card);
    });
    
});