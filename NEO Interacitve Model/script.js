document.addEventListener("DOMContentLoaded", () => {
    const asteroid1 = document.getElementById('asteroid1');
    const asteroid2 = document.getElementById('asteroid2');
    const asteroid3 = document.getElementById('asteroid3');
    const orbit1 = document.getElementById('orbit1');
    const orbit2 = document.getElementById('orbit2');
    const orbit3 = document.getElementById('orbit3');
    const labels = document.querySelectorAll('billboard');
    const infoBox = document.getElementById('info-box');

    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;
    const radius1 = 10;
    const radius2 = 14;
    const radius3 = 18;
    let animationFrame;
    let playing = false;

    function rotateAsteroids() {
        if (playing) {
            angle1 += 0.001;  // Speed of asteroid 1
            angle2 += 0.0008;  // Speed of asteroid 2 (slightly slower)
            angle3 += 0.005;  // Speed of asteroid 3 (slowest)

            // Calculate X and Z positions for circular orbit
            const x1 = radius1 * Math.cos(angle1);
            const z1 = radius1 * Math.sin(angle1);
            asteroid1.setAttribute('translation', `${x1} 0 ${z1}`);

            const x2 = radius2 * Math.cos(angle2);
            const z2 = radius2 * Math.sin(angle2);
            asteroid2.setAttribute('translation', `${x2} 0 ${z2}`);

            const x3 = radius3 * Math.cos(angle3);
            const z3 = radius3 * Math.sin(angle3);
            asteroid3.setAttribute('translation', `${x3} 0 ${z3}`);

            // Continue the animation loop
            animationFrame = requestAnimationFrame(rotateAsteroids);
        }
    }

    function playAnimation() {
        playing = true;
        rotateAsteroids();
    }

    function pauseAnimation() {
        playing = false;
        cancelAnimationFrame(animationFrame);
    }

    function toggleOrbits() {
        orbit1.style.display = orbit1.style.display === 'none' ? 'inline' : 'none';
        orbit2.style.display = orbit2.style.display === 'none' ? 'inline' : 'none';
        orbit3.style.display = orbit3.style.display === 'none' ? 'inline' : 'none';
    }

    function toggleLabels() {
        labels.forEach(label => {
            label.style.display = label.style.display === 'none' ? 'inline' : 'none';
        });
    }

    document.getElementById('play').addEventListener('click', playAnimation);
    document.getElementById('pause').addEventListener('click', pauseAnimation);
    document.getElementById('toggle-orbits').addEventListener('click', toggleOrbits);
    document.getElementById('toggle-labels').addEventListener('click', toggleLabels);
});
