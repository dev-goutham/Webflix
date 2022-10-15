import { NetlifyJwtVerifier, claimToArray } from '@serverless-jwt/netlify';

const issuer = process.env.VITE_AUTH0_DOMAIN!;
const audience = process.env.AUTH0_AUDIENCE!;

const verifyJwt = NetlifyJwtVerifier({
  issuer: `https://${issuer}/`,
  audience,
  mapClaims: (claims) => {
    const user = JSON.parse(JSON.stringify(claims));
    user.scope = claimToArray(user.scope);
    return user;
  },
});

export default verifyJwt;
