import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";
import styles from './contact.module.css'
const Contact = () => {
  const form = useRef(null);
  const recaptcha = useRef<any>(null);
  const [Enable, setEnable] = useState(true);
  const onChange = () => {
    
    if(recaptcha?.current?.getValue()){
      setEnable(false);
      console.log("Captcha value:", recaptcha.current.getValue());

      
    } else {
      setEnable(true);
    }


  }
  
  const sendEmail = (e:any) => {
    e.preventDefault();
    if(e.target?.from_name?.value === "" || e.target?.last_name?.value === "" 
    || e.target?.user_email?.value === ""|| e.target?.user_phone?.value === "" 
    || e.target?.user_message?.value === "") {
      toast.error("Please fill all the fields");
      return;
    }
    if(process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID && process.env.NEXT_PUBLIC_PUBLIC_KEY && form.current) {
      toast.promise(emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY), {
        loading: 'Sending message',
        success: 'Message sent',
        error: 'Could not send message',
      });
      setEnable(true);
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
        <button type='submit' disabled={Enable}  >Send</button>   
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