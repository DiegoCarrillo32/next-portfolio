import React, {useRef} from 'react'

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";


import styles from './contact.module.css'
const Contact = () => {
  const form = useRef(null);
  const recaptcha = useRef(null);
  const [Enable, setEnable] = React.useState(true);
  const onChange = (value:any) => {
    
    if(recaptcha?.current?.getValue()){
      setEnable(false);
      console.log("Captcha value:", recaptcha.current.getValue());
      
    } else {
      setEnable(true);
    }


  }
  
  const sendEmail = (e:any) => {
    e.preventDefault();
    if(process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID && process.env.NEXT_PUBLIC_PUBLIC_KEY && form.current) {
      toast.promise(emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY), {
        loading: 'Sending message',
        success: 'Message sent',
        error: 'Could not send message',
      });
      
      
    }
    

    
    

  };
  return (
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <div className={styles['form-input']}>
        <input name='from_name' type={'text'} placeholder="Name"/>
        <input name='last_name' type={'text'} placeholder="Last name"/>
        <input name='user_email' type={'email'} placeholder="Email"/>
        <input name='user_phone'  type={'number'} placeholder="Phone number"/>
        <textarea name="user_message" id="" placeholder='Message'></textarea>
        <button type='submit' disabled={Enable}>Send</button>
        
      </div>
        <ReCAPTCHA
        style={{
          paddingBottom: "20px",
        }}
          ref={recaptcha}
          sitekey={"6LfaftwiAAAAADNBu3x64pV0G0Lyx39pKeuogsLL"}
          onChange={onChange}
        />  
      
    </form>
  )
}

export default Contact