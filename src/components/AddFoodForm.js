import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ name, image, calories, servings }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  function handleChange(event) {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.tardet.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setForm([...name, image, calories, servings]);
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />
    </form>
  );
}

export default AddFoodForm;
