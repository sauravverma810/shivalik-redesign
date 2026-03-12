import React from "react";
import "../css/chairman.css";
import chairmanImg from "../assets/chairman.jpg"; 

function Chairman() {
  return (
    <section className="chairman-section">
      
      <div className="chairman-image">
        <img src={chairmanImg} alt="Chairman" />
      </div>

      <div className="chairman-content">
        <h2>Mr. Sunil Kumar Chairman</h2>
        <h4 className="designation">
          Chairman, Shivalik College of Engineering
        </h4>

        <p>
          Shivalik College was established with an aim to promote holistic education and a
           cultural upliftment from all perspectives to fulfill the founding vision and the mission 
           that we have set for ourselves.
          We have accomplished remarkable results with our academic standards of excellence,
          holistic development of students, consolidated with a strong sense of discipline. 
          Our bounden obligation is to provide the best academic experience to our students 
          which comes from our conviction that education is the key to the world’s problems 
          and advancement.
        </p>

        <p>
          You, our dear students, are going to walk over this bridge called college 
          education, which will be the defining years in your lives. 
          It’s entirely dependent upon you to make the fullest use of these
          years to ensure that the end of your journey with us is the start of a
          rewarding phase of your life full of satisfaction, joy and success.
        </p>

        <p>
          As the Chairman of the organization, I expect the collaboration and 
          participation of my faculty, management and the students and even their
          parents, to transform the envisioned success of the promising youngsters
          into reality. I guarantee to provide my total assistance to whoever requires
          it to fulfill our Vision.
        </p>
      </div>

    </section>
  );
}

export default Chairman;
