import Category from "./Category";

export default function CategoryList({items}) {
    let i = 0;
    return (
        <>
            {
                items.map((el) => {
                    return (
                        <Category key={i++} category={el}/>
                    )
                })
            }
        </>
    )
}