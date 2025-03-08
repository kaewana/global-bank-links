
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const revealFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const revealFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Intersection Observer helper to trigger animations on scroll
export const createScrollObserver = (
  elementSelector: string, 
  visibleClass: string = 'visible'
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll(elementSelector);
  elements.forEach(element => observer.observe(element));

  return () => {
    elements.forEach(element => observer.unobserve(element));
  };
};
