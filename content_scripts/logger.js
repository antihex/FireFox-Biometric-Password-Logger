console.log("Extension background script loaded!");

document.addEventListener("keydown", function(event) {
    // Log the key code to the console
    console.log("Key pressed:", event.keyCode);
  });