// blog/static/blog/main.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Profile Dropdown Toggle ---
    const profileDropdown = document.querySelector('.profile-dropdown');
    if (profileDropdown) {
        const profilePic = profileDropdown.querySelector('.profile-pic');
        const dropdownContent = profileDropdown.querySelector('.dropdown-content');

        profilePic.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent document click from closing immediately
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', function(e) {
            if (!profileDropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // --- Sidebar Toggle ---
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContainer = document.querySelector('.main-container');

    if (sidebarToggle && sidebar && mainContainer) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            mainContainer.classList.toggle('sidebar-collapsed');
        });
    }

    // --- Reader Mode Toggle ---
    const readerModeToggle = document.getElementById('reader-mode-toggle');
    if (readerModeToggle) {
        readerModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('reader-mode');
            // Save preference to localStorage (optional, but good UX)
            if (document.body.classList.contains('reader-mode')) {
                localStorage.setItem('readerMode', 'enabled');
            } else {
                localStorage.removeItem('readerMode');
            }
        });

        // Apply reader mode on load if previously enabled
        if (localStorage.getItem('readerMode') === 'enabled') {
            document.body.classList.add('reader-mode');
        }
    }
});