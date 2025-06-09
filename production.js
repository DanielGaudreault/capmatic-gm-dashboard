$(document).ready(function() {
    // Production Chart
    const ctx = document.getElementById('productionChart').getContext('2d');
    const productionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Bottles Per Minute',
                data: [120, 130, 110, 140, 135, 150],
                borderColor: '#3b82f6',
                fill: false
            }]
        },
        options: { responsive: true }
    });

    // 3D Viewer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3dViewer') });
    renderer.setSize(300, 300);
    const geometry = new THREE.BoxGeometry(); // Placeholder for machine model
    const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const machine = new THREE.Mesh(geometry, material);
    scene.add(machine);
    camera.position.z = 5;
    function animate() {
        requestAnimationFrame(animate);
        machine.rotation.x += 0.01;
        machine.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // GM's Focus
    const focusMessages = ['Keep the fillers at peak performance!', 'Let’s optimize the labelers today!'];
    $('#gmFocus').text(focusMessages[Math.floor(Math.random() * focusMessages.length)]);
});
