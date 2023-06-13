export interface IAgent {
  [x: string]: any;
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string[];
  aboutMe: string;
  review?: string
}