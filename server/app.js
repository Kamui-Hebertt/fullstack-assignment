const express = require("express");
const { Agent } = require("./model");
const {
  verifyLastName,
  verifyFirstName,
  verifyAgentLincense,
  verifyAddress,
  verifyAddressChar,
  verifyPracticeAreas,
} = require('./middleware');

const app = express();

app.get("/agents", async (_req, res, next) => {
  try {
    const agents = await Agent.findAll();
    return res.status(200).json(agents);
  } catch (error) {
    next(error);
  }
});

app.get("/agents/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const agent = await Agent.findByPk(id);
    if (!agent) {
      return res.status(404).json({ error: "Agent not found" });
    }
    return res.status(200).json(agent);
  } catch (error) {
    next(error);
  }
});

app.post(
  "/agents",
  verifyLastName,
  verifyFirstName,
  verifyAgentLincense,
  verifyAddress,
  verifyAddressChar,
  verifyPracticeAreas,
  async (req, res, next) => {
    try {
      const agent = await Agent.create(req.body);
      return res.status(201).json(agent);
    } catch (error) {
      next(error);
    }
  });

app.put(
  "/agents/:id",
  verifyLastName,
  verifyFirstName,
  verifyAgentLincense,
  verifyAddress,
  verifyAddressChar,
  verifyPracticeAreas,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const [updated] = await Agent.update(req.body, {
        where: { id }
      });
      if (updated) {
        const updatedAgent = await Agent.findByPk(id);
        return res.json(updatedAgent);
      }
      return res.status(404).json({ message: 'Agent not found' });
    } catch (error) {
      next
);

app.delete("agents/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const agent = await Agent.findByPk(id);
    if (!agent) {
      return res.status(404).json({ error: "Agent not found" });
    }
    await agent.destroy();
    return res
      .status(204)
      .json({ message: `Agent ${id} was delected sucessfully` });
  } catch (error) {
    next(error);
  }
});

module.exports = app;
