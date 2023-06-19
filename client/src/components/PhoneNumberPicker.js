import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const PhoneNumberPicker = ({phone, setPhone}) => {
  
  return (
    <PhoneInput 
        defaultCountry={"GB"}
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
    />
  )
}

export default PhoneNumberPicker;