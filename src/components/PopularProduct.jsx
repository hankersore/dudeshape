import './PopularProduct.css';
import Container from './Container';
import Title from './Title';
import Card from './Card';
import arrowIcon from '../assets/arrow-icon.svg'
import productImg1 from '../assets/popular1.png';
import productImg2 from '../assets/popular2.png';

function PopularProduct() {
  const cardData = [
    {
      image: productImg1,
      name: 'Cosmetic products',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: '$120'
    },
    {
      image: productImg2,
      name: 'Cosmetic products',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: '$120'
    }
  ]

  return (
    <section className='popular-product'>
      <Container>
      <Title h1='Our Popular Product' />
      <div className='popular-product__subtitle'>
        <Title p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"/>
        <a href="">Discover Our Products <img src={arrowIcon} alt='arrow icon' /></a>
      </div>
      <div className='popular-product__cards'>
        {cardData.map((product, index) => (<Card image={product.image} name={product.name} info={product.info} price={product.price} key={index} />))}
      </div>
    </Container>
    </section>
  )
}

export default PopularProduct