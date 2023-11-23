const express = require('express')
const router = express.Router();

//User controllers
const { getUser, postUser, getUserId, deleteUserId, patchUserId} = require('../controllers/userControllers')


//User routes
router.route('/').get(getUser).post(postUser)
router.route('/:id').get(getUserId).delete(deleteUserId).patch(patchUserId)


module.exports = router;