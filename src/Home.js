import React from "react";

const Home = () => {
  const showHobbies = () => {
    alert("My hobbies: Coding, Gaming, Watching Anime.");
  };

  return (
    <section id="home" className="container text-center my-5">
      <img
        src="pogingpogi.jpg"
        alt="Profile"
        className="profile-img rounded-circle mb-4"
      />
      <h1>Welcome to My CV</h1>
      <p>
        Hi, I'm James Ivan, a 3rd year student passionate about Information
        Technology.
      </p>
      <button className="btn btn-primary" onClick={showHobbies}>
        Show My Hobbies
      </button>
    </section>
  );
};

export default Home;
