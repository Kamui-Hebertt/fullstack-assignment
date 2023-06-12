const express = require('express');
const AgentsController = require('../controllers/agents.controller');

class AgentsRouter {
  constructor() {
    this.router = express.Router();
    this.agentsController = new AgentsController();
    this.init();
  }

  init() {
    this.router.post('/', this.agentsController.createAgent);
    this.router.get('/', this.agentsController.getAllAgents);
    this.router.get('/:id', this.agentsController.getAgentById);
    this.router.put('/:id', this.agentsController.updateAgent);
    this.router.delete('/:id', this.agentsController.deleteAgent);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = AgentsRouter;