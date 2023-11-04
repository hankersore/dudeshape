import './Navbar.css'
import Container from './Container';

export default function Navbar () {
    return (
        <header>
            <Container>
                <nav>
                    <div className='logo'>Dudeshape</div>
                    <ul className='menu'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className='icons'>
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </Container>
        </header>
    )
}