export type Todo = {
  id: number | string;
  title: string;
  completed: boolean;
};

export type Filter = 'all' | 'active' | 'completed';

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error';
