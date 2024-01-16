import React,{useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="">
        <Title title="CONTACT" des="Contact Information" />
      </div>

      <div className="w-full">
          <ContactLeft />
        </div>
    </section>
  );
}

export default Contact