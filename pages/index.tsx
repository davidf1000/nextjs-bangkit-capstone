import { GetStaticProps } from 'next'
import { Fragment } from 'react'
import Landing from '../components/landing/Landing';
import Heads from '../components/Heads';
// Root Page 
// SSG 

interface Props {
  value: string;
}

const Home = ({
  value
}:Props) => {
  return (
    <Fragment>
      <Heads />
      <Landing/>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Test Static")
  return {
    props:
    {value:"test"}
  }
}


export default Home;