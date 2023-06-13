import { useState, FC, useContext, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import "./Agent.css";
import axios from "axios";
import AgentForm from "../AgentForms/AgentForms";
import context from "../../context/context";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
 
  const { searchQuery, setSearchQuery } = useContext(context);
  const [filteredPracticeAreas, setFilteredPracticeAreas] = useState<string[]>([]);
  const [review, setReview] = useState(""); 

// const filtering = agent.practiceAreas;
// console.log(filtering)
// const incl = filtering.includes(searchQuery);
// console.log(incl)
  
let filtered2 =    agent.practiceAreas.includes(searchQuery)
 
 console.log(filtered2);
  useEffect(() => {

  }, [searchQuery, agent.practiceAreas, agent.review]);

  const shouldRenderAgent = searchQuery === "" || filteredPracticeAreas.includes(agent.practiceArea);

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    try {
      const response = await axios.put(`/agents/${agent.id}`, { review });
      console.log(response.data);
   
      setReview("");
    } catch (error) {
      console.error(error);
    }
  };
console.log(agent)
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
  ) : null;
};

export default Agent;
