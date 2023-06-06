import passport from "passport";
import User from "../models/user/user.js";
import local from "./local.js";
import jwt from "./jwt.js";

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  local();
  jwt();
};
