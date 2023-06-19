import { useGlobalContext } from "../context/appContext";

function Alert() {
    const{alertText, alertType} = useGlobalContext();

  return (
    <div className={`alert alert-${alertType}`}>
        {alertText ? alertText : 'Please provide all required values'}
    </div>
  )
}

export default Alert;