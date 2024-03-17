
// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    console.log('Right-click is disabled.');
});

// Disable F12 key
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        console.log('Inspect Element is disabled.');
    }
});

// Disable Ctrl + Shift + I and Ctrl + U
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        console.log('Keyboard shortcut is disabled.');
    }
});

// Disable some common key combinations for opening developer tools
document.addEventListener('keydown', function (e) {
    if (
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||   // Ctrl + Shift + C (Windows, Linux)
        (e.metaKey && e.altKey && e.key === 'I') ||     // Cmd + Option + I (Mac)
        (e.ctrlKey && e.altKey && e.key === 'I')        // Ctrl + Alt + I (Windows, Linux)
    ) {
        e.preventDefault();
        console.log('Keyboard shortcut is disabled.');
    }
});
