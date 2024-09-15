import  ProopType from 'prop-types'

function Greeting(props) {


    const welcomeMessage = <h2 className='welcome-message'> Welcome</h2>
    const loginMessage = <h2 className='login-message'> Please Login</h2>
  return (
    props.isLogin ? welcomeMessage : loginMessage
  )
  
}

Greeting.prototype = {
    isLogin: ProopType.bool,
    username: ProopType.string
}


Greeting.defaultProps = {
    isLogin: false,
    username:  "Guest"
}


export default Greeting