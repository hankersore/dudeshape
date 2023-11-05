import './Sponsors.css';
import Container from './Container';
import Airbnb from '../assets/Airbnb Logo.png';
import Hubspot from '../assets/Hubspot Logo.png';
import Google from '../assets/Google Logo.png';
import Microsoft from '../assets/Microsoft Logo.png';
import Walmart from '../assets/Walmart Logo.png';
import Fedex from '../assets/FedEx Logo.png';


function Sponsors() {
  const sponsorsLogos = [Airbnb, Hubspot, Google, Microsoft, Walmart, Fedex]
  return (
    <Container>
      <div className='sponsors'>
      {sponsorsLogos.map((logo, index) => <img src={logo} key={index} />)}
      </div>
    </Container>
  )
}

export default Sponsors

