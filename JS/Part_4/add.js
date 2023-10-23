let todo=[];
let req=prompt("Enter your request ");

while(true){
    if(req=="quit"){
        console.log("You Quit");
        break;
    }


    if(req=="list"){
        for(task of todo){
            console.log(task);
        
        }
    }


    else if(req=="add"){
      let task = prompt("Enter your desired task");
      todo.push(task);
       console.log("task added");
       
    }


    else if(req=="delete"){
        let idx=prompt("Enter the index number");
        todo.splice(idx,1);
        console.log("item deleted ")
        
    }

     req=prompt("Enter your request");
}
