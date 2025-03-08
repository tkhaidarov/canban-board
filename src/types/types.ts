export interface ITask {
  id: number;
  title: string;
  description?: string;
  status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}
