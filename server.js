const express = require ('express')
const mongoose = require ('mongoose')
const dotenv = require ('dotenv').config()
const port = 4000;
const User = require ('./models/User')
const app= express()
//mongoose connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Runing on ${port}`);
    });
    console.log("connect to DB");
  });

//add
  app.post("/add", (res, req) => {
    let newUser = new User();
    //save
    newPerson
      .save()
      .then((data) => {
        req.json(newUser);
        console.log("saved:", data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

//Create users
app.post("/addusers", async (res, req) => {
  const users = [
    { userName: "Ali", age: 30,email: 'Ali@gmail.com' },
    {  userName: "Aya", age: 25,email: 'Aya@gmail.com'  },
    { userName: "Yassin", age: 27, email: 'Yassin@gmail.com'  },
    {  userName: "Fares", age: 20, email: 'Fares@gmail.com' },
  ];
  try {
    var response = await User.create(users);

    console.log("Records created:", response);
    req.json(response);
  } catch (error) {
    console.log(error);
  }
});

// Get : return all users
app.get("/users", async (req, res) => {
    try {
      const response = await User.find();
      console.log(response)
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  });
 
//Post: add a new user to the DB

app.post("/adduser", async (res, req) => {
  const users = [
    { userName: "Chayma", age: 30,email: 'chayma@gmail.com' },
  ];
  try {
    var response = await User.create(users);

    console.log("Records created:", response);
    req.json(response);
  } catch (error) {
    console.log(error);
  }
});
//Put: edit a user by ID
app.put("/edit",async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate({
      _id: '6506c534bc7d055b8c7b159e'
     },
     {
      age: 20
    },
    {
      new: true,
      runValidators: true
    }
     );
       res.json(update);
     }
     catch(err) {
       console.error(err)
     }
})
//DELETE : remove a user by ID
app.delete("/delete",async (req, res) => {
  try {
    const removed = await User.findByIdAndDelete({
      _id: '6506c534bc7d055b8c7b15a0'
     }
     );
       res.json(removed);
     }
     catch(err) {
       console.error(err)
     }
})