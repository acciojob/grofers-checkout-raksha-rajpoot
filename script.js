const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const priceElements = document.querySelectorAll('.price');
  let total = 0;

  priceElements.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  const existingTotal = document.querySelector('.total-row');
  if (existingTotal) {
    existingTotal.remove();
  }

  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row'); 

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: Rs ${total}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';

  totalRow.appendChild(totalCell);

  const table = document.querySelector('table');
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

