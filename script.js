// AOS (Animate On Scroll) Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with data-aos attribute
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => observer.observe(el));

    // Create confetti effect
    createConfetti();
    
    // Add sparkle cursor effect
    addSparkleEffect();
});

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    if (!confettiContainer) return;

    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff6bff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${3 + Math.random() * 3}s linear infinite`;
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.zIndex = '10';
        confettiContainer.appendChild(confetti);
    }

    // Add CSS for fall animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Sparkle cursor effect
function addSparkleEffect() {
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.9) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    });

    const style = document.createElement('style');
    style.textContent = `
        .sparkle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, white, transparent);
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle-fade 1s ease-out;
            z-index: 9999;
        }
        @keyframes sparkle-fade {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Fireworks for surprise page
function startCelebration() {
    // Start fireworks and slideshow immediately
    launchFireworks();
    startPhotoSlideshow();
}

function startPhotoSlideshow() {
    // Photo list with beautiful captions - ALL 42 photos!
    const photos = [
        { src: '1.jpg', caption: '💖 Every moment with you is precious' },
        { src: 'm1.jpg', caption: '✨ Your smile lights up the world' },
        { src: '3.jpg', caption: '🌟 Together we create magic' },
        { src: 'm2.jpg', caption: '🎭 Partners in every adventure' },
        { src: '4.jpg', caption: '🌈 You bring color to my life' },
        { src: 'm3.jpg', caption: '💫 Your friendship is a blessing' },
        { src: 'm4.jpg', caption: '🎪 Making memories that last forever' },
        { src: 'm5.jpg', caption: '🌺 Beautiful inside and out' },
        { src: 'm6.jpg', caption: '🎨 You paint my life with joy' },
        { src: 'm7.jpg', caption: '🦋 Free spirit, beautiful soul' },
        { src: 'IMG-20251115-WA0006.jpg', caption: '💝 Grateful for you every day' },
        { src: 'IMG-20251115-WA0007.jpg', caption: '🌸 Your kindness knows no bounds' },
        { src: 'IMG-20251115-WA0008.jpg', caption: '🎉 Celebrating you today and always' },
        { src: 'IMG-20251115-WA0009.jpg', caption: '💕 Best friend forever and ever' },
        { src: 'IMG-20251115-WA0010.jpg', caption: '🌹 You deserve all the happiness' },
        { src: 'IMG-20251115-WA0011.jpg', caption: '⭐ Shining bright like a diamond' },
        { src: 'IMG-20251115-WA0012.jpg', caption: '🎊 Here\'s to another amazing year' },
        { src: 'IMG-20251115-WA0013.jpg', caption: '🌻 Sunflower soul, always blooming' },
        { src: 'IMG-20251115-WA0014.jpg', caption: '💗 Love you more than words can say' },
        { src: 'IMG-20251115-WA0015.jpg', caption: '🎈 May all your dreams come true' },
        { src: 'IMG-20251115-WA0016.jpg', caption: '🌙 You are one in a million' },
        { src: 'IMG-20251115-WA0017.jpg', caption: '🎀 Sweet, caring, and amazing' },
        { src: 'IMG-20251115-WA0018.jpg', caption: '💐 A friend like no other' },
        { src: 'IMG-20251115-WA0019.jpg', caption: '🦄 Magical and wonderful you' },
        { src: 'IMG-20251115-WA0020.jpg', caption: '🌟 Keep shining, superstar' },
        { src: 'IMG-20251115-WA0021.jpg', caption: '💖 You make life beautiful' },
        { src: 'IMG-20251115-WA0022.jpg', caption: '🎵 Dancing through life together' },
        { src: 'IMG-20251115-WA0023.jpg', caption: '🌺 Forever in my heart' },
        { src: 'IMG-20251115-WA0024.jpg', caption: '✨ Happy Birthday, Beautiful!' },
        { src: 'IMG-20251115-WA0025.jpg', caption: '🎂 Today we celebrate YOU!' },
        { src: 'IMG-20251115-WA0026.jpg', caption: '💞 Thank you for being amazing' },
        { src: 'IMG-20251115-WA0027.jpg', caption: '🌈 Every day is brighter with you' },
        { src: 'IMG-20251115-WA0028.jpg', caption: '🎪 Adventures are better together' },
        { src: 'IMG-20251115-WA0029.jpg', caption: '💫 You inspire me every day' },
        { src: 'IMG-20251115-WA0030.jpg', caption: '🌸 Blooming beautifully always' },
        { src: 'IMG-20251115-WA0031.jpg', caption: '🎨 Creating masterpieces together' },
        { src: 'IMG-20251115-WA0032.jpg', caption: '💝 Cherishing every moment' },
        { src: 'IMG-20251115-WA0033.jpg', caption: '🦋 Graceful and wonderful' },
        { src: 'IMG-20251115-WA0034.jpg', caption: '🌟 You light up my world' },
        { src: 'IMG-20251115-WA0035.jpg', caption: '💕 Our bond is unbreakable' },
        { src: 'IMG-20251115-WA0036.jpg', caption: '🎉 Cheers to you, bestie!' },
        { src: 'IMG-20251115-WA0037.jpg', caption: '💖 Best friend goals achieved!' }
    ];
    
    const modal = document.getElementById('slideshowModal');
    const image = document.getElementById('slideshowImage');
    const caption = document.getElementById('slideshowCaption');
    const progressBar = document.getElementById('progressBar');
    const music = document.getElementById('backgroundMusic');
    
    // Show modal
    modal.classList.add('active');
    
    // Start dynamic effects
    startSlideshowEffects();
    
    // Start music
    music.volume = 0.6;
    music.play();
    
    // Wait for music metadata to load
    music.addEventListener('loadedmetadata', function() {
        const totalPhotos = photos.length; // 42 photos
        const timePerPhoto = 1000; // Exactly 1 second per photo (1000ms)
        
        console.log(`Photos: ${totalPhotos} | Time per photo: 1 second`);
        
        let currentIndex = 0;
        const animations = ['slideIn', 'zoomIn', 'flipIn', 'slideFromLeft', 'slideFromRight', 'rotateIn', 'fadeScale'];
        
        function showNextPhoto() {
            if (currentIndex >= totalPhotos || music.ended) {
                // End of slideshow - stop music and show final message
                setTimeout(() => {
                    closeSlideshow();
                    showFinalMessage();
                }, 1000);
                return;
            }
            
            const photo = photos[currentIndex];
            
            // Change image immediately with animation
            image.src = photo.src;
            caption.textContent = photo.caption;
            
            // Apply animation
            const randomAnim = animations[currentIndex % animations.length];
            image.style.animation = `${randomAnim} 0.6s ease-out`;
            
            // Update progress bar
            const progress = ((currentIndex + 1) / totalPhotos) * 100;
            progressBar.style.width = progress + '%';
            
            currentIndex++;
            
            // Next photo after exactly 1 second
            setTimeout(showNextPhoto, timePerPhoto);
        }
        
        // Start slideshow immediately
        showNextPhoto();
        
        // Sync progress bar with actual music time
        const progressInterval = setInterval(() => {
            if (music.paused || music.ended) {
                clearInterval(progressInterval);
                return;
            }
            const progress = (music.currentTime / music.duration) * 100;
            progressBar.style.width = progress + '%';
        }, 100);
        
        // Auto-close when song ends
        music.addEventListener('ended', function() {
            clearInterval(progressInterval);
            setTimeout(() => {
                closeSlideshow();
                showFinalMessage();
            }, 1000);
        }, { once: true });
    }, { once: true });
    
    // If metadata already loaded (cached)
    if (music.readyState >= 1) {
        music.dispatchEvent(new Event('loadedmetadata'));
    }
}

function closeSlideshow() {
    const modal = document.getElementById('slideshowModal');
    const music = document.getElementById('backgroundMusic');
    
    modal.classList.remove('active');
    music.pause();
    music.currentTime = 0;
    
    // Clear effect intervals
    if (window.heartInterval) clearInterval(window.heartInterval);
    if (window.sparkleInterval) clearInterval(window.sparkleInterval);
}

// Dynamic visual effects for slideshow
function startSlideshowEffects() {
    const heartsContainer = document.getElementById('floatingHearts');
    const sparklesContainer = document.getElementById('sparklesContainer');
    
    // Create floating hearts
    window.heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['❤️', '💖', '💝', '💗', '💓'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 800);
    
    // Create sparkles around the image
    window.sparkleInterval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-particle';
            
            const centerX = 50;
            const centerY = 40;
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 30 + 10;
            
            sparkle.style.left = centerX + '%';
            sparkle.style.top = centerY + '%';
            sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'vw');
            sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'vh');
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 3000);
        }
    }, 300);
}

function showFinalMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(255,107,107,0.95), rgba(255,141,83,0.95));
        padding: 60px;
        border-radius: 30px;
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
        z-index: 100000;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        animation: celebrate-pop 0.5s ease-out;
        max-width: 90%;
    `;
    message.innerHTML = `
        🎉 HAPPY BIRTHDAY MEHAK! 🎉<br>
        <span style="font-size: 1.8rem; margin-top: 20px; display: block;">
            You are loved more than you know! 💖<br>
            May this year bring you endless joy! ✨<br>
            Forever grateful for you! 🌟
        </span>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transition = 'all 0.5s';
        message.style.opacity = '0';
        message.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => message.remove(), 500);
    }, 6000);
}

function launchFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const particles = [];

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.targetY = Math.random() * canvas.height * 0.5;
            this.speed = 3;
            this.angle = Math.PI / 2;
            this.velocity = { x: 0, y: -this.speed };
            this.hue = Math.random() * 360;
        }

        update() {
            this.y += this.velocity.y;
            
            if (this.y <= this.targetY) {
                this.explode();
                return false;
            }
            return true;
        }

        explode() {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(this.x, this.y, this.hue));
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
            ctx.fill();
        }
    }

    class Particle {
        constructor(x, y, hue) {
            this.x = x;
            this.y = y;
            this.hue = hue;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = Math.random() * 5 + 2;
            this.velocity = {
                x: Math.cos(this.angle) * this.speed,
                y: Math.sin(this.angle) * this.speed
            };
            this.life = 100;
            this.decay = Math.random() * 0.5 + 0.5;
        }

        update() {
            this.velocity.y += 0.1;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.life -= this.decay;
            return this.life > 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.life / 100})`;
            ctx.fill();
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.1) {
            fireworks.push(new Firework());
        }

        for (let i = fireworks.length - 1; i >= 0; i--) {
            if (!fireworks[i].update()) {
                fireworks.splice(i, 1);
            } else {
                fireworks[i].draw();
            }
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            if (!particles[i].update()) {
                particles.splice(i, 1);
            } else {
                particles[i].draw();
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    // Play celebration sound effect (silent fallback)
    playBirthdayMusic();

    // Show celebration message
    showCelebrationMessage();
}

function playBirthdayMusic() {
    // Create AudioContext for celebration sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create a simple celebratory tune
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99]; // C, D, E, F, G
    let noteIndex = 0;
    
    function playNote() {
        if (noteIndex < notes.length * 3) {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = notes[noteIndex % notes.length];
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            
            noteIndex++;
            setTimeout(playNote, 200);
        }
    }
    
    playNote();
}

function showCelebrationMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(255,107,107,0.9), rgba(255,141,83,0.9));
        padding: 50px;
        border-radius: 30px;
        font-size: 3rem;
        font-weight: bold;
        color: white;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        animation: celebrate-pop 0.5s ease-out;
    `;
    message.innerHTML = `
        🎉 HAPPY BIRTHDAY MEHAK! 🎉<br>
        <span style="font-size: 1.5rem; margin-top: 20px; display: block;">
            You are absolutely amazing! ✨
        </span>
    `;
    
    document.body.appendChild(message);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes celebrate-pop {
            0% { transform: translate(-50%, -50%) scale(0); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        message.style.animation = 'celebrate-pop 0.5s ease-out reverse';
        setTimeout(() => message.remove(), 500);
    }, 4000);
}

// Add floating hearts animation
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            bottom: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 30 + 20}px;
            opacity: ${Math.random() * 0.5 + 0.5};
            animation: float-up ${Math.random() * 3 + 3}s linear;
            pointer-events: none;
            z-index: 1000;
        `;
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 2000);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Start floating hearts on memory and surprise pages
if (window.location.pathname.includes('memories.html') || 
    window.location.pathname.includes('surprise.html')) {
    createFloatingHearts();
}

// Add page transition effect
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
});

// Birthday countdown (if you want to add a countdown)
function updateCountdown() {
    const birthday = new Date('2024-12-15'); // Change to actual birthday
    const now = new Date();
    const diff = birthday - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    return "It's your special day!";
}

// Make images in gallery expandable
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => modal.remove());
    });
});

console.log('🎉 Happy Birthday Mehak! This website was made with love! 💖');