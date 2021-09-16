import './register.scss'
import ReCAPTCHA from 'react-google-recaptcha';


const Register = () => {
    function onChange(value) {
        console.log('Captcha value:', value);
      }
      
    return ( 
        <div className='register'>
            <div className="register-form">
                <div className="register-title">
                    <h1>Welcome !</h1>
                    <h4>Please help us fill in your basic information</h4>
                </div>
                <div className="register-input">
                    <input type="text" placeholder='Name'className='input-left'/>
                    <input type="text" placeholder='Last name' className='input-right'/>
                </div>
                <div className="register-input">
                    <input type="text" placeholder='Date xx/xx/xxxx' className='input-left'/>
                    <select name="Country" className='select input-right'>
                        <option selected className='selected'>Country</option>
                            <option value="">Indonesia</option>
                            <option value="">India</option>
                            <option value="">China</option>
                            <option value="">France</option>
                    </select>
                </div>
                <div className="register-input">
                    <select name="State" className='select input-left'>
                        <option selected className='selected'>State</option>
                            <option value="">Jakarta</option>
                            <option value="">Mumbai</option>
                            <option value="">Bekin</option>
                            <option value="">Prais</option>                     
                    </select>
                    <select name="Situation" id="" className='select input-right'>
                        <option selected className='selected'>Situation</option>
                            <option value="">Students</option>
                            <option value="">xxxxx</option> 
                            <option value="">xxxxx</option>                       
                    </select>
                </div>
                <div className="register-input">
                    <select name="Grade" className='select input-left'>
                        <option selected className='selected'>Choose Your Grade</option>
                            <option value="">xxxx</option>                     
                    </select>
                </div>
                <div className="register-submit">
                    <input type="checkbox" />
                    <p>I have read and agree with the terms and conditions as 
                        well as the Privasy Policy of Fuelup Eductaion
                    </p>
                </div>
                <div className="iamnotrobot">
                    <ReCAPTCHA
                        sitekey="6LfEIG0cAAAAABm_LKrl2lhSXdW6Y8u6DkoKLz28"
                        onChange={onChange}
                    />
                </div>
                <div className="register-btn">
                    <button>Continue</button>
                </div>
            </div>
        </div>
     );
}
 
export default Register;