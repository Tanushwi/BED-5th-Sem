const todoArray = [];

    const inputBox = document.getElementById('inputBox');
    const addBtn = document.getElementById('addBtn');
    const displayBox = document.getElementById('displayBox');

    addBtn.addEventListener('click', function () {
      const value = inputBox.value.trim();

      if (value !== "") {
        todoArray.push(value);
        inputBox.value = "";
        renderList();
      }
    });

    function renderList() {
      while (displayBox.firstChild) {
        displayBox.removeChild(displayBox.firstChild);
      }

      for (let i = 0; i < todoArray.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'todo-item';

        const textNode = document.createElement('span');
        textNode.className = 'todo-text';
        textNode.textContent = todoArray[i];

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'action-btn';
        editBtn.addEventListener('click', function () {
          const editInput = document.createElement('input');
          editInput.type = 'text';
          editInput.value = todoArray[i];

          const saveBtn = document.createElement('button');
          saveBtn.textContent = 'Save';
          saveBtn.className = 'action-btn';

          itemDiv.innerHTML = '';
          itemDiv.appendChild(editInput);
          itemDiv.appendChild(saveBtn);

          saveBtn.addEventListener('click', function () {
            const newVal = editInput.value.trim();
            if (newVal !== "") {
              todoArray[i] = newVal;
              renderList();
            }
          });
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'action-btn';
        deleteBtn.addEventListener('click', function () {
          todoArray.splice(i, 1);
          renderList();
        });

        itemDiv.appendChild(textNode);
        itemDiv.appendChild(editBtn);
        itemDiv.appendChild(deleteBtn);

        displayBox.appendChild(itemDiv);
      }
    }