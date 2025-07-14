const HeroSection = () => {
  return (
    <>
      <section className="relative mb-14">
        <div className="p-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-light">
            Nos projets
          </h1>
          <p className="mb-4 max-w-[410px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
            Chez <span className="font-bold">VYO Consulting</span>, chaque
            projet est bien plus qu’une mission : c’est une{" "}
            <span className="font-bold">réponse concrète aux défis réels</span>{" "}
            de nos clients.
          </p>
        </div>
        <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] -bottom-[11rem] -left-[9rem] rounded-full" />
      </section>
    </>
  );
};

export default HeroSection;
