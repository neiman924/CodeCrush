const db = require('../config/connection');
const { User , Comment } = require('../models');
const commentSeeds = require('./commentData.json');
const userSeeds = require('./userData.json');

db.once('open', async () => {
  try {
    await Comment.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Comment.create(commentSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

