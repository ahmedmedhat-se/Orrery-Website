const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('solarSystemContainer').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true; 
controls.enablePan = true;  
controls.enableDamping = true; 
controls.dampingFactor = 0.25;
controls.enableRotate = true; 
const textureLoader = new THREE.TextureLoader();

let isAnimating = true;
function animate() {
    if (isAnimating) {
        requestAnimationFrame(animate);
        // Update TWEEN animations
        TWEEN.update();

        scene.children.forEach(child => {
            if (child.userData.orbitRadius !== undefined && child.userData.isAnimating) {
                child.userData.angle += child.userData.orbitSpeed;
                child.position.x = child.userData.orbitRadius * Math.cos(child.userData.angle);
                child.position.z = child.userData.orbitRadius * Math.sin(child.userData.angle);
                child.rotation.y += 0.005;
            }
        });
        scene.children.forEach(child => {
            if (child.userData.name && child.userData.isAnimating) {
                child.rotation.y += 0.01;
                child.children.forEach(moon => moon.rotation.y += 0.02);
            }
        });

        controls.update();
        renderer.render(scene, camera);
    }
}

function createPlanet(name, size, texturePath, distance, orbitRadius = 0, orbitSpeed = 0, moons = []) {
    const texture = textureLoader.load(texturePath);
    const geometry = new THREE.SphereGeometry(size, 64, 64);
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);

    planet.position.x = distance;
    planet.userData = {
        name: name,
        info: `This is ${name}.`,
        image: texturePath,
        orbitRadius: orbitRadius,
        orbitSpeed: orbitSpeed,
        angle: Math.random() * 2 * Math.PI,
        isAnimating: true
    };

    // Create moons
    moons.forEach(moon => {
        const moonTexture = textureLoader.load(moon.texture);
        const moonGeometry = new THREE.SphereGeometry(moon.size, 32, 32);
        const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        moonMesh.position.x = moon.distance;
        planet.add(moonMesh);
    });

    scene.add(planet);

    return planet;
}

// Create "Orbits"
function createOrbit(radius) {
    const orbitGeometry = new THREE.RingGeometry(radius - 0.05, radius + 0.05, 64);
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2; // Rotate to match the plane of the planets' orbits
    scene.add(orbit);
};

// Saturn Ring Texture URL
const ringTextureUrl = 'https://static.wikia.nocookie.net/roblox/images/9/97/Rings_of_Saturn.png/revision/latest?cb=20191004191542';
function addRings(planet, innerRadius, outerRadius, textureUrl) {
    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 64);
    const ringTexture = textureLoader.load(textureUrl);
    const ringMaterial = new THREE.MeshBasicMaterial({
        map: ringTexture,
        side: THREE.DoubleSide, // So that the ring is visible from both sides
        transparent: true // Ensures that transparency in the ring texture works
    });
    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    planet.add(rings);
}
// Add Saturn's rings after creating Saturn

const sun = createPlanet('Sun', 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FI-mg-yQz6EMny9K9UDWODhEDDVvdeFT9w&s', 0);
const mercury = createPlanet('Mercury', 1.4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigStJVkPvdCOF_7DhrInBMDquWc06SxT8h9WpU8M8ARR7qO30QuVvb3yuOzM-4QFwcTI&usqp=CAU', 15, 15, 0.01);
createOrbit(15);
const venus = createPlanet('Venus', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeT5PSSTPfj5VanNJDA2myhidSh11N1y0bHreVDKZZU4G_jJAou--qWFz-ZHpHdyBmvg&usqp=CAU', 20, 20, 0.007);
createOrbit(20);
const earth = createPlanet('Earth', 2.6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlFHxKMR5KKvpCui5TPy7UAkZ9Zab4Z99ArQz9QqDeWzQWqAwgIRsaK8BVsBy7yor3p4&usqp=CAU', 27, 27, 0.005, [
    { texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKL8WMtlN4z1UI0hse-tuViCdHeJepCQOtZt8aa6Xdjc0dp5lO4A2IRhLdGd-ZJ_zKUY&usqp=CAU', size: 0.6, distance: 5 }
]);
createOrbit(27);
const mars = createPlanet('Mars', 3.2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPG_goTi6Amtt_6tSXtqRt3wgsTWBa4c7OpIKrg7plKcpmaa2PMwDKBWp1XeXFd-hEUj4&usqp=CAU', 35, 35, 0.003, [
    { texture: 'https://th.bing.com/th/id/R.d51be87030431d27d777ea71b8ed9dd0?rik=sZCDv3uobNnu3g&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb3%2fFull_moon.jpeg&ehk=tAcTrFOPFElKOhFlOZjnpxTMgSMahhDjCmsQMwdgBYQ%3d&risl=&pid=ImgRaw&r=0', size: 0.4, distance: 2 }
]);
createOrbit(35);
const jupiter = createPlanet('Jupiter', 5.4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0HlmjlE958YlPV54J1ymlAxm7SQ4TLV-CCdDdJeolelvEIj0jZfmTYuxcFXQIbcInBc&usqp=CAU', 50, 50, 0.002);
createOrbit(50);
const saturn = createPlanet('Saturn', 2.6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEBAq2y8p5pY3Q3JR4DE-fAiyFrXeGTj6VA&s', 60, 60, 0.0015);
addRings(saturn, 3, 5, ringTextureUrl);
createOrbit(60);
const uranus = createPlanet('Uranus', 2.4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rhjZ27RTbfdD4d6psFXYlLNNFMy7smh7qA&s', 70, 70, 0.001);
createOrbit(70);
const neptune = createPlanet('Neptune', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKb5P5BdhAXabrlPnABFAq16UdyeCqwsZbQ4UkcBZu75sbuYxOl3M-nFhGmyrpqpXer4&usqp=CAU', 80, 80, 0.0001);
createOrbit(80);
// Done Creating "Celestial Bodies"
animate();

// Creating Random/Floating "Asteroids"
const asteroidTexture = textureLoader.load('https://as1.ftcdn.net/v2/jpg/04/74/08/22/1000_F_474082237_1XCEbnRln2L2Rd8LdikqhKDv6PqjgsoZ.jpg');
function createRandomAsteroids(count, radius) {
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(Math.random() * 2 - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
   
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshPhongMaterial({ map: asteroidTexture });
        
        const asteroid = new THREE.Mesh(geometry, material);
        asteroid.position.set(x, y, z);
        scene.add(asteroid);
    }
};
createRandomAsteroids(100, 100);
// End Of Creating Random/Floating "Asteroids"

// Creating "Asteroid Belt (Between Mars / Jupiter)"
function createAsteroidBelt(count, innerRadius, outerRadius) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * 2 * Math.PI; // Random initial angle
        const distance = Math.random() * (outerRadius - innerRadius) + innerRadius; // Random distance within the belt

        const geometry = new THREE.SphereGeometry(0.3, 15, 15);
        const material = new THREE.MeshPhongMaterial({ map: asteroidTexture });
        const asteroid = new THREE.Mesh(geometry, material);

        asteroid.position.set(distance * Math.cos(angle), 0, distance * Math.sin(angle)); // Initial position

        // Store orbit data in userData
        asteroid.userData = {
            orbitRadius: distance,
            orbitSpeed: Math.random() * 0.0002 + 0.0001, // Random speed for variety
            angle: angle
        };
        scene.add(asteroid);
    }
};
createAsteroidBelt(200, 36, 45);
// Add asteroid belt between Mars and Jupiter (36 to 45 units from the Sun)

// Creating Random/Floating "Stars - Starfield"
function createStarField(count, radius) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const inclination = Math.acos(Math.random() * 2 - 1); 
        const x = radius * Math.sin(inclination) * Math.cos(angle);
        const y = radius * Math.sin(inclination) * Math.sin(angle);
        const z = radius * Math.cos(inclination);

        const geometry = new THREE.SphereGeometry(0.05, 8, 8); 
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
        });

        const star = new THREE.Mesh(geometry, material);
        star.position.set(x, y, z);
        scene.add(star);
    }
};
createStarField(10000, 100); 
// End Of Creating Random/Floating "Stars - Starfield"

camera.position.z = 50;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const planetName = document.getElementById('planetName');
const planetInfo = document.getElementById('planetInfo');

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const detailedInfoBox = document.getElementById('detailedInfoBox');
const detailedPlanetName = document.getElementById('detailedPlanetName');
const detailedPlanetInfo = document.getElementById('detailedPlanetInfo');
const detailedPlanetImage = document.getElementById('detailedPlanetImage');

let lastClickedObject = null;
function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        if (intersectedObject.userData.name) {
            // Stop animation for the previously clicked object
            if (lastClickedObject) {
                lastClickedObject.userData.isAnimating = true;
            }

            // Stop animation for the newly clicked object
            intersectedObject.userData.isAnimating = false;
            lastClickedObject = intersectedObject;

            detailedInfoBox.style.display = 'block';
            detailedPlanetName.innerText = intersectedObject.userData.name;
            detailedPlanetInfo.innerText = intersectedObject.userData.info;
            detailedPlanetImage.src = intersectedObject.userData.image || '';

            // Smoothly zoom the camera to focus on the clicked object
            new TWEEN.Tween(camera.position)
                .to({
                    x: intersectedObject.position.x + 5,
                    y: intersectedObject.position.y + 5,
                    z: intersectedObject.position.z + 10
                }, 1500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();

            new TWEEN.Tween(controls.target)
                .to({
                    x: intersectedObject.position.x,
                    y: intersectedObject.position.y,
                    z: intersectedObject.position.z
                }, 1500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => controls.update())
                .start();
        }
    } else {
        detailedInfoBox.style.display = 'none';
    }
};

// Animations Of The Model - Starts
document.getElementById('startAnimation').addEventListener('click', () => {
    isAnimating = true;
    animate(); 
});
document.getElementById('stopAnimation').addEventListener('click', () => {
    isAnimating = false;
});

document.getElementById('zoomIn').addEventListener('click', () => {
    camera.position.z -= 5; 
    controls.update();
});

document.getElementById('zoomOut').addEventListener('click', () => {
    camera.position.z += 5; 
    controls.update();
});

document.getElementById('topView').addEventListener('click', () => {
    camera.position.set(0, 50, 0);
    camera.lookAt(0, 0, 0);
    controls.update();
});

document.getElementById('resumeAnimation').addEventListener('click', () => {
    if (lastClickedObject) {
        lastClickedObject.userData.isAnimating = true;
        lastClickedObject = null; // Clear the reference to allow for another click if needed
    }
});
// Animations Of The Model - Ends