import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookWander</h2>
            <p className='fs-17'>At BookWnder we're passionate about connecting readers with the books they'll love. Our mission is to make the search for the perfect book an enjoyable and effortless experience. Whether you're an avid reader or just looking for your next literary adventure, we've got you covered.

Our user-friendly platform offers a vast database of books from various genres, allowing you to explore, discover, and find your next must-read. We believe that every book has its reader, and our goal is to be your personal guide in this exciting journey through the world of literature.

With powerful search tools, personalized recommendations, and a community of fellow book enthusiasts, we're more than just a book search engine. We're your partner in unlocking the magic of storytelling.

Join us today and embark on a journey through the world of books, one page at a time. Happy reading!

Feel free to modify this text to better reflect your unique mission and the features of your website. Be sure to convey your passion for books and your commitment to helping users discover their next great read.





</p>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
