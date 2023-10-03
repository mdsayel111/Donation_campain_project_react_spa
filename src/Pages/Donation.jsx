import { useOutletContext } from "react-router-dom";
import DonationCard from "../Components/DonationCard/DonationCard";
import { getItemsFromLocale } from "../utilities/Utilities";
import { useState } from "react";

const Donation = () => {
  const donations = getItemsFromLocale();
  const data = useOutletContext();
  const [showableData,setShowableData] = useState(donations ? JSON.parse(donations).length > 4 ? 4 : JSON.parse(donations).length : "")
  function handleShowAll(){
    setShowableData(JSON.parse(donations).length)
    
  }
  return (
    <>
      <div
        className={
          donations
            ? "grid grid-cols-1 lg:grid-cols-2 gap-8"
            : "flex h-[70vh] items-center justify-center text-3xl"
        }
      >
        {donations ? data
        .filter((item) => donations.includes(item.id)).slice(0,showableData)
        .map((item) => (
          <DonationCard key={item.id} item={item}></DonationCard>
        )) : (
          <p className="">No Donations</p>
        )}
      </div>
      {donations ? JSON.parse(donations).length > 4 ? showableData != JSON.parse(donations).length?<button className="btn bg-[#009444] block mx-auto mt-6" onClick={handleShowAll}>Show All</button> :"" : "" : ""}
    </>
  );
};

export default Donation;
