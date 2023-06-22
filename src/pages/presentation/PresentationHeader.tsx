const PresentationHeader = () => (
  <div className="z-10 lg:text-8xl text-5xl font-bold select-none">
    HELLO, <br /> I'M{" "}
    <span className="text-primary">
      ARTURO <br />
      <div className="flex md:items-center md:flex-row flex-col">
        <p>MUÑOZ</p>
        <div className="text-3xl ml-5 text-right text-white hidden md:block">
          <span className="text-xl relative liner">FULLS STACK </span>
          <br /> DEVELOPER
        </div>
      </div>
    </span>
    <div className="text-3xl md:ml-5 text-left text-white md:hidden">
      <span className="text-xl relative liner">FULLS STACK </span>
      <br /> DEVELOPER
    </div>
  </div>
);

export default PresentationHeader;
