const a = [
    { id: 3 },
    { id: 3 },
    { id: 2 },
    { id: 2 },
    { id: 1 },
    { id: 5 },
    { id: 6 },
  ];
  
  function arr(a){
    let newElement= [];
  a.filter((arrel, index)=>{
      
      
      if(newElement.includes(arrel.id))
      {
        newElement.push(arrel.id);
      }
  return newElement;
      
  } )
  }
  
  console.log(arr(a));