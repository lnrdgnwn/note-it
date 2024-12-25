function Quote() {
  return (
    <section className="container flex items-center justify-center py-10">
      <blockquote class="flex flex-col w-full gap-2 text-inter bg-primary rounded">
        <h2 className="text-white text-inter text-5xl px-12 pt-24 pb-8">
          My Second Brain.
        </h2>
        <h3 className="text-white text-inter font-thin text-4xl px-12 ">
          "Note-it empowers me to stay productive and organized, becoming my
          trusted second brain for capturing ideas, tasks, and information."
        </h3>
        <div className="flex items-center w-full px-12 py-12 gap-6">
          <img
            src="images/quote/photo.jpg"
            alt="Author Icon"
            className="w-16 h-16 rounded-full object-cover "
          />
          <p className="text-white text-inter text-2xl font-bold">
            Leonardo Gunawan
          </p>
        </div>
      </blockquote>
    </section>
  );
}

export default Quote;
