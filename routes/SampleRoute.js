const SampleController = require('../controllers/SampleController');
module.exports = (app) => {
    app.get('/api/data', SampleController.addData);
}