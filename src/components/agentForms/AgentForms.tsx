import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import axios from "axios";
import * as M from "@mui/material";
import "./agentForm.css";

const AgentForm: FC = () => {
  type Form = {
    firstName: string;
    lastName: string;
    photoUrl: string | null;
    agentLicence: string;
    address: string;
    practiceAreas: string;
    aboutMe: string;
  };

  const [agentData, setAgentData] = useState<Form>({
    firstName: "",
    lastName: "",
    photoUrl: "",
    agentLicence: "",
    address: "",
    practiceAreas: "",
    aboutMe: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAgentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAgentData((prevState) => ({
        ...prevState,
        photoUrl: null,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const response = await axios.post("/agents", agentData);
      console.log(response.data);
      // return response;
      setAgentData({
        firstName: "",
        lastName: "",
        photoUrl: "",
        agentLicence: "",
        address: "",
        practiceAreas: "",
        aboutMe: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      <form className="agent-form" onSubmit={handleSubmit}>        
          <M.TextField
            type="text"
            name="firstName"
            label="First Name:"
            id="outlined-basic"
            value={agentData.firstName}
            onChange={handleInputChange}
          />
        
        <br />
       
          <M.TextField
            type="text"
            name="lastName"
            id="outlined-basic"
            label="Last Name:"
            value={agentData.lastName}
            onChange={handleInputChange}
          />
        
        <br />
        
          <M.TextField
            type="text"
            id="outlined-basic"
            name="agentLicence"
            label="Agent License:"
            value={agentData.agentLicence}
            onChange={handleInputChange}
          />
        
        <br />
       
          <M.TextField
            type="text"
            name="address"
            label="Address:"
            id="outlined-basic"
            value={agentData.address}
            onChange={handleInputChange}
          />
        
        <br />
      
          <M.TextField
            type="text"
            name="practiceAreas"
            label="Practice Areas:"
            id="outlined-basic"
            value={agentData.practiceAreas}
            onChange={handleInputChange}
          />
        
        <br />
        
          <M.TextField
            name="aboutMe"
            id="outlined-basic"
            label="About Me:"
            value={agentData.aboutMe}
            onChange={handleInputChange}
          />
        
        <br />
        
          <input
            type="file"
            name="photo"
            accept="image/png, image/jpeg"


            onChange={handleImageChange}          />
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AgentForm;
