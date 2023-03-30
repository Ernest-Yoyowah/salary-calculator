const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const hours = parseFloat(document.getElementById('hours').value);

  let salary = 0;
  let incomeTax = 0;
  let deduction = 0;

  if (hours >= 170) {
    salary = hours * 20;
  } else {
    salary = hours * 20 * 0.95;
    deduction = salary * 0.05;
  }

  incomeTax = salary * 0.075;

  salary = salary * 0.7;

  resultDiv.innerHTML = `
    <p><strong>Employee name:</strong> ${name}</p>
    <p><strong>Total hours worked:</strong> ${hours}</p>
    <p><strong>Salary:</strong> $${salary.toFixed(2)}</p>
    <p><strong>Income tax:</strong> $${incomeTax.toFixed(2)}</p>
    <p><strong>Deduction:</strong> $${deduction.toFixed(2)}</p>
  `;

  resultDiv.style.display = 'block';
});
