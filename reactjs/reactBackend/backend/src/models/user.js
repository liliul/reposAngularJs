const db = require('../db/database');

class User {
  static create(user, callback) {
    const { name, email } = user;
    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(sql, [name, email], function (err) {
      callback(err, { id: this.lastID, name, email });
    });
  }

  static findAll(callback) {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], callback);
  }

  static findById(id, callback) {
    const sql = `SELECT * FROM users WHERE id = ?`;
    db.get(sql, [id], callback);
  }

  static update(id, user, callback) {
    const { name, email } = user;
    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    db.run(sql, [name, email, id], callback);
  }

  static delete(id, callback) {
    const sql = `DELETE FROM users WHERE id = ?`;
    db.run(sql, [id], callback);
  }
}

module.exports = User;