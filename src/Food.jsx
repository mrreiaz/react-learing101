

function Food(){
    const food1 = "Orange"
    const food2 = "Banana"
    const  food3 = "Apple"
    return (
        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>
    );
}

export default Food