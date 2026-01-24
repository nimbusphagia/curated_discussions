
async function profileGet(req, res) {
  res.render('profile', { user: req.user });
}

export { profileGet };
