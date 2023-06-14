const express = require('express');
const AgentsRouter = require('./routes/agents.routes');


class App {
  constructor() {
    this.app = express();
    this.app.use(express.json()); 
    this.app.use(express.raw({ limit: '200mb' }));

    this.init();
  }


  async init() {
    this.agentsRouter = new AgentsRouter();
    try {
      this.app.use('/agents', this.agentsRouter.getRouter());

      this.app.listen(3001, () => {
        console.log('Express App Listening on http://localhost:3001/agents');
      });
    } catch (error) {
      console.error(`An error occurred: ${JSON.stringify(error)}`);
      process.exit(1);
    }
  }
}

new App();
