const verifyLastName = (req, res, next) => {
  const { verifyLastName } = req.body;
  if (!verifyLastName) {
    return res.status(400).json({
      message: "last name is required",
    });
  }
  next();
};

const verifyFirstName = (req, res, next) => {
  const { verifyFirstName } = req.body;
  if (!verifyFirstName) {
    return res.status(400).json({
      message: "first name is required",
    });
  }
  next();
};

const verifyAgentLincense = (req, res, next) => {
  const { AgentLincense } = req.body;
  if (!AgentLincense) {
    return res.status(400).json({
      message: "Agent Lincense name is required",
    });
  }
  next();
};

const verifyAdress = (req, res, next) => {
  const { adress } = req.body;
  if (!adress) {
    return res.status(400).json({
      message: "Adress is required",
    });
  }
  next();
};

const verifyAdressChar = (req, res, next) => {
  const { adress } = req.body;
  if (adress.length <= 6) {
    return res.status(400).json({
      message: "the adress must have at least 6 characters",
    });
  }
  next();
};

const verifyPraticesAreas = (req, res, next) => {
  const { praticeAreas } = req.body;
  if (!praticeAreas) {
    return res.status(400).json({
      message: "Pratice areas is required",
    });
  }
  next();
};

module.exports = {
  verifyLastName,
  verifyFirstName,
  verifyAgentLincense,
  verifyAdress,
  verifyAdressChar,
  verifyPraticesAreas,
};
