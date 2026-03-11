import { db } from '../config.js';
import bcrypt from 'bcrypt'

// TODO: Fix this so that it hashes the passwords in the database
async function hashPasswords(){
    
    const users = await db.raw('select username, password from users;');
    users.forEach(async (user) => {
        let hashed = await bcrypt.hash((user).password, 10);
        await db.raw('update users set password = ? where username = ?;', [hashed, user.username])
        console.log(await db.raw('select username, password from users;'));

        });


}

hashPasswords();
