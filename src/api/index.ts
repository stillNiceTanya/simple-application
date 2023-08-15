import axios from 'axios';

async function fetchTodos({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}): Promise<any> {
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
    // TODO: обработать ошибку
    console.error('Error fetching TODO list:', error);

    if (error instanceof Error) {
      throw error;
    }
  }
}

export { fetchTodos };
