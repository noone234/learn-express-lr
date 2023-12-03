const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'db',
    password: 'password',
    port: 32768,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
    console.log(`Creating user with name = ${name}, email = ${email}`)

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        console.log(`Created user: ${JSON.stringify(results.rows[0])}}`)
        response.status(201).json({id: results.rows[0].id})
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json({id: id})
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);
    console.debug(`ID = ${id}`);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.debug('Deleted user');
        response.status(204).send();
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}