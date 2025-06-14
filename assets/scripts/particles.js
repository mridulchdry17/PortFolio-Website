// A very simple particle animation effect for the hero background.
// This is a minimal example; for more complex/robust effects,
// consider using a library like particles.js or tsParticles.

document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;

    const numParticles = 50; // Number of particles
    const particles = [];

    // Create particles
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * particlesContainer.offsetWidth,
            y: Math.random() * particlesContainer.offsetHeight,
            vx: (Math.random() - 0.5) * 0.5, // Small random velocity
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1, // Size between 1 and 4px
            opacity: Math.random() * 0.7 + 0.3 // Opacity between 0.3 and 1
        });
    }

    function animateParticles() {
        particles.forEach(p => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Boundary checking (wrap around)
            if (p.x < 0 || p.x > particlesContainer.offsetWidth) p.vx *= -1;
            if (p.y < 0 || p.y > particlesContainer.offsetHeight) p.vy *= -1;
            
            // Apply new position and size/opacity
            p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
            p.element.style.width = `${p.size}px`;
            p.element.style.height = `${p.size}px`;
            p.element.style.opacity = p.opacity;
        });
        requestAnimationFrame(animateParticles);
    }

    // Add a basic style for particles (can be in CSS too)
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .particle {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.7); /* White particles */
            border-radius: 50%;
            pointer-events: none; /* Do not interfere with mouse events */
        }
    `;
    document.head.appendChild(styleSheet);


    animateParticles();
}); 