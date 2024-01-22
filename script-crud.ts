interface Task {
  description: string;
  completed: boolean;
}

interface StateAplication {
  tasks: Task[];
  selectedTask: Task;
}
