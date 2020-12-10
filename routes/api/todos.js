const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', todosCtrl.getAll);
router.post('/create', todosCtrl.create);
router.get('/:id', todosCtrl.getOne);
router.post('/edit/:id', todosCtrl.edit);
router.get('/delete/:id', todosCtrl.delete)

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
