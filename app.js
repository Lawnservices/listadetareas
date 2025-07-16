  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.style.color = '#000';
        const span = document.createElement('span');
        span.textContent = task.text;
        span.style.flex = '1';
        span.onclick = () => {
          task.completed = !task.completed;
          saveTasks();
          renderTasks();
        };

        const actions = document.createElement('div');
        actions.className = 'actions';

        // Botón Editar
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => editTask(index, span.textContent);

        // Botón Eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const text = taskInput.value.trim();
      if (text === '') return;
      tasks.push({ text: text, completed: false });
      saveTasks();
      renderTasks();
      taskInput.value = '';
    }

    function editTask(index, oldText) {
      const newText = prompt('Edita la tarea:', oldText);
      if (newText !== null && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        saveTasks();
        renderTasks();
      }
    }

    // Mostrar las tareas guardadas al cargar la página
    renderTasks();

 
