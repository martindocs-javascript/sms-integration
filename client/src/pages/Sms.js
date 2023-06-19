import { useState } from 'react';
import { useGlobalContext } from '../context/appContext';
import {
  Alert,
  PhoneNumberPicker,
} from '../components';

const Sms = () => {
  const {
    isLoading,
    displayAlert,
    showAlert,
    sendMessage,
  } = useGlobalContext();
  
  const[phone, setPhone] = useState('');
  const[textMsg, setTextMsg] = useState('');

  const clearValues = () => {
    setPhone('');
    setTextMsg('');
  }

  const handleSMSend = () => {

    if(!phone || !textMsg){
      displayAlert();
      return;
    }   
    
    sendMessage({phone, textMsg});
    clearValues();
  }
  
  return (
    <section className="sms">
      {showAlert && <Alert />} 
      <div className="sms__container"> 
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label 
            htmlFor="textMsg"
            className='form__label'
          >Phone Number</label>
          <PhoneNumberPicker 
            phone={phone}
            setPhone={setPhone}
          />          
    
          <label 
            htmlFor="textMsg"
            className='form__label'
          >Message</label>
          <textarea 
            name="textMsg" 
            id="textMsg" 
            cols="30" 
            rows="10"
            className='form__textarea'
            value={textMsg}
            onChange={(e) => setTextMsg(e.target.value)}
          ></textarea>

          <div className='button'>
            <button
              className='button__submit'
              onClick={handleSMSend}
              disabled={isLoading}
            >Submit</button>
            <button
              className='button__clear'
              onClick={clearValues}
            >Clear</button>
          </div>
        </form>        
      </div>
    </section>
  )
}

export default Sms;