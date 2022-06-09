import SignDetails from "../../components/signs/SignDetails";
import axios from "axios";
import Head from 'next/head';
import { Fragment } from 'react';

function SignsDetails({ signItem }) {
  return (
    <Fragment>
             <Head>
                <title> Astrology.Com</title>
                <meta
                    name="description"
                    description="find out more about your zodiac sign"
                />

            </Head>
    <SignDetails
    image={signItem.image}
      title={signItem.title}
      description={signItem.description}
      dates={signItem.date}
      element={signItem.element}
      />
      </Fragment>
  );
}

export const getStaticPaths = async () => {
  const response = await axios.get(`${process.env.SERVER_NAME}/signs`);
  // const response = await fetch(`${SERVER_NAME}/signs`);
  const loadedSigns = await response.data

  const paths = loadedSigns.map((signs) => ({
    params: { signTitle: signs.title.toString() }
  }))

  return {
      paths,
      fallback: false
  }
}

export const getStaticProps = async ( {params} ) => {
  // Fetch Data for Single News Item 
  const response = await axios.get(`${process.env.SERVER_NAME}/signs`);
  const loadedSigns = await response.data
  
  const signList = loadedSigns.filter((signs) => signs.title.toString() === params.signTitle )

  return {
    props: {
      signItem: signList[0]
    },
  };
};

export default SignsDetails;

