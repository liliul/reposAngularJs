const apiUrl = 'http://localhost:3001/tasks';

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();

    document.getElementById('add-task-btn').addEventListener('click', addTask);
});

function loadTasks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.title;
                li.classList.toggle('completed', task.completed);
                li.setAttribute('data-id', task.id);

            // Habilitando o arrasto
                li.setAttribute('draggable', true);
                li.addEventListener('dragstart', () => {
                    li.classList.add('dragging');
                });

                li.addEventListener('dragend', () => {
                    li.classList.remove('dragging');
                });

                const titleSpan = document.createElement('span');
                titleSpan.textContent = task.title;
                li.appendChild(titleSpan);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Deletar';
                deleteBtn.addEventListener('click', () => deleteTask(task.id));
                
                const toggleBtn = document.createElement('button');
                toggleBtn.textContent = task.completed ? 'Desmarcar' : 'Completar';
                toggleBtn.addEventListener('click', () => {
                    toggleTask(task.id, task.completed)
                });

                li.appendChild(toggleBtn);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar tarefas:', error));
}

// Área de drop para tarefas concluídas
const completedTasksDiv = document.getElementById('completed-tasks');

completedTasksDiv.addEventListener('dragover', (e) => {
    e.preventDefault();
    completedTasksDiv.classList.add('hovered');
});

completedTasksDiv.addEventListener('dragleave', () => {
    completedTasksDiv.classList.remove('hovered');
});

completedTasksDiv.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    const taskId = draggingItem.getAttribute('data-id');

    // Mover a tarefa para a div de tarefas concluídas
    completedTasksDiv.appendChild(draggingItem);
    
    // Atualizar o estado da tarefa para concluída (opcional)
    toggleTask(taskId, true); // Atualiza o estado da tarefa na API
});

function addTask() {
    const input = document.getElementById('task-input');
    const title = input.value.trim();
    
    if (!title) return;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    })
        .then(response => response.json())
        .then(() => {
            input.value = '';
            loadTasks();
        })
        .catch(error => console.error('Erro ao adicionar tarefa:', error));
}

function deleteTask(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(() => loadTasks())
        .catch(error => console.error('Erro ao deletar tarefa:', error));
}

function toggleTask(id, completed) {
    const taskElement = document.querySelector(`#task-list li[data-id="${id}"]`);
    const taskTitle = taskElement.querySelector('span').textContent.trim();
   
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskTitle, completed: !completed }), // Agora enviamos o title
    })
        .then(() => loadTasks())
        .catch(error => console.error('Erro ao atualizar tarefa:', error));
}
