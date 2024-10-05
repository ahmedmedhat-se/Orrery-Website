require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const { createHash } = require("crypto");
const { createConnection } = require("mysql2");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const app = express();
const port = 8086;

// encryption in one way

const encrypt = (text) => createHash("sha256").update(text).digest("hex");

// set DB connection

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nasaSpaceApp",
});

connection.connect((err) => {
  if (err) return console.log(err.message);
  console.log("connect to db");
});

// security

app.use(helmet());

app.use((MReq, MRes, next) => {
  MRes.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  MRes.setHeader("xss-filter", true);
  MRes.setHeader("Access-Control-Allow-Headers", "authorization");
  next();
});

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// authenticate the user

const Authenticate = (MReq) => {
  if (MReq.headers.authorization == undefined) {
    return false;
  }
  console.log("auth");
  const Auth = JSON.parse(MReq.headers.authorization.split(" ")[1])._;
  jwt.verify(Auth, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err.message);
      console.log(Auth, process.env.SECRET_KEY);
      return false;
    }
    MReq.userU = user;
    return true;
  });
};

const CreateToken = (I, N, E) => {
  return jwt.sign(
    { userID: I, userName: N, userEmail: E },
    process.env.SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );
};

// handle root

app.get("/", (req, res) => res.send("done"));

// handle Circuit Breaker Calculation

app.post("/signup", multer().none(), (MReq, MRes) => {
  console.log(MReq.body);
  Authenticate(MReq);
  if (MReq.userU) {
    MRes.send(
      CreateToken(MReq.userU.userID, MReq.userU.userName, MReq.userU.userEmail)
    );
  }
  let userN = MReq.body.name,
    userE = MReq.body.email,
    userP = MReq.body.password;
  if (userN && userE && userP) {
    let q = "SELECT * FROM users WHERE userEmail = ?";
    connection.query(q, [userE], (err, res) => {
      if (err) return console.log(err.message);
      if (res.length > 0) {
        return MRes.send("error this email has signed in before");
      }
      let qq = "INSERT INTO users VALUES(null , ? , ? , ?)";
      connection.query(qq, [userN, userE, encrypt(userP)], (err, res) => {
        if (err) return console.log(err.message);
        MRes.send(CreateToken(res.insertId, MReq.body.name, MReq.body.email));
      });
    });
  }
});

app.post("/login", (MReq, MRes) => {
  Authenticate(MReq);
  if (MReq.userU != undefined) {
    return MRes.send(
      CreateToken(MReq.userU.userID, MReq.userU.userName, MReq.userU.userEmail)
    );
  }
  let q1 = `SELECT * FROM users WHERE userEmail = ?`;
  connection.query(q1, [MReq.body.userEmail], (err, result1) => {
    if (err) return console.log(err.message);
    if (result1.length > 0) {
      console.log("log in");
      let q = `SELECT * FROM users WHERE userEmail = ? AND password = ?`;
      connection.query(
        q,
        [MReq.body.userEmail, encrypt(MReq.body.password)],
        (err2, result) => {
          if (err2) return console.log(err2.message);
          if (result.length > 0) {
            MRes.send(
              CreateToken(result[0].ID, result[0].userName, result[0].userEmail)
            );
          } else {
            MRes.send("error wrong password");
          }
        }
      );
    } else {
      MRes.send("error no such user");
    }
  });
});

app.get("/home", (MReq, MRes) => {
  Authenticate(MReq);
  if (!MReq.userU) {
    return MRes.send("error no authentication");
  }
  let q = `SELECT * FROM users WHERE userEmail = ?`;
  console.log(MReq.userU);
  connection.query(q, [MReq.userU.userEmail], (err, result) => {
    if (err) return console.log(err.message);
    let data = {
      userName: result[0].userName,
      authorization: CreateToken(
        MReq.userU.userID,
        MReq.userU.userName,
        MReq.userU.userEmail
      ),
    };
    MRes.send(data);
  });
});

// handle wrong routs

app.use((MReq, MRes) => {
  MRes.send("error wrong url request");
});

app.listen(port, () =>
  console.log(`xlsx calculating app listening on port ${port}!`)
);
