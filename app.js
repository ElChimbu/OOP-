'use strict'

class Product {
    constructor(name, price, year){
        this.name = name,
        this.price = price,
        this.year = year
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');

        element.innerHTML = `
            <div class="card mt-2">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}$
                    <strong>Product Year</strong>: ${product.year}
                    <a href='#' class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>

        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }
    
    deleteProduct(element){
        if(element.name === 'delete'){
            console.log(element.parentElement.parentElement.parentElement.remove())
        }
    }

}

//DOM
document.querySelector('#product-form')
    .addEventListener('submit', (e) =>{
        const Name = document.querySelector('#name').value;
        const Price = document.querySelector('#price').value;
        const Year = document.querySelector('#year').value;
        

         const newProduct = new Product(Name, Price, Year);
         let ui = new UI();
         ui.addProduct(newProduct)
         ui.resetForm()
         e.preventDefault();
    });

    document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });
