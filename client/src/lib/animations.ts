export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { 
    scale: 1.05, 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// 🌟 INCREDIBLE NEW ANIMATIONS 🌟

export const heartBeat = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const sparkleFloat = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [0, 180, 360],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const romanticPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(255, 105, 180, 0.4)",
      "0 0 40px rgba(255, 105, 180, 0.8)",
      "0 0 20px rgba(255, 105, 180, 0.4)"
    ],
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const loveText = {
  initial: { 
    opacity: 0, 
    scale: 0.5, 
    rotateZ: -180 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    rotateZ: 0,
    transition: {
      duration: 1.2,
      ease: "backOut",
      type: "spring",
      stiffness: 200
    }
  }
};

export const magicAppear = {
  initial: { 
    opacity: 0, 
    scale: 0,
    rotateY: 180
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "backOut",
      type: "spring"
    }
  }
};

export const danceAnimation = {
  animate: {
    rotateZ: [0, 5, -5, 0],
    scale: [1, 1.05, 1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rainbowGlow = {
  animate: {
    filter: [
      "hue-rotate(0deg) brightness(1)",
      "hue-rotate(90deg) brightness(1.2)",
      "hue-rotate(180deg) brightness(1)",
      "hue-rotate(270deg) brightness(1.2)",
      "hue-rotate(360deg) brightness(1)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const butterflEffect = {
  animate: {
    x: [-20, 20, -20],
    y: [-10, -30, -10],
    rotateZ: [0, 10, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const starTwinkle = {
  animate: {
    opacity: [0, 1, 0],
    scale: [0.5, 1.5, 0.5],
    rotateZ: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const loveWave = {
  animate: {
    background: [
      "linear-gradient(45deg, #ff69b4, #ff1493)",
      "linear-gradient(135deg, #ff1493, #dc143c)",
      "linear-gradient(225deg, #dc143c, #ff69b4)",
      "linear-gradient(315deg, #ff69b4, #ff1493)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};
