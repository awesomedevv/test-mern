import UserModel from "../user/model";

const PAGE_SIZE = 7;

export default {
  getConnections: (req, res, next) => {
    var page = parseInt(req.query.page);

    if (page < 1 || !page) page = 1;

    const skip = (page - 1) * PAGE_SIZE;

    UserModel.countDocuments({}, (err, count) => {
      if (err) {
        res.status(404).send(err);
      }

      const totalPages = Math.ceil(count / PAGE_SIZE);
      UserModel.find({})
        .skip(skip) // Same as before, always use 'skip' first
        .limit(PAGE_SIZE)
        .exec()
        .then((users) => {
          if (users) {
            return res.status(200).send({
              total_pages: totalPages,
              current_page: page,
              users: users,
            });
          }
          return res.status(404).send({
            error: "Users not found",
          });
        });
    });
  },
  getConnectionPages: (req, res, next) => {
    UserModel.countDocuments({}, (err, count) => {
      if (err) {
        res.status(404).send(err);
      }

      const totalPages = Math.ceil(count / PAGE_SIZE);

      res.status(200).send({
        total_pages: totalPages,
      });
    });
  },

  getPendingConnections: (req, res, next) => {},
};
