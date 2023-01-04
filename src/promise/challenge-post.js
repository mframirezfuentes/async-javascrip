import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postdata(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response
}

const data = {
    "title": "Course",
    "price": 9999,
    "description": "Course About Javascript with Oscar",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postdata(`${API}/products`, data)
    .then(response => response.json())
    .then(data =>console.log(data))
    .finally(console.log('Finally'))