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

  const { text, tag, algorithm, isTagRight } = req.body;

  try {
    const history = await History.create({ text, tag, algorithm, isTagRight });
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



module.exports.deleteHistory = async (req, res, next) => {

  const { id } = req.body;
  
  try {
    await History.findOneAndDelete({
      _id: id,
    });


    res.status(200).json({
      status: true,
      data: {
        historyID: id,
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
