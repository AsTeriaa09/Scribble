import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], // Track based on Clerk userId
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, //10 collections
      interval: 3600, //per 1hour
      capacity: 10,
    }),
  ],
});

export default aj;
