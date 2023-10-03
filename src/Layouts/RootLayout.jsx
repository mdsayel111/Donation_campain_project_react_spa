import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import HomeNav from "../Components/Header/Nav/HomeNav/HomeNav";
import OtherNav from "../Components/Header/Nav/OtherNav/OtherNav";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [copyData,setCopydata] = useState([])
  const [data,setData] = useState([])
  const loaderData = useLoaderData();
  const location = useLocation();
  useEffect(()=>{
    setData(loaderData)
    setCopydata(loaderData)
  },[])
  return (
    <div className="container mx-auto">
      {
        location.pathname === "/" ? <HomeNav prop={[data,copyData,setCopydata]}></HomeNav> : <OtherNav></OtherNav>
      }
      <Outlet context={copyData}></Outlet>
    </div>
  );
};

export default RootLayout;
