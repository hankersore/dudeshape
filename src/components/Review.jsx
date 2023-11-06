import './Review.css';
import Container from './Container';
import ReviewCard from './ReviewCard';
import girlImg from '../assets/girl.png';


function Review() {
  const reviewData = [
    {
      image: girlImg,
      title: 'Amazing Product',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      fullName: 'Rusmin Islam',
      job: 'Designer'
    },
  ]

  return (
      <section className='review'>
        <Container>
        {reviewData.map((elem, index) => (<ReviewCard image={elem.image} title={elem.title} comment={elem.comment} fullName={elem.fullName} job={elem.job} key={index} />))}
        </Container>
      </section>
  )
}

export default Review;