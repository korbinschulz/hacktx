import React from "react";
import "./Affirmations.css";

const Affirmations = () => {
  const affArray = [
    "I am strong and resilient, just like the structures I build.",
    "My hard work and dedication make a difference on the job site.",
    "I am skilled, capable, and valuable to my team.",
    "Every challenge I face is an opportunity to showcase my expertise.",
    "My commitment to safety ensures everyone goes home unharmed.",
    "I am tough, both mentally and physically, handling tough tasks with ease.",
    "My hands build more than structures; they build dreams and communities.",
    "I find strength in every brick laid and every beam raised.",
    "My determination fuels my progress and success.",
    "I am the backbone of every project I undertake.",
    "I am a problem solver, finding solutions amidst complexity.",
    "My craftsmanship is a reflection of my pride and passion.",
    "I work with precision, ensuring quality in every detail.",
    "My expertise is respected, and my skills are unmatched.",
    "I am a builder of foundations, both in construction and in life.",
    "I embrace challenges, knowing they refine my skills and character.",
    "I approach every task with confidence and skill.",
    "My hands create what others can only imagine.",
    "I am a team player, supporting and relying on my colleagues.",
    "I am the driving force behind progress, shaping the world with my work.",
    "My work ethic sets a standard that inspires others.",
    "I am unyielding, facing challenges head-on and overcoming them.",
    "I take pride in my work, finding fulfillment in every project completed.",
    "I am resilient, bouncing back from setbacks stronger than before.",
    "I am respected, my expertise acknowledged by colleagues and clients alike.",
    "My work makes a lasting impact, shaping the future of communities.",
    "I am a master of my craft, continually honing my skills.",
    "I am the foundation upon which strong, resilient structures are built.",
    "I am a construction worker, and I am unstoppable.",
    "I am a beacon of strength and inspiration on the construction site.",
  ];

  // Function to generate a random subset of 10 affirmation messages
  const getRandomAffirmations = () => {
    const selectedAffirmations = [];
    while (selectedAffirmations.length < 10) {
      const randomIndex = Math.floor(Math.random() * affArray.length);
      const affirmation = affArray[randomIndex];
      if (!selectedAffirmations.includes(affirmation)) {
        selectedAffirmations.push(affirmation);
      }
    }
    return selectedAffirmations;
  };

  const selectedAffirmations = getRandomAffirmations();

  return (
    <div className="affirmations-outer">
      <div className="affirmations-inner">
        <h1 className="affirmations-h1">Daily Affirmations</h1>
        <ul className="affirmations-list">
          {selectedAffirmations.map((affirmation, index) => (
            <li key={index} className="affirmations-item">
              {affirmation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Affirmations;
