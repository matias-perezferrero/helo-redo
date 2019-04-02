require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

//CONTROLLER
const ctrl = require("./controller");

//SERVER
const app = express();

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000 * 60 * 60 * 24 * 7
    }
  })
);

//DB CONNECTION && SERVER INITIALIZATION
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");

  app.listen(SERVER_PORT, () => console.log(`10-4`));
});

//AUTH ENDPOINTS
app.post("/api/register", ctrl.register);
app.post("/api/login", ctrl.login);
app.get("/api/current", ctrl.getUser);
app.post("/api/logout", ctrl.logout);
