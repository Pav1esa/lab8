document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const tableBody = document.querySelector('tbody');

  // Обробка відправки форми
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // запобігаємо стандартній поведінці

      // Отримання даних з форми
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const phone = document.getElementById('phone').value;

      // Додавання рядка до таблиці
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <th scope="row">${tableBody.children.length + 1}</th>
          <td>${fullname}</td>
          <td>${username}</td>
          <td>${email}</td>
          <td>${phone}</td>
      `;
      tableBody.appendChild(newRow);

      // Очищення полів форми
      form.reset();

      // Закриття модального вікна
      const modal = bootstrap.Modal.getInstance(document.getElementById('creativeModal'));
      modal.hide();
  });
});
