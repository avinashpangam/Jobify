import { useAppContext } from "../context/appContext"
const Alert = () => {
     const {alertText,alertType}=useAppContext();
    return <div className='alert alert-danger'>{`alert alert-${alertType}`}</div>
  }
  
  export default Alert