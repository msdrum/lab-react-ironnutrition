import './App.css';
import foods from './foods.json';
import { useState } from 'react';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';

function App() {
  //As consts ficam aqui:
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');
  //observar o qeu acontece na variável search:
  // console.log(search);
  // const [form, setForm] = useState({});

  // A manipulação do código  vai ser aqui:
  return (
    //div Pai:
    <div className="conatiner-pai">
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      {/* div da Search Bar */}

      <SearchBar search={search} setSearch={setSearch} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <div className="foods-menu">
          {/* filtrando e mapeando o que vai ser renderizado: */}
          {allFoods
            .filter((food) => {
              return food.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((food) => {
              return (
                <FoodBox
                  food={food}
                  key={food.name}
                  // key={food.name}
                  // nome={food.name}
                  // imagem={food.image}
                  // calorias={food.calories}
                  // servings={food.servings}
                />
              );
            })}
        </div>
      </Row>
    </div>
  );

  // const [allFoods, setAllFoods] = useState(foods);

  // return (
  //   <div className="add-foods">
  //     {allFoods.map((food) => {
  //       return (
  //         <AddFoodForm
  //           key={food.name}
  //           name={food.name}
  //           image={food.image}
  //           calories={food.calories}
  //           servings={food.calories}
  //         />
  //       );
  //     })}
  //   </div>
  // );
}

export default App;
