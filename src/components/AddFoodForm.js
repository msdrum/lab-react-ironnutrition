import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm() {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(event) {}
  // console.log(form);
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

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
