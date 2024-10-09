document.getElementById('igniteButton').addEventListener('click', function() {
    var statusDiv = document.getElementById('status');
    let a = document.getElementById('igniteButton');
    var countdownDiv = document.getElementById('countdown');
    var container = document.querySelector('.container');
    var body = document.body;
    a.style.display ="none"
    
    var countdownTime = 10; // Countdown time in seconds
    var countdownInterval;
    var statusMessages = [
        'Starting Engine...',
        'Prepping Systems...',
        'Checking Fuel Levels...',
        'Systems Online...',
        'Activating Ignition...',
        'Engaging Thrust...',
        'Final Countdown...',
        'Liftoff!'
    ];

    var statusIndex = 0;
    
    body.style.backgroundColor = '#f4f4f4'; // Reset background color
    container.classList.add('bounce'); // Add bounce effect to container
    statusDiv.textContent = statusMessages[statusIndex];
    countdownDiv.textContent = `Countdown: ${countdownTime}s`;

    countdownInterval = setInterval(function() {
        countdownTime--;
        countdownDiv.textContent = `Countdown: ${countdownTime}s`;

        // Change status and background color based on countdown time and status index
        if (countdownTime === 9) {
            body.style.backgroundColor = '#ffeb3b'; // Bright Yellow for starting engine
            statusDiv.textContent = statusMessages[++statusIndex];
            body.style.transition = 'background-color 0.5s'; // Quick transition
        } else if (countdownTime === 7) {
            body.style.backgroundColor = '#ff9800'; // Bright Orange for prepping systems
            statusDiv.textContent = statusMessages[++statusIndex];
            body.style.transition = 'background-color 0.5s'; // Quick transition
        } else if (countdownTime === 5) {
            body.style.backgroundColor = '#f44336'; // Bright Red for checking fuel levels
            statusDiv.textContent = statusMessages[++statusIndex];
            body.style.transition = 'background-color 0.5s'; // Quick transition
        } else if (countdownTime === 3) {
            body.style.backgroundColor = '#2196f3'; // Bright Blue for systems online
            statusDiv.textContent = statusMessages[++statusIndex];
            body.style.transition = 'background-color 0.5s'; // Quick transition
        } else if (countdownTime === 1) {
            body.style.backgroundColor = '#4caf50'; // Bright Green for engaging thrust
            statusDiv.textContent = statusMessages[++statusIndex];
            body.style.transition = 'background-color 0.5s'; // Quick transition
        } else if (countdownTime === 0) {
            clearInterval(countdownInterval);
            body.style.backgroundColor = 'red'; // Bright Green for liftoff
            statusDiv.textContent = statusMessages[++statusIndex];
            countdownDiv.textContent = 'Liftoff!';
            body.style.transition = 'background-color 1s'; // Smooth transition to liftoff
        }
    }, 1000);
});
