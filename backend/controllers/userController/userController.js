export const getUser = (req, res) => {
  if (!req.user)
    return res.status(200).json({
      status: "success",
      isAuthenticated: false,
      message: "Not authenticated",
    });

  res.status(200).json({
    status: "success",
    isAuthenticated: true,
    user: {
      role: req.user.role,
      name: req.user.name,
      email: req.user.email,
      photo: req.user.photo,
    },
  });
};

export const f = "";
