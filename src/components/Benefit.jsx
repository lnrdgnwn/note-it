function Benefit() {
  return (
    <section className="py-10 lg:py-10">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between py-20 lg:flex-row space-y-6 lg:space-y-0">
          <div className="flex w-full lg:basis-[50%] flex-col space-y-4 lg:pr-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-inter">
                Your Notes, Always Within Reach
              </h2>
              <p className="text-2xl">
                Use Note-it to helps you capture more than just text. Save your
                images, and documents. Write your ideas wherever you are.
                Whether it’s task lists, project notes, or personal reminders,
                Note-it secures all your thoughts in one place.
              </p>
              <div className="mt-10 flex items-center space-x-8"></div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:basis-[50%]">
            <figure className="w-full">
              <img
                alt="Benefit-1"
                className="object-cover w-full lg:pl-12"
                src="/images/hero/Hero-Image.svg"
                width="640"
                height="640"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
        <div className="flex items-center justify-between py-20 lg:flex-row space-y-6 lg:space-y-0">
          <div className="flex items-center justify-center lg:basis-[70%]">
            <figure className="w-full">
              <img
                alt="Benefit-1"
                className="object-cover w-full lg:pr-12"
                src="/images/hero/Hero-Image.svg"
                width="640"
                height="640"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="flex w-full lg:basis-[50%] flex-col space-y-4 lg:pr-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-inter">24/7 Access</h2>
              <p className="text-2xl">
                With Note-it, your notes sync seamlessly across all devices,
                giving you instant access to your information no matter where
                you are.
              </p>
              <div className="mt-10 flex items-center space-x-8"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-20 lg:flex-row space-y-6 lg:space-y-0">
          <div className="flex w-full lg:basis-[50%] flex-col space-y-4 lg:pr-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-inter">
                Your Digital Second Brain
              </h2>
              <p className="text-2xl">
                Note-it is your trusted companion for storing ideas, thoughts,
                and tasks, so you never forget anything important. Organize your
                life and work like never before, keeping everything from meeting
                notes to creative sparks in one secure space. It’s more than
                just a note-taking app; it’s your personal knowledge hub.
              </p>
              <div className="mt-10 flex items-center space-x-8"></div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:basis-[50%]">
            <figure className="w-full">
              <img
                alt="Benefit-1"
                className="object-cover w-full lg:pl-12"
                src="/images/hero/Hero-Image.svg"
                width="640"
                height="640"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;
