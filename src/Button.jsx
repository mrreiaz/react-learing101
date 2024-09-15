function Button(){

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++;
    //         console.log(`${name} you clickme ${count} times`)
    //     } else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // };

    const  handleClick = (e) => {
        e.target.textContent = "OPPS!!"
        console.log(e)};


    return (<button onClick={(e) => handleClick(e)}> Click Me</button>);

}

export default Button