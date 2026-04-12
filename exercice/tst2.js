function premires(numb){
    
    
    
    if (numb<2) {
       
        return false;
    }
    for (let i=2; i<=numb; i++){
        if(numb%i==0){
            return false;
        }
            else{ 
                return true;    
            }
        
        
            
        
}}
function afficher(n){
    let tb=[];
    for (let i=2; i<=n; i++){
        if(premires(i)==true){
            tb.push(i);
        }
        }
        alert("les nombres premiers inferieur a "+n+" sont : "+tb);
    
}