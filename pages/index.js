import axios from 'axios'
import SignList from '../components/signs/SignList'
import { useState, useEffect } from 'react';
import Popup from '../components/layout/Popup'


function Home(props) {
    const [timePopup, setTimePopup] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setTimePopup(true);
    }, 3000);
}, []);

    return(
        <main>
        <div>
            <div className="WelcomeText">Choose Your Zodiac Sign</div>
            <SignList loadedSigns={props.signs}  />

        </div>
        <Popup trigger={timePopup} setTrigger={setTimePopup}>

        </Popup>
        </main>
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