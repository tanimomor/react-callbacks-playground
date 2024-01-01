import React, {useState, useEffect} from "react";

function List({numbers}){

    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(numbers());
        console.log('List items updated- ', items)
    }, [numbers])

    return (
        <div>
            {items.map((e)=><h1>{e}</h1>)}
        </div>
    );
}

export default List;