const openButon = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const sidebar = document.getElementById('sidebar');

// Open Sidebar
openButon.addEventListener('click', () => {
    sidebar.style.left = '0'; // Move Side Into View
});

// Close Sidebar
closeButton.addEventListener ('click', () => {
    sidebar.style.left = '-300px'; // Move Sidebar Out Of view
});
 
// Close Sidebar When Click Outside
document.body.addEventListener('click', (Event) => {
    if (!
        sidebar.contains(event.target) && Event.target !== openButon) {
            sidebar.style.left ='-300px';
        }
});