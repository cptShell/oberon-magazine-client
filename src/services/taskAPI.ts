import axios, { Axios } from 'axios';
import { StorageKey, TaskApiPath } from '../common/enums/enums';
import { ApiError, ApiResponse } from '../common/types/api';
import { CreateTaskDTO, TaskDto, UpdateTaskDTO } from '../common/types/types';
import { storage } from './services';

export class TaskApi {
  #axiosInstance: Axios;

  constructor(apiPrefix: string) {
    this.#axiosInstance = axios.create({
      baseURL: apiPrefix,
    });
  }

  async createTask(
    payload: CreateTaskDTO
  ): Promise<ApiResponse<TaskDto | null>> {
    try {
      const token = storage.getItem(StorageKey.TOKEN);

      if (!token) throw new Error('Unauthorized');

      const { data } = await this.#axiosInstance.post<TaskDto>(
        TaskApiPath.TASKS,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return { data, message: 'ok' };
    } catch (error) {
      let message: string;

      if (axios.isAxiosError(error)) {
        message = (error.response?.data as ApiError).error;
      } else {
        message = error as string;
      }

      return { data: null, message };
    }
  }

  async updateTask(payload: TaskDto): Promise<ApiResponse<TaskDto | null>> {
    try {
      const token = storage.getItem(StorageKey.TOKEN);
      const { description, completed, _id: id } = payload;

      if (!token) throw new Error('Unathorized');

      const url = `${TaskApiPath.TASKS}/${id}`;
      const { data } = await this.#axiosInstance.patch(
        url,
        { description, completed },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return { data, message: 'ok' };
    } catch (error) {
      let message: string;

      if (axios.isAxiosError(error)) {
        message = (error.response?.data as ApiError).error;
      } else {
        message = error as string;
      }

      return { data: null, message };
    }
  }

  async deleteTask(payload: TaskDto): Promise<ApiResponse<TaskDto | null>> {
    const token = storage.getItem(StorageKey.TOKEN);
    const headers = { Authorization: `Bearer ${token}` };
    const url = `${TaskApiPath.TASKS}/${payload._id}`;

    if (token) {
      await this.#axiosInstance.delete(url, { headers });

      return { data: payload, message: 'ok' };
    }

    return { data: null, message: 'Task not found!' };
  }

  async getTasks(): Promise<ApiResponse<Array<TaskDto> | null>> {
    try {
      const token = storage.getItem(StorageKey.TOKEN);

      if (!token) throw new Error('unauthorized');

      const { data } = await this.#axiosInstance.get<Array<TaskDto>>(
        TaskApiPath.TASKS,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return { data, message: 'ok' };
    } catch (error) {
      let message: string;

      if (axios.isAxiosError(error)) {
        message = (error.response?.data as ApiError).error;
      } else {
        message = error as string;
      }

      return { data: null, message };
    }
  }
}
