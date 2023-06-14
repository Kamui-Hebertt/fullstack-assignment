import { useState, FC, useContext, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import "./Agent.css";
import axios from "axios";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
 
  const [review, setReview] = useState("");

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    try {
      const response = await axios.put(`/agents/${agent.id}`, { review });  
      setReview("");
    } catch (error) {
      console.error(error);
    }
  };
  return (    
    <div className="container">
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <details>
        <summary className="summary">Details</summary>
        <div className="body">{agent.aboutMe}</div>
        <footer>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">
              <span>{agent.address}</span>
            </div>
            <div className="one-third-flex-box">
              <span>Areas of Practice: {agent.practiceAreas}</span>
            </div>
          </div>
          <div>
            <h4>Reviews</h4>
            <div>{agent.review}</div>
          </div>
        </footer>
      </details>
      <div className="review-section">
        <h3>Leave a Review</h3>
        <form className="formRev" onSubmit={handleReviewSubmit}>
          <textarea className="text" value={review} onChange={handleReviewChange} placeholder="Write your review" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Agent;
