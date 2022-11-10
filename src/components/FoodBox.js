import { Card, Col, Button } from 'antd';

// function FoodBox({ nome, imagem, calorias, servings }) {
function FoodBox({ food }) {
  return (
    // <Col>
    //   <Card title={nome} style={{ width: 230, height: 300, margin: 10 }}>
    //     <img src={imagem} style={{ height: 60 }} alt="food" />
    //     <p>Calories: {calorias}</p>
    //     <p>Servings: {servings}</p>
    //     <p>
    //       <b>Total Colaries: {calorias}</b> kcal
    //     </p>
    //     <Button type="primary">Delete</Button>
    //   </Card>
    // </Col>

    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} style={{ height: 60 }} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Colaries: {food.calories}</b> kcal
        </p>
        <Button type="primary">Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
