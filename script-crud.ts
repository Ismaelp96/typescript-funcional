interface Tarefa {
  descricao: string;
  concluida: boolean;
}

interface EstadoAplicacao {
  Tarefas: Tarefa[];
  tarefaSeleciona: Tarefa | null;
}

let estadoInicial: EstadoAplicacao = {
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

const selecionarTarefa = (
  estado: EstadoAplicacao,
  tarefa: Tarefa
): EstadoAplicacao => {
  return {
    ...estado,
    tarefaSeleciona: tarefa === estado.tarefaSeleciona ? null : tarefa,
  };
};
