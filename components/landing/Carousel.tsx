import { useState, useRef, useEffect, Fragment } from "react";
import Modal from "./Modal";

const data = {
  resources: [
    {
      title: "Summary Dashboard",
      imagePath: "./images/showcase/website/dashboard-summary.png",
    },
    {
      title: "Voucher Dashboard",
      imagePath: "./images/showcase/website/dashboard-voucher.png",
    },
    {
      title: "Transaction Logs",
      imagePath: "./images/showcase/website/dashboard-logs.png",
    },
    {
      title: "Login",
      imagePath: "./images/showcase/website/login.png",
    },
    {
      title: "Register Account",
      imagePath: "./images/showcase/website/register.png",
    },
    {
      title: "Login screen",
      imagePath: "./images/showcase/android/login.jpg",
    },
    {
      title: "Home screen",
      imagePath: "./images/showcase/android/home.jpg",
    },
    {
      title: "Route Direction",
      imagePath: "./images/showcase/android/route-direction.jpg",
    },
    {
      title: "Travelling and weather forecast",
      imagePath: "./images/showcase/android/Start-travel-and-forecast.jpg",
    },
    {
      title: "Redeem voucher",
      imagePath: "./images/showcase/android/voucher-redeem.jpg",
    },
  ],
};

interface Resource {
  title: string;
  imagePath: string;
}

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [target, setTarget] = useState({
    title: "",
    imagePath: "",
  });
  const carousel = useRef(null);

  const pictureClick = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
    resource: Resource
  ): void => {
    console.log("Click !");
    setTarget({
      ...resource,
    });
    setShowModal(true);
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <Fragment>
      {showModal ? (
        <Modal setShowModal={setShowModal} resource={target} />
      ) : null}
      <div className="carousel my-2 mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {data.resources.map((resource, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => pictureClick(e, resource)}
                  className="carousel-item text-center relative w-80 h-56 snap-start hover:cursor-pointer"
                >
                  <a
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url('${resource.imagePath}')`,
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={resource.imagePath || ""}
                      alt={resource.title}
                      className="w-full aspect-square hidden"
                    />
                  </a>
                  <a className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10">
                    <h3 className="text-white py-6 px-3 mx-auto text-md">
                      {resource.title}
                    </h3>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
