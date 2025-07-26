document.addEventListener('DOMContentLoaded', function() {
    // Création des coeurs flottants
    createFloatingHearts();
    
    // Effet de scintillement diamant
    setupDiamondEffect();
    
    // Effet de survol des boutons
    setupButtonEffects();
    
    // Animation de la lettre
    setupLetterAnimation();
    
    // Effet de confettis pour les boutons
    setupConfettiEffects();
    
    // Musique d'ambiance optionnelle
    setupBackgroundMusic();
});

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const colors = ['#ff2d4d', '#ff6b8b', '#ff8fab', '#ffb3c6', '#ffd700'];
    const emojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '💖', '💗', '💓', '💞'];
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.1;
        heart.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        heart.style.zIndex = '-1';
        
        // Ajout d'une animation CSS dynamique
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translateY(0) rotate(${Math.random() * 360}deg);
                    opacity: ${Math.random() * 0.5 + 0.1};
                }
                50% {
                    opacity: ${Math.random() * 0.7 + 0.3};
                }
                100% {
                    transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        container.appendChild(heart);
    }
}

function setupDiamondEffect() {
    document.addEventListener('mousemove', function(e) {
        const diamond = document.querySelector('.diamond-sparkle');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        diamond.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
}

function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            
            // Ajout d'un effet de lumière
            const light = document.createElement('div');
            light.className = 'button-light';
            light.style.position = 'absolute';
            light.style.top = '0';
            light.style.left = '0';
            light.style.width = '100%';
            light.style.height = '100%';
            light.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)';
            light.style.borderRadius = '50px';
            light.style.opacity = '0';
            light.style.transition = 'opacity 0.3s ease';
            this.appendChild(light);
            
            setTimeout(() => {
                light.style.opacity = '0.6';
            }, 10);
            
            setTimeout(() => {
                light.style.opacity = '0';
                setTimeout(() => {
                    if (this.contains(light)) {
                        this.removeChild(light);
                    }
                }, 300);
            }, 500);
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = this.classList.contains('royal-btn') ? 
                '0 5px 15px rgba(138, 79, 255, 0.4)' : 
                '0 5px 15px rgba(255, 45, 77, 0.4)';
        });
    });
}

function setupLetterAnimation() {
    const letter = document.querySelector('.love-letter');
    let isTilted = false;
    
    letter.addEventListener('click', function() {
        if (isTilted) {
            this.style.transform = 'rotateY(5deg) rotateX(2deg) translateY(-5px)';
        } else {
            this.style.transform = 'rotateY(-5deg) rotateX(-2deg) translateY(-5px)';
        }
        isTilted = !isTilted;
    });
}

function setupConfettiEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Création de confettis
            createConfetti(this);
            
            // Redirection après un délai pour voir les confettis
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 1000);
        });
    });
}

function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#ff2d4d', '#ffd700', '#8a4fff', '#ffffff', '#ff8fab'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = rect.left + (rect.width / 2) + 'px';
        confetti.style.top = rect.top + 'px';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.zIndex = '1000';
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { 
                transform: `translate(0, 0) rotate(0deg)`,
                opacity: 1 
            },
            { 
                transform: `translate(${(Math.random() - 0.5) * 200}px, ${Math.random() * 200}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0 
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
            fill: 'forwards'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

function setupBackgroundMusic() {
    // Optionnel: musique d'ambiance
    const music = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    music.loop = true;
    music.volume = 0.3;
    
    // Ajout d'un bouton pour activer/désactiver la musique
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🎵 Activer la musique';
    musicButton.style.position = 'fixed';
    musicButton.style.bottom = '20px';
    musicButton.style.right = '20px';
    musicButton.style.zIndex = '1000';
    musicButton.style.padding = '0.5rem 1rem';
    musicButton.style.borderRadius = '50px';
    musicButton.style.border = 'none';
    musicButton.style.background = 'var(--royal-purple)';
    musicButton.style.color = 'white';
    musicButton.style.cursor = 'pointer';
    musicButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    
    let isPlaying = false;
    
    musicButton.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            this.innerHTML = '🎵 Activer la musique';
        } else {
            music.play();
            this.innerHTML = '🔇 Désactiver la musique';
        }
        isPlaying = !isPlaying;
    });
    
    document.body.appendChild(musicButton);
}

// Fonction pour la galerie
function setupGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Active le bouton sélectionné
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-type') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Fonction pour le diaporama
function setupSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Boutons précédent/suivant
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }
    
    // Auto-diaporama
    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// Initialisation des fonctions si on est sur la page galerie
if (window.location.pathname.includes('galerie.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        setupGalleryFilter();
        setupSlideshow();
    });
}

/* ---------------------------- */
/* FONCTIONS BONUS SUPPLÉMENTAIRES */
/* ---------------------------- */

// 1. Pluie de pétales de rose
function createRosePetals() {
    const container = document.createElement('div');
    container.className = 'rose-petals';
    document.body.appendChild(container);
}

// 2. Lumière dorée qui suit la souris
function setupGoldenLight() {
    const light = document.createElement('div');
    light.className = 'gold-light';
    document.body.appendChild(light);
    
    document.addEventListener('mousemove', (e) => {
        light.style.left = e.clientX + 'px';
        light.style.top = e.clientY + 'px';
        light.style.opacity = '1';
    });
    
    document.addEventListener('mouseout', () => {
        light.style.opacity = '0';
    });
}

// 3. Texte flottant romantique
function createFloatingText(text, x, y) {
    const floatingText = document.createElement('div');
    floatingText.className = 'floating-text';
    floatingText.textContent = text;
    floatingText.style.left = x + 'px';
    floatingText.style.top = y + 'px';
    
    // Variantes de couleurs
    const colors = ['#ff6b8b', '#a682ff', '#ff2d4d', '#ff8fab'];
    floatingText.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(floatingText);
    
    // Supprime l'élément après l'animation
    setTimeout(() => {
        floatingText.remove();
    }, 4000);
}

// 4. Bouton surprise
function setupSurpriseButton() {
    const surpriseBtn = document.createElement('button');
    surpriseBtn.className = 'surprise-btn';
    surpriseBtn.innerHTML = '💝';
    surpriseBtn.title = 'Clique pour une surprise !';
    document.body.appendChild(surpriseBtn);
    
    surpriseBtn.addEventListener('click', () => {
        // Effet de flash
        const flash = document.createElement('div');
        flash.className = 'romantic-flash';
        document.body.appendChild(flash);
        
        // Animation du flash
        flash.animate([
            { opacity: 0 },
            { opacity: 0.8 },
            { opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        // Cœur battant
        const heart = document.createElement('div');
        heart.className = 'heart-beat';
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        
        // Supprime les éléments après l'animation
        setTimeout(() => {
            flash.remove();
            heart.remove();
        }, 1000);
        
        // Crée des textes flottants
        const messages = [
            "Je t'aime Fabibi !",
            "Tu es magnifique",
            "Ma reine de beauté",
            "Pour toi mon amour",
            "❤️ Fabibi ❤️",
            "Toujours dans mon cœur"
        ];
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const message = messages[Math.floor(Math.random() * messages.length)];
                createFloatingText(message, x, y);
            }, i * 300);
        }
        
        // Crée un baiser volant
        createFlyingKiss();
    });
}

// 5. Baiser volant
function createFlyingKiss() {
    const kiss = document.createElement('div');
    kiss.className = 'flying-kiss';
    kiss.innerHTML = '💋';
    
    // Position de départ aléatoire
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50;
    
    // Position d'arrivée aléatoire
    const endX = (Math.random() - 0.5) * 200;
    const endY = -(Math.random() * 300 + 100);
    
    kiss.style.setProperty('--end-x', endX + 'px');
    kiss.style.setProperty('--end-y', endY + 'px');
    kiss.style.left = startX + 'px';
    kiss.style.top = startY + 'px';
    
    document.body.appendChild(kiss);
    
    // Supprime après l'animation
    setTimeout(() => {
        kiss.remove();
    }, 3000);
}

// 6. Fond étoilé
function createStarryBackground() {
    const container = document.createElement('div');
    container.className = 'starry-bg';
    document.body.appendChild(container);
    
    // Crée 100 étoiles
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Position aléatoire
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        // Taille aléatoire
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Délai d'animation aléatoire
        star.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(star);
    }
}

// 7. Message secret aléatoire
function showSecretMessage() {
    const messages = [
        "Fabibi, tu es l'amour de ma vie",
        "Chaque jour avec toi est un cadeau",
        "Ton sourire illumine mes journées",
        "Je t'aimerai pour l'éternité",
        "Tu es la plus belle à mes yeux",
        "Mon cœur bat uniquement pour toi",
        "Tu es ma raison de vivre"
    ];
    
    const message = document.createElement('div');
    message.className = 'secret-message';
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.body.appendChild(message);
    
    // Affiche le message
    setTimeout(() => {
        message.style.opacity = '1';
    }, 100);
    
    // Cache le message après 3 secondes
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 3000);
}

// 8. Feu d'artifice romantique
function createFirework(x, y) {
    const colors = ['#ff6b8b', '#a682ff', '#ff2d4d', '#ffd700', '#ffffff'];
    const particles = 30;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(particle);
        
        // Animation
        const angle = (Math.PI * 2) * (i / particles);
        const velocity = 2 + Math.random() * 3;
        const lifetime = 1000 + Math.random() * 500;
        
        const anim = particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1 
            },
            { 
                transform: `translate(${Math.cos(angle) * velocity * 100}px, ${Math.sin(angle) * velocity * 100}px) scale(0)`,
                opacity: 0 
            }
        ], {
            duration: lifetime,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        });
        
        anim.onfinish = () => {
            particle.remove();
        };
    }
}

// 9. Effet de vibration romantique
function romanticVibration(element, duration) {
    element.classList.add('romantic-vibration');
    setTimeout(() => {
        element.classList.remove('romantic-vibration');
    }, duration);
}

// 10. Transition entre pages
function setupPageTransition() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    
    // Cache la transition au chargement
    setTimeout(() => {
        transition.style.transform = 'scaleY(0)';
    }, 50);
    
    // Gère les clics sur les liens
    document.querySelectorAll('a').forEach(link => {
        if (link.href && !link.href.startsWith('javascript:')) {
            link.addEventListener('click', (e) => {
                if (link.target !== '_blank' && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    transition.style.transform = 'scaleY(1)';
                    
                    setTimeout(() => {
                        window.location.href = link.href;
                    }, 600);
                }
            });
        }
    });
}

// 11. Effet de chargement
function setupLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-hearts';
    
    loadingScreen.innerHTML = `
        <div class="hearts-container">
            <div class="heart">❤️</div>
            <div class="heart">💖</div>
            <div class="heart">💗</div>
        </div>
        <p>Chargement de l'amour...</p>
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Cache l'écran de chargement quand la page est prête
    window.addEventListener('load', () => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    });
}

// 12. Initialisation des effets bonus
function initBonusEffects() {
    createRosePetals();
    setupGoldenLight();
    setupSurpriseButton();
    createStarryBackground();
    setupPageTransition();
    setupLoadingScreen();
    
    // Message secret aléatoire toutes les 30 secondes
    setInterval(showSecretMessage, 30000);
    
    // Feu d'artifice aléatoire
    setInterval(() => {
        if (Math.random() > 0.7) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.8;
            createFirework(x, y);
        }
    }, 5000);
    
    // Clic sur le corps de la page crée un coeur
    document.body.addEventListener('click', (e) => {
        if (e.target.className !== 'surprise-btn') {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = '2rem';
            heart.style.transform = 'translate(-50%, -50%) scale(0)';
            heart.style.animation = 'heart-pop 1s ease-out forwards';
            heart.style.zIndex = '100';
            heart.style.pointerEvents = 'none';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    });
}

// Ajout de l'animation pour les coeurs au clic
const style = document.createElement('style');
style.innerHTML = `
@keyframes heart-pop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}
`;
document.head.appendChild(style);

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // ... (votre code existant)
    
    // Initialise les effets bonus
    initBonusEffects();
    
    // Vibrations romantiques aléatoires
    setInterval(() => {
        if (Math.random() > 0.8) {
            const elements = document.querySelectorAll('.message-card, .love-letter, .btn');
            if (elements.length > 0) {
                const randomElement = elements[Math.floor(Math.random() * elements.length)];
                romanticVibration(randomElement, 1000);
            }
        }
    }, 5000);
});

// Fonction pour la galerie (existant)
function setupGalleryFilter() {
    // ... (votre code existant)
    
    // Ajout d'un effet spécial au survol des images
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (Math.random() > 0.7) {
                createFloatingText('Magnifique !', 
                    item.getBoundingClientRect().left + item.offsetWidth/2, 
                    item.getBoundingClientRect().top);
            }
        });
    });
}