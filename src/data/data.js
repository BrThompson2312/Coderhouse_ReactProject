import mouse from "../imgs/categories/mouse/mouse.jpeg";
import mouse2 from "../imgs/categories/mouse/mouse2.png";
import car from "../imgs/categories/car/auto.jpeg";
import car2 from "../imgs/categories/car/auto2.png";

import generic from "../imgs/generic.png";

const listaProductos = [
    {
        "id": 1,
        "name": "auto",
        "price": 100,
        "description": "car",
        "category": "Cars",
        "idCategory": 1,
        "image": car,
    },
    {
        "id": 2,
        "name": "auto",
        "price": 100,
        "description": "car2",
        "category": "Cars",
        "idCategory": 1,
        "image": car2,
    },{
        "id": 3,
        "name": "auto",
        "price": 100,
        "description": "mouse1",
        "category": "Mouses",
        "idCategory": 2,
        "image": mouse,
    },{
        "id": 4,
        "name": "auto",
        "price": 100,
        "description": "mouse2",
        "category": "Mouses",
        "idCategory": 2,
        "image": mouse2,
    },{
        "id": 5,
        "name": "generic",
        "price": 100,
        "description": "generic",
        "category": "generic",
        "idCategory": 3,
        "image": generic,
    },{
        "id": 6,
        "name": "generic",
        "price": 100,
        "description": "generic",
        "category": "generic",
        "idCategory": 3,
        "image": generic,
    }
];

export default listaProductos;