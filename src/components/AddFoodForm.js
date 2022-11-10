import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  // console.log(form);

  function handleSubmit(event) {
    event.preventDefault();
    //é responsável por guardar o form preenchido em algum lugar -> allFoods
    setAllFoods([...allFoods, form]);

    //limpar o form
    setForm({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  }
  return (
    <form className="form-pai">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={form.image}
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={form.calories}
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={form.servings}
        type="number"
        onChange={handleChange}
      />

      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
