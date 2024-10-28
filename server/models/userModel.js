const database = require('../database/config');

const User = {
    create: (userData, callback) => {
        const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        database.executarUnico(query, [userData.nome, userData.email, userData.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },
    findByEmail: (userData, callback) => {
        console.log("3")
        const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
        database.executarUnico(query, [userData.email, userData.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.length ? results[0] : null);
        });
        console.log('3.5')
    },
};

module.exports = User;