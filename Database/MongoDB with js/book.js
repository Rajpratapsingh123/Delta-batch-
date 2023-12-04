const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    
});

const Book=mongoose.model("Book",bookSchema);

let book1=new Book({title:"Two States",author:"Chetan Bhagat",price:500});

book1.save().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});

