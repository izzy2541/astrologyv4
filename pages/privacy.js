import Link from 'next/link';


function Privacy() {
    return(
        <div className="AboutPage">
            <div className="pageTitle">
                Privacy
            </div>
            <div className = "smallText">
                <p> At Astrology.Com we adhere to the privacy principles outlined in The Privacy Act. To find out more,
                    please click <link rel="noopener" target="_blank" href= "https://www.oaic.gov.au/privacy/australian-privacy-principles"><u>here.</u></link></p>
            </div>        
        </div>
    
    );
  
}

export default Privacy;