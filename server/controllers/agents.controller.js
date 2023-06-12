const { Agents } = require("../models/agents.model");

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
      } = req.body;
  
      const agent = await Agents.create({
        firstName,
        lastName,
        photoUrl,
        agentLicence,
        address,
        practiceAreas,
        aboutMe,
      });
  
      res.status(201).json(agent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllAgents(_req, res) {
    try {
      const agents = await Agents.findAll();
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
