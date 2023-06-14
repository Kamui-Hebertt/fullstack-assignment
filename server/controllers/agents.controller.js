const { Agents } = require("../models/agents.model");
const { Op } = require('sequelize');

class AgentsController {
  async createAgent(req, res) {
    try {
      const {
        firstName,
        lastName,
        photoUrl,
        agentLicence,
        address,
        practiceAreas,
        aboutMe,
        review 
      } = req.body;
  
      const agent = await Agents.create({
        firstName,
        lastName,
        photoUrl,
        agentLicence,
        address,
        practiceAreas,
        aboutMe,
        review,
      });
  
      res.status(201).json(agent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllAgents(req, res) {
    try {
      const filters = req.query;
      const { practiceAreas } = filters;

      let agents;
      if (practiceAreas) {
        agents = await Agents.findAll({
          where: {
            practiceAreas: {
              [Op.like]: `%${practiceAreas}%`,
            },
          },
        });
      } else {
        agents = await Agents.findAll();
      }

      console.log(agents)
      res.status(200).json(agents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAgentById(req, res) {
    try {
      const agent = await Agents.findByPk(req.params.id);
      if (agent) {
        res.status(200).json(agent);
      } else {
        res.status(404).json({ message: "Agent not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAgent(req, res) {
    try {
      const agent = await Agents.findByPk(req.params.id);
      if (agent) {
        await agent.update(req.body);
        res.status(200).json(agent);
      } else {
        res.status(404).json({ message: "Agent not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAgent(req, res) {
    try {
      const agent = await Agents.findByPk(req.params.id);
      if (agent) {
        await agent.destroy();
        res.status(200).json({ message: "Agent was deleted successfully" });
      } else {
        res.status(404).json({ message: "Agent not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}


 
module.exports = AgentsController;
