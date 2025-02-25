document.getElementById('input-task').addEventListener('keypress', function(event) {
   if (event.key === "Enter") {
       event.preventDefault(); // Impede que o formulário seja enviado
       adicionar(); // Chama a função para adicionar a tarefa
   }
});

function adicionar () {
   var task = document.getElementById('input-task').value;
   var lista = document.getElementById('to-do-list');

   if (task.trim() !== "") {
      var li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" onclick="concluir(this)">
                                <label>${task}</label>`;
                lista.appendChild(li);
      
      document.getElementById('input-task').value = "";
   } else {
      alert('A tarefa precisa de um título');
   }
};

function concluir(checkbox) {
   if (checkbox.checked) {
      setTimeout(() => {
         checkbox.parentElement.remove();
      }, 1000);
   }
};