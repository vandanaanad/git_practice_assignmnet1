function prime(num){
    let count=000
   
    for(let  i=1; i<=num;i++){
       if(num%i==0){
                count++
            }
        }
    
    if(count==2){
        console.log("prime")
    }else{
        console.log("not prime")
    }
}
prime(19)