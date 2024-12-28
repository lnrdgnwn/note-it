function Quote() {
  return (
    <section className="container flex items-center justify-center pb-20">
      <blockquote className="flex flex-col gap-2 text-inter bg-primary rounded-2xl w-full">
        <h2 className="text-white text-inter text-[32px] lg:text-4xl px-12 pt-8 lg:pt-12 pb-8">
          My Second Brain.
        </h2>
        <h3 className="text-white text-inter font-thin text-[24px] lg:text-3xl px-12 leading-[32px] ">
          "Note-it empowers me to stay productive and organized, becoming my
          trusted second brain for capturing ideas, tasks, and information."
        </h3>
        <div className="flex items-center w-full px-12 py-8 lg:p-12 gap-6">
          <img
            src="images/quote/photo.jpg"
            alt="Author Icon"
            className="w-16 h-16 rounded-full object-cover "
          />
          <p className="text-white text-inter text-base lg:text-2xl font-semibold">
            Leonardo Gunawan
          </p>
        </div>
      </blockquote>
    </section>
  );
}

export default Quote;
