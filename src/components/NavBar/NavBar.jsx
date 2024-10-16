// Context
import { useContext } from "react";
import { Contexto } from "../../Context/Context";
// Components
import LiSection from "./LiSection.jsx";
import CategoryList from "./CategoryList";
import { NavLink } from "react-router-dom";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
// Methods
import { useState, useEffect } from "react";
// Styles
import "./style.css";
// Firebase modules
// import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function Navbar() {

    // let categories = [];
    // const [ loading, setLoading ] = useState(true);
    // const [ items, setItems ] = useState([]);
    // const [ error, setError ] = useState(false);

    // useEffect(() => {
    //     const bd = getFirestore();
    //     const itemsCollection = collection(bd, "items");

    //     getDocs(itemsCollection)
    //     .then((snapshot) => {
    //         categories = snapshot.docs.map((doc) => doc.data().category);
    //         categories = categories.filter((el, index) => categories.indexOf(el) === index);
    //         setItems(categories)
    //         setLoading(false);
    //     })
    //     .catch(() => {
    //         setError(true);
    //     })
    // }, []);

    const { categories, error, loading } = useContext(Contexto);

    return (
        <>
            <header className="menuCommerce d-flex align-items-center justify-content-between p-3 gap-3">
                <h1 className="m-0 brand"><NavLink to="/" className="text-white">ThompsonCommerce</NavLink></h1>
                <nav className="NavBar p-2 rounded w-100">
                    <LiSection />
                </nav>
            </header>
            {error 
                ? <Error/> 
                : loading
                    ? <Loader />
                    :
                    <>
                        
                        <nav className="ItemCategories">
                            <ul className="p-3 d-inline-flex align-items-center justify-content-center gap-3 list-unstyled">
                                <span>Categories: </span> 
                                <CategoryList items={categories}/>
                            </ul>
                        </nav>
                    </>
            }
        </>
    )
}