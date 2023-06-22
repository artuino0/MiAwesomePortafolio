import { useEffect } from "react";
import doge from "../assets/doge.png";

const Doge = (props: { setEasterEggClicks: any }) => {
  const { setEasterEggClicks } = props;

  useEffect(() => {
    setTimeout(() => {
      setEasterEggClicks(0);
    }, 3000);
  }, []);

  return (
    <div className="z-10 fixed flex items-center justify-center w-full h-full animate__animated animate__rotateIn">
      <img src={doge} alt="" />
    </div>
  );
};

export default Doge;
