
module.exports = {
  downloadPdf: async (req, res) => {
    try {
      const data = './file/SBL_Application_Form.pdf';
      console.log(data, "MAO NI SIA BOGO");
      return res.download(data);
    } catch (err) {
      return "error";
    }
  },
};
