

function List(props){

    const itemList = props.items
    const listItems = itemList.map(fruit=> <li key={fruit.id}>
        {fruit.name} : {fruit.calories} : {fruit.price}
        
        </li>);
    return (
        <>
            <h2>{props.category}</h2>
            <ul>{listItems}</ul>
        </>

);
}
export default List 