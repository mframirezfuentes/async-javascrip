import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

async function fetchDatada(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
};

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchDatada(`${urlApi}/products`)
        const product = await fetchDatada(`${urlApi}/products/${products[0].id}`)
        const category = await fetchDatada(`${urlApi}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before');
anotherFunction(API)
console.log('After');