import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import axios from 'axios';
import  './agentForm.css';

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
    firstName: '',
    lastName: '',
    photoUrl: '',
    agentLicence: '',
    address: '',
    practiceAreas: '',
    aboutMe: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await axios.post('/agents', agentData);
      console.log(response.data);
      // return response;
      setAgentData({
        firstName: '',
        lastName: '',
        photoUrl: '',
        agentLicence: '',
        address: '',
        practiceAreas: '',
        aboutMe: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='form'>
    <form className='agent-form' onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={agentData.firstName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={agentData.lastName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Agent License:
        <input type="text" name="agentLicence" value={agentData.agentLicence} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" value={agentData.address} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Practice Areas:
        <input type="text" name="practiceAreas" value={agentData.practiceAreas} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        About Me:
        <textarea name="aboutMe" value={agentData.aboutMe} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Photo:
        <input type="file" name="photo" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      <button className='button' type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AgentForm;


