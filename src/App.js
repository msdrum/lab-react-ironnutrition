import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((food) => {
        return (
          <div className="lista-comidas">
            <p> {food.name} </p>
            <img src={food.image} alt="food" width={150} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
