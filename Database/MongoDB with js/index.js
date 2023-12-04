const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.find({age:{$gt:40}})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});


User.updateOne({name:"Adam"},{age:50}).then((res)=>{
  console.log(res);
});

// const user1 = new User({ name: "Adam", email: "adam@yahoo.in", age: "44" });
// const user2 = new User({ name: "Bob", email: "bob@yahoo.in", age: "34" });

// user1.save();


// user2.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

