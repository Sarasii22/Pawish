import React from "react";
import "./Testimonials.css"; // Assuming you have a CSS file for styling
import Slider from "react-slick";
import people1 from "../../assets/1.jpg";
import people2 from "../../assets/1.jpg";
import people3 from "../../assets/1.jpg";
import people4 from "../../assets/1.jpg";
import people5 from "../../assets/1.jpg";
import people6 from "../../assets/1.jpg";
import people7 from "../../assets/1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px", // No padding on edges, we’ll use CSS for gaps
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial">
      <div className="testimonial-title">
        
        <h2>What People Say ?</h2>
      </div>
      <Slider {...settings}>
        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people1} alt="Anna Martinez" />
            <div className="testimonial-card-top-text">
              <h4>Anna Martinez</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            This is Wilson (formerly known as McDuff). I adopted him from Pawish in March of 2013. He was 5 months old. Only a few weeks after adopting him, he became very sick and Pawish offered to take care of him and do whatever they could to get him better. We went to visit him every weekend. He finally recovered and was able to come back home in May. He is the best dog ever! All 80 pounds of him. He is a gentle giant. Thank you, Pawish!
          </p>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people2} alt="John Doe" />
            <div className="testimonial-card-top-text">
              <h4>John Doe</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            Here is Boomer! We got him January of 2018, and he’s been such a blessing. He was in need of a lot of love and attention, and in turn he has given us so much love! We adore him, and he’s our son’s best buddy! Thank you, Pawish! What a blessing he is! He looked right at us when we walked in, I like to think he picked us.
          </p>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people3} alt="Emma Thompson" />
            <div className="testimonial-card-top-text">
              <h4>Emma Thompson</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            It’s been 3 years since adopting the love of my life, Benz (formerly named Jeffrey). This handsome momma’s boy goes with me absolutely everywhere, and everyone who knows him can attest that he’s the most spoiled cat around! He has converted more “cat-haters” than any cat I know and is always the life of the party and light of my life. Thank you for all you do and for giving me so much joy.
          </p>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people4} alt="Jane Smith" />
            <div className="testimonial-card-top-text">
              <h4>Jane Smith</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            A couple years ago, we adopted our dog Winston from Pawish. He’s come a long way since then. He was very shy and scared at first, and he still is anxious at times. However, he has grown to trust my husband and me, and he is fairly receptive to strangers now. The biggest change is that he is a big cuddle bug now. He’s one of the sweetest boys I’ve ever met, and I’m so grateful that Pawish rescued him.
          </p>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people5} alt="Priya Sharma" />
            <div className="testimonial-card-top-text">
              <h4>Priya Sharma</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            We adopted Plissken and Trudy in January and July 2018, respectively, and thought we’d share some updates of these little rascals who bring so much joy to our lives. Trudy just celebrated her 5th birthday and we have a new addition to the family – Luna-Belle the cat. Our family is so blessed, and we are so grateful to Pawish and all you do!
          </p>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people6} alt="Rajiv Patel" />
            <div className="testimonial-card-top-text">
              <h4>Rajiv Patel</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            We wanted to give everyone an update on Blackberry’s adjustment to being in a home. It was QUICK and EASY! She is my little sunshine. She makes our lives three times better and she really is the sweetest thing on earth. Whether it’s play time at home or at the park, Blackberry is right there running and chasing all.
          </p>
        </div>

        <div className="testimonial-card">
            <div className="testimonial-card-top">
            <img src={people7} alt="Sofia Russo" />
            <div className="testimonial-card-top-text">
              <h4>Sofia Russo</h4>
              <p>Pet Parent</p>
            </div>
          </div>
          <p>
            We adopted Nigel to give our dog, Nugget, a new little brother after two of our oldest dogs passed away. He has been a fantastic addition to our family. Thank you, Pawish!
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
