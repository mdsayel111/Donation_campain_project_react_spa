import React from 'react';
import DonationAllDetails from '../Components/DonationAllDetails.jsx/DonationAllDetails';
import { useParams, useOutletContext } from 'react-router-dom';

const DonationDetails = () => {
    const {id} = useParams();
    const data = useOutletContext();
    const singleData = data.find((item)=> item.id == id)
    return (
        <div>
            <DonationAllDetails singleDatadata={singleData}></DonationAllDetails>
        </div>
    );
};

export default DonationDetails;