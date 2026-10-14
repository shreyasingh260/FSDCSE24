import React,{useEffect,useState} from 'react'

function FetchProducts() {
  const [data,setData]= useState([]);
  useEffect(()=>{
    async function fetchData(){
      try{
        const res= await fetch("https://dummyjson.com/products");
        const jsonData= await res.json();
        const product= jsonData.products;
        console.log(jsonData);
        setData(product);
      }catch(e){
        console.log("Error in fetching data", e);
      }finally{
        console.log("Fetching of data completed");
      }
    }
    fetchData();
  },[])
  return (
    <div>Fetch Products
      {
        data.map((ele)=>(
          <div>
          <img  src={ele.images} height='100' width='100'></img>
           <h2>${ele.id}</h2>
           {ele.description}
           <button onClick='{cartData}'>Add to Cart</button>
        </div>
       
      ))
      }
      
      
    </div>
  )
}

export default FetchProducts