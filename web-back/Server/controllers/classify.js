const axios = require("axios");

module.exports.getClass = (req, res, next) => {
  const text = req.body.text;
  const option = req.body.option;

  axios({
    method: "POST",
    url: `${process.env.MODEL_API_URL}api/text/class`,
    headers: { "Content-Type": "application/json" },
    data: {
      text: text,
      option: option,
    },
  })
    .then((response) => {
      const classification = response.data.tag;

      // return a response
      res.status(200).json({
        status: 200,
        class: classification,
        errors: {},
      });
    })
    .catch((error) => {
      // return a response
      res.status(200).json({
        status: 200,
        class: "",
        errors: "There is problem in Model API",
      });
    });
};
