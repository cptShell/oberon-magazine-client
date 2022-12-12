import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiResponse } from '../../common/types/api';
import { AsyncThunkConfig } from '../../common/types/types';
import {
  CreateTaskDTO,
  TaskDto,
  UpdateTaskDTO,
} from '../../common/types/tasks';
import { ActionType } from './common';

export const createTask = createAsyncThunk<
  ApiResponse<TaskDto | null>,
  CreateTaskDTO,
  AsyncThunkConfig
>(ActionType.CREATE_TASK, async (payload, { extra }) => {
  const { taskApi } = extra;
  const response = await taskApi.createTask(payload);

  return response;
});

export const getTasks = createAsyncThunk<
  ApiResponse<Array<TaskDto> | null>,
  TaskDto,
  AsyncThunkConfig
>(ActionType.READ_TASKS, async (payload, { extra }) => {
  const { taskApi } = extra;
  const response = await taskApi.getTasks();

  return response;
});

export const updateTask = createAsyncThunk<
  ApiResponse<TaskDto | null>,
  TaskDto,
  AsyncThunkConfig
>(ActionType.CREATE_TASK, async (payload, { extra }) => {
  const { taskApi } = extra;
  const response = await taskApi.updateTask(payload);

  return response;
});

export const deleteTask = createAsyncThunk<
  ApiResponse<TaskDto | null>,
  TaskDto,
  AsyncThunkConfig
>(ActionType.DELETE_TASK, async (payload, { extra }) => {
  const { taskApi } = extra;
  const response = await taskApi.deleteTask(payload);

  return response;
});
