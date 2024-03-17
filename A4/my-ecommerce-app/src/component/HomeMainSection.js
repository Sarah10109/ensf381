import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import reviews from "../data/reviews"; // Adjust the path as needed

function HomeMainSection() {
  const [randomReviews, setRandomReviews] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Function to get 2 random reviews
    const getRandomReviews = () => {
      const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
      return shuffledReviews.slice(0, 2);
    };

    setRandomReviews(getRandomReviews());
  }, []); // Empty dependency array to run only once when the component mounts
  const sectionStyle = {
    padding: "5px", // Adjust padding as needed
  };

  const handleShopNowClick = () => {
    navigate("/Productpage"); // Navigate to the Product Page
  };

  return (
    <div style={sectionStyle}>
      <section>
        <h2>About Us</h2>
        <p>
          Welcome to our online store! We are passionate about providing
          high-quality products and exceptional customer service. Learn more
          about our story and commitment to your satisfaction.
        </p>
        <button onClick={handleShopNowClick}>Shop Now</button>{" "}
        {/* Set onClick handler */}
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{"★".repeat(review.stars)}</p>{" "}
            {/* Display stars based on the rating */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomeMainSection;
