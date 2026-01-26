import { getDiscussionsByUser, getPostsByUser } from "../database/queries.js";

async function profileGet(req, res) {
  const id = req.user.id;
  try {
    const discussions = await getDiscussionsByUser(id);
    const comments = await getPostsByUser(id);
    res.render('profile', { user: req.user, discussions: discussions, comments: comments });
  } catch (err) {
    console.log(err);
    res.redirect('/401');
  }
}

export { profileGet };
