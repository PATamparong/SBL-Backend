const NewloanController = require('../controllers/NewloanController');
module.exports = (app) => {
    app.get('/api/data/download/SBL_Application_Form', NewloanController.downloadPdf);
}