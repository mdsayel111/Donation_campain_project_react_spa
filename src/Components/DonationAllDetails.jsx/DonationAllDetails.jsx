import React from "react";
import setItemInLocale from "../../utilities/Utilities";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'


const DonationAllDetails = ({singleDatadata}) => {
    const {img, price, color, title, description, id} = singleDatadata
    function handleDonateOnclick(id){
        if(setItemInLocale(id)){
            Swal.fire({
                title: 'success',
                text: 'Thank You For Your Donation',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }else{
            Swal.fire({
                title: 'error',
                text: 'You Already Donate In This Section',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
  return (
    <div className="space-y-8">
      <div
        className="hero min-h-[70vh] relative"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute h-[25%] bottom-0 flex items-center">
            <button className="btn ml-4" style={{backgroundColor: `${color}`, color: "white"}} onClick={() => handleDonateOnclick(id)}>Donate ${price.toFixed(2)}</button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-[#545454]">{description}</p>
    </div>
  );
};

export default DonationAllDetails;
