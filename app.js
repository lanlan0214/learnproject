//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {

  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResult, 2000); //2秒後顯示 然後要對應下面的isFinite 這段

  e.preventDefault();
});

//Calculate Result

function calculateResult() {
  console.log('calculate');

  //UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value); //本金
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayment = parseFloat(years.value) * 12;

  //Compute monthly interest
  const x = Math.pow(1 + calculateInterest, calculatePayment);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = ((monthly * calculatePayment) - principal).toFixed(2);

    //Show results
    document.getElementById('results').style.display = 'block';

    //Hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your number!');
  }
}

//Show Error
function showError(error) {

  //-------------------------- 這段是錯誤後讓轉圈圈內容消失只顯示上面有誤
  //Hide results
  document.getElementById('results').style.display = 'none';

  //Hide loader
  document.getElementById('loading').style.display = 'none';

  //--------------------------

  //Create a div
  const errorDiv = document.createElement('div');

  //Get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class
  errorDiv.className = 'alert alert-danger';

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000); // 毫秒
}

//Clear error

function clearError() {
  document.querySelector('.alert').remove();
}