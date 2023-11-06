import './ReviewCard.css';
import fullStar from '../assets/full-star.svg';
import halfStar from '../assets/half-star.svg';


function ReviewCard(props) {
  const {image, title, comment, fullName, job} = props
  return (
    <div className='review-card'>
      <figure className='review__img'>
        <img src={image} alt="girl image" />
      </figure>
      <div className='review__info'>
        <div className='review__title'>
          <h3 className='review__main-text'>{title}</h3>
          <div className='stars'>
            <img src={fullStar} alt="star icon" />
            <img src={fullStar} alt="star icon" />
            <img src={fullStar} alt="star icon" />
            <img src={fullStar} alt="star icon" />
            <img src={halfStar} alt="star icon" />
          </div>
        </div>
        <p className='review__text'><i className="fa-solid fa-quote-left quote"></i>{comment}<i className="fa-solid fa-quote-right quote"></i></p>
        <div className='review__customer'>
          <p className='review__main-text'>{fullName}</p>
          <p className='review__text'>{job}</p>
          <div className='angles'>
            <i className="fa-solid fa-angle-left angle"></i>
            <i className="fa-solid fa-angle-right angle"></i>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ReviewCard;