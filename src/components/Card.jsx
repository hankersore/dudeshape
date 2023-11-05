import './Card.css';
import Title from './Title';
import Button from './Button';


function Card(props) {
  const {image, name, info, price} = props
  return (
    <div className='card'>
      <figure className='card__img'>
        <img src={image} alt="product image" />
      </figure>
      <div className='card__info'>
        <Title h1={name} p={info} fontSize='40px' />
        <div className='card__container'>
          <div className='card__btns'>
          <Button name='buy now' backgroundColor='#402F2C' textColor='#FFF' />
          <Button name='add to card' backgroundColor='#FFF' textColor='#402F2C' />
          </div>
          <p className='price'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card