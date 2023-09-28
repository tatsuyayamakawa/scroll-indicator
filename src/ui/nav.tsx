import { useEffect, useState } from "react";
import classNames from "classnames";

export const Nav = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    window.scrollY > 1 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div
        className={classNames(
          "bg-white",
          isVisible ? "shadow-md transition-shadow" : "transition-shadow"
        )}
      >
        <div className="container flex items-center justify-between py-10">
          <div className="text-2xl">Logo</div>
          <div className="text-2xl">
            <ul className="flex items-center justify-center gap-10">
              <li>Menu1</li>
              <li>Menu2</li>
              <li>Menu3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
