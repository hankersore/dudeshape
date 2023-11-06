import './PerfectBeauty.css';
import Title from './Title';
import Button from './Button';
import perfect from '../assets/perfectBeauty.png'
import Container from './Container';

export default function PerfectBeauty () {
    return (
        <Container>
            <div className='perfectBeauty'>
            <div className='perfectContent'>
            <Title h1='The Perfect Beauty Of You' p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <Title p = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            <Button name='Shop Now' backgroundColor= '#402F2C' textColor = '#FFF'/>
        </div>
        <img src={perfect} />
            </div>
        </Container>
    )
}