document.getElementById('dropdown').addEventListener('click', function() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
  
  function selectOption(option) {
    document.getElementById('dropdownText').textContent = option;
    document.getElementById('dropdownMenu').style.display = 'none';
  }
  
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (!dropdown.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });