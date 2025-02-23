import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🍃🥗GreenCooking🥗🍃</h1>
      
      <div className="row">
        <div className="col-md-6">
          <img src="\Submit-Your-Recipes-to-30Seconds-How-to-Share-Your-Favorit-21089-4faef85b07-1616429902.jpg" alt="About Us" className="img-fluid rounded shadow-lg" />
        </div>

        <div className="col-md-6">
          <p className="lead">
            Welcome to <strong>🍃🥗GreenCooking🥗🍃</strong>, your ultimate destination for sharing and discovering amazing recipes! 
            Whether you are a home cook or a professional chef, our platform connects food lovers worldwide.
          </p>
          <p>
            "Our mission is to build a community-driven recipe hub where users can share, save, and explore delicious meals. 
            From traditional classics to modern fusion, we believe that cooking should be fun, easy, and accessible to all".
          </p>
          <h4>Why Choose Us?</h4>
          <ul>
            <li>📌 <strong>Easy Recipe Sharing</strong> – Upload and share your favorite recipes.</li>
            <li>💾 <strong>Save Recipes</strong> – Keep track of the recipes you love.</li>
            <li>🌎 <strong>Global Community</strong> – Connect with food enthusiasts from around the world.</li>
            <li>🍽️ <strong>Step-by-Step Guides</strong> – Watch videos and follow easy instructions.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3>Join Us on Our Culinary Journey!</h3>
        <p>Start sharing your recipes and exploring new flavors today.</p>
        <a href="/register" className="btn btn-success">Join Now</a>
      </div>
    </div>
  );
};

export default About;
