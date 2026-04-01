import { db } from "../db/config.js";
import bcrypt from "bcrypt";

export const protect = async (req, res, next) => {
  try{
      const base64Credentials = req.headers.authorization.split(" ")[1];
      const [username, password] = atob(base64Credentials).split(":");
    
      const user = await db("users").where({ username }).first();
      if (!user) throw new Error(`User ${username} not found.`);
    
      const result = await bcrypt.compare(password, user.password);
    
      if (!result) {
        console.log("Passwords don't match");
        res.set("WWW-Authenticate", 'Basic realm="cryptodo"');
        return res.status(401).send("Invalid credentials.");
      } else {
        req.user = user;
        next();
      }

  } catch {
        console.log("Passwords don't match");
        res.set("WWW-Authenticate", 'Basic realm="cryptodo"');
        return res.status(401).send("Invalid credentials.");
  }
};
