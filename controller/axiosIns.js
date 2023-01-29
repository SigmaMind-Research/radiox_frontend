const express = require("express");
const axios = require("axios");
const redis = require("redis");
const logger = require("./logger");
require("dotenv").config();

const app = express();
const client = redis.createClient({
  legacyMode: true,
});
client.connect().catch(console.error);

let keyName = "gorestToken";
let getCacheData = client.get(keyName);
let key = process.env.API_KEY_VALUE;
let cachekey;

const redis_post = (req, res, next) => {
  client.get(keyName, (err, redis_data) => {
    if (err) {
      throw err;
    } else if (!redis_data) {
      client.set(keyName, JSON.stringify(key));
      logger.log("info", "cached key");
      cachekey = JSON.parse(redis_data);
    } else if (redis_data) {
      logger.log("info", "key cached");
      cachekey = JSON.parse(redis_data);
    }
    next();
  });
};

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    accept: "application/json",
    Authorization: key,
  },
  credentials: true,
});

module.exports = {
  axiosIns: axiosInstance,
  redis_post,
  cachekey,
};
