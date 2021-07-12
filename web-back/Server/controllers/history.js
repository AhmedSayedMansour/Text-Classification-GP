const History = require("../models/History").History;
//const handleErrors = require("../helper/errorHandler").handleErrors;

module.exports.getHistory = async (req, res, next) => {
  try {
    const history = await History.find({});

    res.status(200).json({
      status: true,
      data: {
        history: history,
      },
      errors: {},
    });
  } catch (error) {
   
    res.status(200).json({
      status: false,
      data: {
        history: "",
      },
      errors: { error },
    });
  }
};



module.exports.addHistory = async (req, res, next) => {
  // create new vendor
  const { text, tag, algorithm } = req.body;

  try {
    const history = await Vendor.create({ text, tag, algorithm });
    res.status(200).json({
      status: true,
      data: {
        historyID: history._id,
      },
      errors: {},
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      data: {},
      errors: { error },
    });
  }
};
