import React, { useState, useEffect, useRef } from "react";
import LogoShort from "../assets/N.png";
import LogoLong from "../assets/ecleo.png";
import Logo from "../assets/Logo";

const Sidebar = ({ activeState, setActiveState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(Math.random());

  const [mouseOver, setMouseOver] = useState("");

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setKey(Math.random());
  }, [isOpen]);

  return (
    <div
      className="h-full z-40 fixed w-fit left-0 top-0 flex justify-center items-center p-3 bg-white transition-all duration-300 border-r-[1px] border-secondary-500 border-opacity-60"
      ref={sidebarRef}
    >
      <div
        className={`${
          isOpen ? "w-48" : "w-8"
        } transition-all duration-300 flex flex-col justify-between items-center h-full`}
      >
        <div className="h-full w-full flex flex-col gap-2">
          <div className="h-16 w-full flex items-center justify-center">
            <img
              src={LogoShort}
              alt="Logo"
              className="h-fit w-fit scale-90 animate-fade-up animate-once"
            />
            {isOpen && (
              <img
                key={key}
                src={LogoLong}
                alt="Logo"
                className="h-fit w-fit scale-90 animate-fade animate-once animate-duration-[0.5s] animate-delay-[0.25s]"
              />
            )}
          </div>
          <div className="h-[0.75px] bg-secondary-500 w-full scale-90 animate-fade-up animate-once" />
          <div className="flex flex-col gap-2 my-4 font-medium">
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "home" || activeState === "home"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("home")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("home");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "home" || activeState === "home"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="home"
                  />
                </div>
                <span
                  key={key + 1}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  Home
                </span>
              </div>
            </div>
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "dashboard" || activeState === "dashboard"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("dashboard")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("dashboard");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "dashboard" || activeState === "dashboard"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="dashboard"
                  />
                </div>
                <span
                  key={key + 2}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  Dashboard
                </span>
              </div>
            </div>
          </div>
          <div className="h-[0.75px] bg-secondary-500 w-full scale-90 animate-fade-up animate-once" />
          <div className="flex flex-col gap-2 my-4 font-medium">
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "summary" || activeState === "summary"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("summary")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("summary");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "summary" || activeState === "summary"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="summary"
                  />
                </div>
                <span
                  key={key + 3}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  Summary
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <div
            className={`flex ${
              !isOpen ? "justify-center" : "justify-start"
            } items-center p-2 h-10 ${
              mouseOver === "collapse" ? "text-black" : "text-secondary-500"
            } rounded-lg group cursor-pointer`}
            onMouseOver={() => setMouseOver("collapse")}
            onMouseLeave={() => setMouseOver("")}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="animate-fade-up animate-once">
              <Logo
                color={mouseOver === "collapse" ? "black" : "secondary-500"}
                width="24"
                height="24"
                type="collapse"
              />
            </div>
            <span
              key={key + 7}
              className={`ms-3 ${
                !isOpen && "hidden"
              } animate-fade-right animate-once`}
            >
              Collapse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
