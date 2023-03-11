
const connection = require(`../utils/database`);

module.exports = {
  addData: async (req, res) => {
    try {
      connection.query(
        `CALL get_sample_data()`,
        async (err, results) => {
          try{
            if (!err) {
              const result = results;
              console.log(result, "results")
              res.send(result);
            } else {
              console.log(err);
            }
          }catch(e){
            return "waley";
          }   
        }
      );
      // const data = await mysql("sample_table")
      //   .coerceTo("array")
      //   .connection.connect();
      // console.log("data");
      // return res.send(data);
    } catch (err) {
      return err;
    }
    // await con.disconnect();
  },
};
