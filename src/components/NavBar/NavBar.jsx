// Components
import LiSection from "./LiSection.jsx";
import CategoryList from "./CategoryList";
import { NavLink } from "react-router-dom";
// Methods
import { useState, useEffect } from "react";
// Styles
import "./style.css";
// Firebase modules
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function Navbar() {

    let categories = [];
    const [ loading, setLoading ] = useState(true);
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             categories = data.map((el) => el["category"])
    //             categories = categories.filter((el, index) => categories.indexOf(el) === index)
    //             setItems(categories);
    //             setLoading(false);
    //         })
    //         .catch(data => {
    //             console.log(data);
    //             setError(true);
    //         })
    //     }, 3000);
    // }, []);

    useEffect(() => {
        const bd = getFirestore();
        const itemsCollection = collection(bd, "items");

        getDocs(itemsCollection)
        .then((snapshot) => {
            categories = snapshot.docs.map((doc) => doc.data().category);
            categories = categories.filter((el, index) => categories.indexOf(el) === index);
            setItems(categories)
            setLoading(false);
        })
        .catch(() => {
            setError(true);
        })
    }, []);

    return (
        <>
            <header className="menuCommerce d-flex align-items-center justify-content-between p-3 gap-3">
                <h1 className="m-0 brand">
                    <NavLink to="/" className="text-white">ThompsonCommerce</NavLink>
                </h1>
                <nav className="NavBar p-2 rounded w-100">
                    <ul className="d-flex align-items-center justify-content-end gap-3 p-0 m-0 list-unstyled">
                        <LiSection />
                    </ul>
                </nav>
            </header>
            <nav className="ItemCategories">
                <ul className="p-2 d-flex align-items-center justify-content-center gap-3 list-unstyled">
                    <span className="text-white">Categories: </span> 
                    <CategoryList items={items}/>
                </ul>
            </nav>
        </>
    )
}