
function login () {
    document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Para prevenir o recarregamento da página

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: user, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.msg === 'success') {
            window.location.href = '/lista-tarefas.html'; // Redireciona para a página da lista de tarefas
        } else {
            alert('Falha no login');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    });
}

function addTask() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}




