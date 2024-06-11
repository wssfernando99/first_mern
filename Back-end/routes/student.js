const express = require ('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController')

router.post('/add', StudentController.addstudent);
router.get('/', StudentController.viewstudents);
router.put('/update/:id',StudentController.updatestudent);
router.delete('/delete/:id', StudentController.deletestudent);
router.get('/get/:id', StudentController.showstudent);

module.exports = router;