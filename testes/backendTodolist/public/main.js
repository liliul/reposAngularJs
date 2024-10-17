const apiUrl = 'http://localhost:3000/tasks';

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

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Deletar';
                deleteBtn.addEventListener('click', () => deleteTask(task.id));
                
                const toggleBtn = document.createElement('button');
                toggleBtn.textContent = task.completed ? 'Desmarcar' : 'Completar';
                toggleBtn.addEventListener('click', () => toggleTask(task.id, task.completed));

                li.appendChild(toggleBtn);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar tarefas:', error));
}

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
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
    })
        .then(() => loadTasks())
        .catch(error => console.error('Erro ao atualizar tarefa:', error));
}
