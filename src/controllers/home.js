import { getDiscussions } from "../database/queries.js";

async function homeGet(req, res) {
  try {
    const discussions = await getDiscussions();
    if (req.user.role === 'member') {
      for (const d of discussions) {
        d.username = 'Anonymous';
      }
    }
    return res.render('home', { discussions: discussions });
  } catch (err) {
    console.log(err);
  }
}

export { homeGet };
