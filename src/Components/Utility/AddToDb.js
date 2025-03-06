const getStoredReadList=()=>{
   const storedListStr=localStorage.getItem('read-list');
   if(storedListStr){
    const storedList=JSON.parse(storedListStr);
    return storedList;
   }
   else{
    return []
   }
}


const addToStoredReadList=(id)=>{
    const storedList=getStoredReadList();
    if(storedList.includes(id)){
        console.log(id,"already exist in the read list")
    }
    else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
    }
}


const getStoredWishList=()=>{
    const storedListStr=localStorage.getItem('wish-list');
    if(storedListStr){
     const storedList=JSON.parse(storedListStr);
     return storedList;
    }
    else{
     return []
    }
 }
 
 
 const addToStoredWishList=(id)=>{
     const storedList=getStoredWishList();
     if(storedList.includes(id)){
         console.log(id,"already exist in the wish list")
     }
     else{
         storedList.push(id);
         const storedListStr=JSON.stringify(storedList)
         localStorage.setItem('wish-list',storedListStr)
     }
 }
 

export {addToStoredReadList,addToStoredWishList,getStoredReadList,getStoredWishList}