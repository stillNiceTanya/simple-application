import axios from 'axios';
import { Todo } from '../redux/types';

async function fetchTodos({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}): Promise<Todo[]> {
  try {
    const { data, status } = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1/todos',
      {
        params: {
          _start: offset,
          _limit: limit,
        },
      }
    );

    if (status !== 200) {
      throw new Error('Unexpected response status');
    }

    return data;
  } catch (error: unknown) {
    console.error('Error fetching TODO list:', error);

    return Promise.reject(error);
  }
}

export { fetchTodos };
