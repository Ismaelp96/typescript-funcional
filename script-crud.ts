interface Tarefa {
  descricao: string;
  concluida: boolean;
}

interface EstadoAplicacao {
  tarefas: Tarefa[];
  tarefaSeleciona: Tarefa | null;
}

let estadoInicial: EstadoAplicacao = {
  tarefas: [
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

const atualizarUI = () => {
  const ulTarefas = document.querySelector('.app__section-task-list');
  if (ulTarefas) {
    ulTarefas.innerHTML = '';
  }

  estadoInicial.tarefas.forEach((tarefa) => {});
};
