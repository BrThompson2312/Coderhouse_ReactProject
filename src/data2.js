import mouse from "./imgs/categories/mouse/mouse.jpeg";
import mouse2 from "./imgs/categories/mouse/mouse2.png";
import car from "./imgs/categories/car/auto.jpeg";
import car2 from "./imgs/categories/car/auto2.png";

export const listaProductos = [
    {
        category: "Cars",
        idCategory: 1,
        items: [
            {
                id: 1,
                name: "Car1",
                image: car,
                description: "Soy un auto xd"
            },
            {
                id: 2,
                name: "Car2",
                image: car2,
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
                image: mouse2,
                description: "Mouse Logitech"
            }
        ]
    }
];