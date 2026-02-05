// World-class scroll animation variants for Framer Motion

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const blurIn = {
  hidden: { 
    opacity: 0, 
    filter: "blur(20px)",
    y: 20
  },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const slideInFromBottom = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const revealFromCenter = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 40
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 0 0 rgba(139, 92, 246, 0)"
  },
  hover: { 
    scale: 1.02, 
    y: -8,
    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const textReveal = {
  hidden: { 
    opacity: 0,
    y: 20,
    filter: "blur(10px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.25, 0.4, 0.25, 1]
    }
  })
};

export const lineGrow = {
  hidden: { 
    scaleX: 0,
    originX: 0
  },
  visible: { 
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const countUp = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Viewport settings for consistent behavior
export const viewportSettings = {
  once: true,
  margin: "-100px",
  amount: 0.2
};

export const viewportSettingsEager = {
  once: true,
  margin: "-50px",
  amount: 0.1
};
