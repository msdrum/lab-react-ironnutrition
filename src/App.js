import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div>
      {allFoods.map((food) => {
        return (
          <FoodBox
            key={food.name}
            nome={food.name}
            imagem={food.image}
            calorias={food.calories}
            servings={food.servings}
          />
        );
      })}
    </div>
  );
}

export default App;
