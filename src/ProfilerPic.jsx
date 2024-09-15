function ProfilePic(){

    const imageUrl = "./src/assets/mrreiaz.png"


    const  handleClick = (e) => {
        e.target.style.display = "none"
        console.log(e)};

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}  />);

}

export default ProfilePic