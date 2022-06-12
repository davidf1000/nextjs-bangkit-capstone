import { GetStaticProps } from "next";
import { Fragment } from "react";
import Landing from "../components/landing/Landing";
import Heads from "../components/Heads";
// Root Page
// SSG

const Home = () => {
  return (
    <Fragment>
      <Heads />
      <Landing />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});

export default Home;
