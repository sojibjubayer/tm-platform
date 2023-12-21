import React from 'react';
import { useForm } from 'react-hook-form';

const NewTask = ({ onAddTask }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAddTask(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title:</label>
      <input {...register('title', { required: true })} />

      <label>Description:</label>
      <textarea {...register('description')} />

      <label>Deadline:</label>
      <input type="date" {...register('deadline')} />

      <label>Priority:</label>
      <select {...register('priority')}>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
