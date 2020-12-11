const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, todosCtrl.getAll);
router.post('/create', checkAuth, todosCtrl.create);
router.post('/edit/:id', checkAuth, todosCtrl.edit);
router.post('/delete/:id', checkAuth, todosCtrl.delete)

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  console.log(req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
