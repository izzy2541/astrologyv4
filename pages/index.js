import axios from 'axios'
import SignList from '../components/signs/SignList'
import { useState, useEffect } from 'react';
import Popup from '../components/layout/Popup'
import { Fragment } from 'react';
import Head from "next/head";


function Home(props) {
    const [timePopup, setTimePopup] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setTimePopup(true);
    }, 3000);
}, []);

    return(
        <Fragment>
            <Head>
                <title> Astrology.Com</title>
                <meta
                    name="description"
                    description="find out more about your zodiac sign"
                />

            </Head>
                <main>
                    <div>
                        <div className="WelcomeText">Choose Your Zodiac Sign</div>
                        <SignList loadedSigns={props.signs}  />

                    </div>
                    <Popup trigger={timePopup} setTrigger={setTimePopup}>

                    </Popup>
                </main>
        </Fragment>
    );
}

export const getStaticProps = async () => {
    const response = await axios.get(`${process.env.SERVER_NAME}/signs`)
    const data = await response.data;

    return{
        props: {
            signs: data
        },
    };
}

export default Home;