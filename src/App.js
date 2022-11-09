import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  // const [allFoods, setAllFoods] = useState(foods);
  // return (
  //   <div className="App">
  //     {allFoods.map((food) => {
  //       return (
  //         <div className="lista-comidas" key={food.name}>
  //           <p> {food.name} </p>
  //           <img src={food.image} alt="food" width={150} />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <FoodBox
      food={{
        name: 'Orange',
        calories: 85,
        image: 'https://i.imgur.com/abKGOcv.jpg',
        servings: 1,
      }}
    />
  );
}

export default App;
