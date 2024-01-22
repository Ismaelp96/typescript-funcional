interface Tarefa {
  descricao: string;
  concluida: boolean;
}

interface EstadoAplicacao {
  Tarefas: Tarefa[];
  tarefaSeleciona: Tarefa | null;
}

let estado: EstadoAplicacao = {
  Tarefas: [
    {
      descricao: 'Tarefa concluída',
      concluida: true,
    },
    {
      descricao: 'Tarefa pendente 1',
      concluida: false,
    },
    {
      descricao: 'Tarefa pendente 2',
      concluida: false,
    },
  ],
  tarefaSeleciona: null,
};
