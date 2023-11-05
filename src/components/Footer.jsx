import './Footer.css';
import Container from './Container';
import Title from './Title';
import Button from './Button';


export default function Footer () {
    return (
        <footer>
            <Container>
                <div className='news'>
                    <Title h1='Subscribe to Get Our Letest News' fontSize='36px'/>
                    <form>
                        <input className='search' type="email" placeholder='Enter email'/>
                        <Button name='Subscribe' backgroundColor= '#402F2C' textColor = '#FFF'/>
                    </form>
                </div>
                <div className='links'>
                    <div className='first'>
                    <div className='logo'>Dudeshape</div>
                    <Title p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"/>
                    </div>
                    <ul>
                        <Title h1='Quick Link' fontSize='20px'/>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <ul>
                        <Title h1='Contact Us' fontSize='20px'/>
                        <li><a href="#">oyasimnaeem@email.com</a></li>
                        <li><a href="#">+123456789</a></li>
                        <li className='icons'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}