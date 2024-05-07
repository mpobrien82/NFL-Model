document.addEventListener('DOMContentLoaded', function() {
    // Load navigation bar
    var navigationDiv = document.getElementById('navigation');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navigation.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            navigationDiv.innerHTML = xhr.responseText;

            // Enable dropdown functionality
            var dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(function(dropdown) {
                dropdown.addEventListener('mouseover', function() {
                    this.querySelector('.dropdown-content').style.display = 'block';
                });
                dropdown.addEventListener('mouseout', function() {
                    this.querySelector('.dropdown-content').style.display = 'none';
                });
            });
        }
    };
    xhr.send();
});

