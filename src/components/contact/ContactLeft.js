import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaMailchimp, FaMailBulk, FaPhone, FaAddressCard} from "react-icons/fa";
import {BsMailbox, BsMailbox2} from "react-icons/bs";
import { contactImg } from "../../assets/index";
import Card from "../features/Card";
import CardContact from "./CardContact";

const ContactLeft = () => {
  return (
    <div
        className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Anshul Shivhare</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer | Java Developer | Experienced Coder
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <CardContact
              title="Email"
              des="anshul.techdev@gmail.com, as4432@njit.edu"
              icon={<FaMailBulk/>}
          />
          <CardContact
              title="Phone"
              des="+1 551 365 9588"
              icon={<FaPhone />}
          />
          <CardContact
              title="Address"
              des="Harrison, New Jersey, USA"
              icon={<FaAddressCard />}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactLeft