import { ExtractJwt, JwtStrategy as Strategy } from "passport-jwt";

const opts = {
    secretOrKey: process.env.barkeruserpassword,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};