import Item from "./Item";

export default function ItemList({filteredCategory, items}) {

    const category = (el) => Object.keys(filteredCategory).length == 0 
        ? true
        : el.category == filteredCategory.itemId;

    return (
        <div className="containerItems gap-5">
            {
                items.map((el) => {
                    if (category(el)) {
                        return (
                            <Item key={el.id} items={el}/>
                        )
                    }
                })
            }
        </div>
    )
}