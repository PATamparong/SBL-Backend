const SampleModel = require("../models/SampleModel");
module.exports = {
  addData: async (req, res) => {
    try {
      const data = await SampleModel.addData();
      console.log(data, "map data");
      return res.send(data);
    } catch (err) {
      return "error";
    }
  },
};
