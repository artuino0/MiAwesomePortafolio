const SocialButtons = () => (
  <div className="flex gap-3 mt-3">
    <a href="https://www.linkedin.com/in/arturo-mu%C3%B1oz1994/" target="_blank">
      <button className="px-3 py-2 rounded-xl border hover:text-primary hover:border-primary transition-colors duration-150 ease-in-out">
        <i className="bi bi-linkedin"></i>
      </button>
    </a>
    <a href="https://github.com/artuino0" target="_blank">
      <button className="px-3 py-2 rounded-xl border hover:text-primary hover:border-primary transition-colors duration-150 ease-in-out">
        <i className="bi bi-github"></i>
      </button>
    </a>
    <a href="https://wa.link/ekapdt" target="_blank">
      <button className="px-3 py-2 rounded-xl border hover:text-primary hover:border-primary transition-colors duration-150 ease-in-out">
        <i className="bi bi-whatsapp"></i>
      </button>
    </a>
    <a href="mailto:arturosistemas94@gmail.com" target="_blank">
      <button className="px-3 py-2 rounded-xl border hover:text-primary hover:border-primary transition-colors duration-150 ease-in-out">
        <i className="bi bi-envelope-at"></i>
      </button>
    </a>
  </div>
);

export default SocialButtons;
