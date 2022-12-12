import { createReducer } from '@reduxjs/toolkit';
import { TaskDto } from '../../common/types/tasks';
import { createTask, getTasks, updateTask, deleteTask } from './actions';

type State = {
  tasks: Array<TaskDto>;
};

const initialState: State = {
  tasks: [],
};

export const reduce = createReducer(initialState, (builder) => {
  builder.addCase(createTask.fulfilled, (state, action) => {
    const { data: task } = action.payload;
    if (task) state.tasks.push(task);
  });
  builder.addCase(getTasks.fulfilled, (state, action) => {
    const { data: tasks } = action.payload;
    if (tasks) state.tasks = tasks;
  });
  builder.addCase(updateTask.fulfilled, (state, action) => {
    const { data: updatedTask } = action.payload;

    if (!updatedTask) return;

    const updateIndex = state.tasks.findIndex(
      (task) => task._id === updatedTask._id
    );

    if (updateIndex !== -1) state.tasks[updateIndex] = updatedTask;
  });
  builder.addCase(deleteTask.fulfilled, (state, action) => {
    const { data: deletedTask } = action.payload;

    if (!deletedTask) return;

    state.tasks.filter((task) => task._id !== deletedTask._id);
  });
});
