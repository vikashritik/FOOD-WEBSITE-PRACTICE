function userfetch(calling){
    console.log("Fetching the user detail......");
    setTimeout(()=>{
     console.log("Data fetched succesfully");
     const obj ={
        name:"Vikash",
        Age:21,
        City:"Varanasi"
     }
     calling(obj);
    },2000)
}
 function greet(obj){
    console.log(`hello${obj.name}`);
 }

 function greet(obj){
    console.log(`hello ${obj.name},How are you`);
 }

 userfetch(greet);