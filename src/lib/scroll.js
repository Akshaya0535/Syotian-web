let lenisInstance = null;

export const setLenis = (lenis) => {
  lenisInstance = lenis;
};

export const scrollToId = (id) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(id, { offset: -72, duration: 1.5 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToTop = () => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.5 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
