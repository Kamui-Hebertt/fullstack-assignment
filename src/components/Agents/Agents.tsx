import { FC } from "react";
import { useState, useEffect, useContext } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import "./Agents.css";
import context from "../../context/context";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const { searchQuery } = useContext(context);

  console.log(searchQuery);

  useEffect(() => {
    const fetchAgents = async (query: string) => {
      try {
        const response = await axios.get("/agents", {
          params: {
            practiceAreas: query,
          },
        });

        setAgents(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchAgents(searchQuery);
  }, [searchQuery]);

  return (
    <div className="agents">
      {agents.map((agent) => (
        <Agent key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

export default Agents;
