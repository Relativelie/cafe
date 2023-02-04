import clsx from "clsx";
import { useEffect, useState } from "react";
import ScrollUp from "assets/png/scroll-up.png";

const ToUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideFrom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          className={clsx("flex flex-col items-center cursor-pointer")}
          onClick={onClick}
        >
          <img src={ScrollUp} alt="scroll up" className="w-10 h-10" />
          <h5 className="uppercase font-bold text-green-600">Up</h5>
        </div>
      )}
    </div>
  );
};

export default ToUpButton;
