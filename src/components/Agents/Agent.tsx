import { useState, FC, useContext } from "react";
import { IAgent } from "../../types/Agent";

import "./Agent.css";
import axios from "axios";
import AgentForm from "../AgentForms/AgentForms";
import context from "../../context/context";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  const [expanded, setExpanded] = useState(false);

  const { searchQuery, setSearchQuery } = useContext(context);

  // const filtering:string[] = agent.map((e: { practiceAreas: string; })=> e)
  // console.log(filtering);
  // console.log(agent)
  // let filtered: string[] = agent.practiceAreas.filter(
  //   (e) => {
  //     console.log(searchQuery)
  //     return e.includes(searchQuery);
  //   }
  // );

 
    // console.log(filtered)
  console.log(agent.photoUrl);
  return (

      
      <div className="container">
          <header>
            <div className="avatar-holder">
              <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
            </div>
            <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
          </header>
          <details>
          <summary>Details</summary>
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
        </div>
  );

  }
export default Agent;