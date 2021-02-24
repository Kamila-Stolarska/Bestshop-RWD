const bars = document.querySelector('.hamburger-icon');
const navList = document.querySelector('nav ul');

bars.addEventListener('click', function () {
    navList.classList.toggle('active');
});

//Calculator
const selectedOption = document.querySelector('.selected-option');
const dropdown = document.querySelector('.custom-select .dropdown');

selectedOption.addEventListener('click', function(){
    dropdown.classList.toggle("open");
})

const dropdownOptions = document.querySelectorAll('.dropdown div');

for(let i=0; i<dropdownOptions.length; i++){
    dropdownOptions[i].addEventListener('click',function(){
        selectedOption.textContent = dropdownOptions[i].textContent;
        selectedOption.style.color = '#000000';
        selectedOption.dataset.value = dropdownOptions[i].dataset.value;
        
        dropdown.classList.toggle("open");
    })
}