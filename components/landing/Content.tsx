import { Fragment } from "react";
import Carousel from "./Carousel";
import FeatureCard from "./FeatureCard";
import TeamProfile from "./TeamProfile";

const Content = (): JSX.Element => (
  <Fragment>
    <main>
      <div
        id="home"
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591843012436-16ae52c1abf1')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-40 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Start your eco-friendly journey today !
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Contribute on saving the earth by becoming our business
                  partner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section id="aboutus" className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {features.map((feature) => (
              <FeatureCard {...feature} />
            ))}
          </div>

          <div className="flex flex-wrap items-center mt-10">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
              <h3 className="text-4xl text-center mb-2 font-semibold leading-normal">
                About Us
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Eco-Trans is an application that can calculate how much carbon
                emissions are saved on your trip. Your accumulated saved carbon
                emission will be converted to coin and later can be exchanged to
                various interesting vouchers. Eco-trans also delivers
                forecasting weather related such as temperature, UV-Radiation
                and AQI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative py-5">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section id="ourteam" className="py-5 pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Meet our teams</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600"></p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <TeamProfile
              name="David Fauzi"
              role="Cloud Computing"
              picture="./images/team/david.png"
            />
            <TeamProfile
              name="Irvan Sitanggang"
              role="Cloud Computing"
              picture="./images/team/irvan.png"
            />
            <TeamProfile
              name="Steven Santoso"
              role="Mobile Development"
              picture="./images/team/steven.png"
            />
            <TeamProfile
              name="Owenn Gimli"
              role="Machine Learning"
              picture="./images/team/owen.png"
            />
            <TeamProfile
              name="Kevin Adrian"
              role="Machine Learning"
              picture="./images/team/kevin.png"
            />
            <TeamProfile
              name="Alzana Armaniar"
              role="Machine Learning"
              picture="./images/team/alzana.png"
            />
          </div>
        </div>
      </section>

      <section id="showcase" className="relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 pb-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full xl:w-8/12 px-4">
              <h2 className="text-4xl mt-4 font-semibold text-white">
                Product Showcase
              </h2>
              <p className="text-lg leading-relaxed my-4 mb-4 text-gray-400">
                Product consists of an android application intended for user to
                access our core features and a web application intended for
                company to become our partner by providing voucher to be
                redeemed by user.
              </p>
            </div>
          </div>
          <Carousel data={data} />
        </div>
      </section>
    </main>
  </Fragment>
);

export default Content;

const features = [
  {
    icon: "route",
    title: "Route Recommendation",
    desc: "Giving route recommendation for user based on travelling time and carbon emission saved.",
  },
  {
    icon: "reward",
    title: "Reward System",
    desc: "EcoTrans rewards you with points for every carbon saved that can be redeemed for various vouchers..",
  },
  {
    icon: "weather",
    title: "Weather Forecast",
    desc: "EcoTrans also provide you with weather forecast information such as UV, AQI, and temperature.",
  },
];

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
