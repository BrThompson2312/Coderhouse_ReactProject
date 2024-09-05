import mouse from "./imgs/categories/mouse/mouse.jpeg";
import auto from "./imgs/categories/car/auto.jpeg";

export const listaProductos = [
    {
        category: "Cars",
        idCategory: 1,
        items: [
            {
                id: 1,
                name: "Car1",
                image: auto,
                description: "Soy un auto xd"
            },
            {
                id: 2,
                name: "Car2",
                image: auto,
                description: "Soy un auto xd"
            }
        ]
    },
    {
        category: "Mouses",
        idCategory: 2,
        items: [
            {
                id: 1,
                name: "Mouse1",
                image: mouse,
                description: "Mouse Logitech"
            },
            {
                id: 2,
                name: "Mouse2",
                image: mouse,
                description: "Mouse Logitech"
            }
        ]
    }
];