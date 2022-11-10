import './App.css';
import foods from './foods.json';
import { useState } from 'react';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  // const [allFoods, setAllFoods] = useState(foods);
  // return (
  //   <div className="foods-menu">
  //     {allFoods.map((food) => {
  //       return (
  //         <FoodBox
  //           key={food.name}
  //           nome={food.name}
  //           imagem={food.image}
  //           calorias={food.calories}
  //           servings={food.servings}
  //         />
  //       );
  //     })}
  //   </div>
  // );

  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="add-foods">
      {allFoods.map((food) => {
        return (
          <AddFoodForm
            key={food.name}
            name={food.name}
            image={food.image}
            calories={food.calories}
            servings={food.calories}
          />
        );
      })}
    </div>
  );
}

export default App;
