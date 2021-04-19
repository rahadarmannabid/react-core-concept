import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[ 
    {name: 'photoshop',price: '$40'},
    {name: 'illustrator', price: '$50'},
    {name: 'Adobe reader', price: '$5'},
    {name: 'Foxit', price: '$7'}
  ]

const productsname=products.map(product=> product.name);
console.log(productsname)

  return (
    <div className="App">
      <header className="App-header">
        <Counter>

        </Counter>
    <Users>

    </Users>
  
      {
          products.map(pd=> <Product product={pd.name}></Product>)
          }

        
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>
        Dynamic Users: {users.length}
        {console.log(users)
}

        <ul>
          {
          users.map(user=><li>{user.name}</li>)
}
        </ul>

      </h3>
    </div>
  )
}


function Counter(){
  const [count,setCount]= useState(10);
  const handleIncrese =()=> {
    const newCount=count+1;
    setCount(newCount)
  }
  return (
    <div>
<h1>
  count : {count}
</h1>
<button onClick={()=>setCount(count-1)}>
  Decrease
</button>
<button onClick={()=>setCount(count+1)}>
  Increse
</button>
    </div>
  )
}



function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200 px',
    width: '100 px',
    padding: '10px'
  }

  console.log(props)
  return (
  <div style={productStyle}>
  <h1>Name:{props.name} </h1>
  <h1>Price:{props.price} </h1>
  <p></p>
  <button>Buy Now</button>
  </div>
  )
  
}

export default App;
