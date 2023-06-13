import { useState, FC, useContext, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import "./Agent.css";
import axios from "axios";
import AgentForm from "../AgentForms/AgentForms";
import context from "../../context/context";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  const [expanded, setExpanded] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(context);
  const [filteredPracticeAreas, setFilteredPracticeAreas] = useState<string[]>([]);
  const [review, setReview] = useState(""); // New state for the review

  useEffect(() => {
    if (Array.isArray(agent.practiceAreas)) {
      const filtered = agent.practiceAreas.filter((practiceArea) =>
        practiceArea.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPracticeAreas(filtered);
    }
  }, [searchQuery, agent.practiceAreas]);

  const shouldRenderAgent = searchQuery === "" || filteredPracticeAreas.includes(agent.practiceArea);

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can perform any additional logic here, like submitting the review to a server
    console.log("Review submitted:", review);
  };

  return shouldRenderAgent ? (
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
        </footer>
      </details>
      <div className="review-section">
        <h3>Leave a Review</h3>
        <form className="formRev" onSubmit={handleReviewSubmit}>
          <textarea value={review} onChange={handleReviewChange} placeholder="Write your review" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Agent;
