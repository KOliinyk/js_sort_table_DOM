document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.sortable');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        const isNumeric = !isNaN(cellA) && !isNaN(cellB);

        if (isNumeric) {
          return Number(cellA) - Number(cellB);
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      // Переміщуємо відсортовані рядки в тіло таблиці
      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
