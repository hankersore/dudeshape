import './Showcase.css';
import Container from './Container';
import Title from './Title';
import Button from './Button';
import showcase from '../assets/showcase.png';
import showcase2 from '../assets/showcase2.jpeg';
import showcase3 from '../assets/showcase3.jpeg';
import showcase4 from '../assets/showcase4.jpeg';


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
                        <Button name={<i className="fa-solid fa-magnifying-glass"></i>} backgroundColor= '#402F2C' textColor = '#FFF'/>
                    </form>
                    <Button name='Shop Now' backgroundColor= '#402F2C' textColor = '#FFF' className="btn2"/>
              </Container>
               </div>
               <img src={showcase} alt="" />
        </div>
    )
} 

// import React, { useState, useEffect } from "react";

// const Showcase = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//             '../assets/showcase.png',
//             '../assets/showcase2.jpeg',
//             '../assets/showcase3.jpeg',
//             '../assets/showcase4.jpeg',
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [images.length]);

//   return (
//       <div className="image-slider">
//       {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index}`}
//             style={{ display: index === currentIndex ? "block" : "none" }}
//           />
//         ))}
//       </div>
//   );
// };

// export default Showcase;
