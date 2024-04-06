function show() {
    // Show the image
    document.getElementById('checked-image').style.display = "block";
    // Hide the 'Check Availability' button
    document.getElementById('check-a').querySelectorAll('button')[0].style.display = "none";
    // Show the 'Close' button
    document.getElementById('check-a').querySelectorAll('button')[1].style.display = "inline-block";
}

function hide() {
    // Hide the image
    document.getElementById('checked-image').style.display = "none";
    // Hide the 'Close' button
    document.getElementById('check-a').querySelectorAll('button')[1].style.display = "none";
    // Show the 'Check Availability' button
    document.getElementById('check-a').querySelectorAll('button')[0].style.display = "inline-block";
}