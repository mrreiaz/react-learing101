import PropTypes from 'prop-types'
function Student(props){
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Name: {props.age} </p>
            <p>Name: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}


Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student