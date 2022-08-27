const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

// setting up get all and post methods on /api/users
router.route('/').get(getAllUser).post(createUser);

// setting up get one, put, and delete methods on /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// setting up post and delete friend methods on /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
