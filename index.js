import express from "express";
import hash from "object-hash";
import users from "./users.json" assert { type: "json" };
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let findUser;
let message;

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  findUser = users.find((user) => {
    return username == user.username && password == user.password;
  });
  if (findUser) {
    res.status(302);
    res.redirect("/chapter-3/home");
  } else {
    res.render("login", {
      message: "Username or password is wrong!",
    });
  }
  return findUser;
});

app.use((req, res, next) => {
  findUser.username;
  findUser.password;
  next();
});

app.get("./chapter-3/home/api", (req, res)=>{
  res.status(200)
  res.json({
    username: findUser.username,
    password: hash(findUser.password)
  });
})

app.get("./login", (req, res) => {
  res.status(200);
  res.render("login", {
    message
  });
}); 

app.get("/logout", (req, res) => {
  res.status(302);
  res.redirect("/chapter-3/login");
});

app.use("/", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log("Server connected at 3000!");
});
