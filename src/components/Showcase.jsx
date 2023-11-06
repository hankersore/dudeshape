import './Showcase.css';
import Container from './Container';
import Title from './Title';
import Button from './Button';
import showcase from '../assets/showcase.png';

export default function Showcase () {
    const slides = [
        {url: '../assets/showcase.png'},
        {url: '../assets/showcase2.png'},
        {url: '../assets/showcase3.png'},
        {url: '../assets/showcase4.png'},
    ]
    return (
        <div className='showcase'> 
               <div className='showcaseText'>
              <Container>
              <Title h1='Get Your Best Cosmetic Products Here' p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"/>
                <form className='form'>
                        <input className='search2' type="email" placeholder='Search...'/>
                        <Button name={<i class="fa-solid fa-magnifying-glass"></i>} backgroundColor= '#402F2C' textColor = '#FFF'/>
                    </form>
                    <Button name='Shop Now' backgroundColor= '#402F2C' textColor = '#FFF' className="btn2"/>
              </Container>
               </div>
               <img src={showcase} alt="" />
        </div>
    )
}