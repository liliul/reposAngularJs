const User = require('../models/user');

const UserController = {
  createUser: (req, res) => {
    const { name, email } = req.body;
    User.create({ name, email }, (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json(user);
    });
  },

  getUsers: (req, res) => {
    User.findAll((err, users) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(users);
    });
  },

  getUserById: (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.status(200).json(user);
    });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    User.update(id, { name, email }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    });
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    User.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    });
  },
};

module.exports = UserController;