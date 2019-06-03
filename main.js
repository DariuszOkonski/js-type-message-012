const inputPassword = document.querySelector('.board input[type="text"]');
const response = document.querySelector('p.response');

const correctPasswords = ['one', 'tWo', 'ThrEE', 'FouR'];
const answers = ['spring', 'summer', 'autum', 'winter'];

inputPassword.addEventListener('input', (e) => {
  const password = e.target.value.toLowerCase();
  const index = correctPasswords.findIndex(pass => pass.toLowerCase() === password);

  if (index !== -1) {
    response.textContent = answers[index];
  } else {
    response.textContent = '';
  }

  console.log(index);
})