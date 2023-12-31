import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import axios from "axios";
import * as M from "@mui/material";
import "./agentForm.css";

const AgentForm: FC = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [error2, setError2] = useState<boolean>(false);
  const [error3, setError3] = useState<boolean>(false);
  const [error4, setError4] = useState<boolean>(false);
  const [sucess, setSucess] = useState<boolean>(false);
  
  const [somethingWrong, setSomethingWrong] = useState(false);

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
      const reader = new FileReader();
      reader.onload = () => {
        setAgentData((prevState) => ({
          ...prevState,
          photoUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const checkName = () => {
    if (agentData.firstName.trim().length <= 1) {
      setError(true);
      throw new Error("Parameter is not a number!");
    }
  };

  const checklastName = () => {
    if (agentData.lastName.trim().length <= 1) {
      setError2(true);
      throw new Error("last name must be valid!");
    }
  };
  const checkArea = () => {
    if (agentData.practiceAreas.trim().length <= 1) {
      setError3(true);
      throw new Error("pratice areas must be valid!");
    }
  };

  const checkAgentLicense = () => {
    if (agentData.agentLicence.trim().length <= 1) {
      setError4(true);
      throw new Error("agent Lincense must be valid!");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    checkName();
    checklastName();
    checkArea();
    checkAgentLicense();

    try {
      const response = await axios.post("/agents", agentData);
      setSucess(true);
      console.log(response.data);

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
      console.log("image too large");
      setSomethingWrong(true);
    }
  };

  return (
    <div className="form">
      <h2 className="h2Title">Register Agent</h2>
      <form className="agent-form" onSubmit={handleSubmit}>
        <M.TextField
          type="text"
          name="firstName"
          label="First Name:"
          id="outlined-basic"
          value={agentData.firstName}
          onChange={handleInputChange}
        />
        <M.TextField
          type="text"
          name="lastName"
          id="outlined-basic"
          label="Last Name:"
          value={agentData.lastName}
          onChange={handleInputChange}
        />
        <M.TextField
          type="text"
          id="outlined-basic"
          name="agentLicence"
          label="Agent License:"
          value={agentData.agentLicence}
          onChange={handleInputChange}
        />
        <M.TextField
          type="text"
          name="address"
          label="Address:"
          id="outlined-basic"
          value={agentData.address}
          onChange={handleInputChange}
        />
        <M.TextField
          type="text"
          name="practiceAreas"
          label="Practice Areas:"
          id="outlined-basic"
          value={agentData.practiceAreas}
          onChange={handleInputChange}
        />
        <M.TextField
          name="aboutMe"
          id="outlined-basic"
          label="About Me:"
          value={agentData.aboutMe}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="photoUrl"
          accept=".png, .jpg, .jpeg, image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <br />
        {somethingWrong && (
          <p className="redText">
            Something went wrong, try other image or none
          </p>
        )}
        {error && <p className="redText">First name is is required</p>}
        {error2 && <p className="redText">Last name is is required</p>}
        {error3 && <p className="redText">Agente Linsence is is required</p>}
        {error4 && <p className="redText">Practice Areas is is required</p>}
        {sucess && <p className="greenText">informations added successfully</p>}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AgentForm;
