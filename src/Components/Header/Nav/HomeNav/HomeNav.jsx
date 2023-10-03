import { useRef } from "react";
import OtherNav from "../OtherNav/OtherNav";
import "./HomeNav.css";

const HomeNav = ({ prop }) => {
  const [data,copyData, setCopyData] = prop;
  const input = useRef();
  function handleSearch() {
    const value = input.current.value;
    if (value) {
      const newData = copyData.filter(
        (item) => item.category.toLowerCase() === value.toLowerCase()
      );
      setCopyData(newData)
    }else{
      setCopyData(data)
    }
  }
  return (
    <div>
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3rTRX7S/banner.png)",
          placeItems: "inherit",
        }}
      >
        <OtherNav home={true}></OtherNav>
        <div className="hero-overlay bg-[rgba(253,251,250,0.9)]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[80%]">
            <h1 className="mb-5 text-4xl font-bold text-black mb-8">
              I Grow By Helping People In Need
            </h1>
            <div className="flex items-center justify-center">
              <input
                ref={input}
                type="text"
                placeholder="Search.."
                className="focus:outline-none pl-6 text-black rounded-tl-lg rounded-bl-lg"
              ></input>
              <button
                onClick={handleSearch}
                className="btn bg-primary border-none text-white min-h-[2rem] h-[2rem] rounded-tl-none rounded-bl-none hover:bg-primary"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
