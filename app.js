const input = document.getElementById('code');
const result = document.querySelector('.result');
const submit = document.getElementById('submit-btn');

input.addEventListener('input', function(e){
  const value = e.target.value;
  
  if(isValid(value)){
    result.innerText = 'Code valide';
    submit.disabled = false;
    
  }else{
    result.innerText = 'Code invalide';
    submit.disabled = true;
    console.log(submit);
  }
 })


function isValid(value) {
    return /^CODE-/.test(value);
}