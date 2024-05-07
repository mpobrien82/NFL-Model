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
                // Show dropdown on click
                dropdown.addEventListener('click', function(event) {
                    event.stopPropagation(); // Prevent dropdown from closing when clicking on links
                    var dropdownContent = this.querySelector('.dropdown-content');
                    if (dropdownContent.style.display === 'block') {
                        dropdownContent.style.display = 'none';
                    } else {
                        dropdownContent.style.display = 'block';
                    }
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', function(event) {
                    if (!dropdown.contains(event.target)) {
                        dropdown.querySelector('.dropdown-content').style.display = 'none';
                    }
                });
            });
        }
    };
    xhr.send();
});

