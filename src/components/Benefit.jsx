function Benefit() {
  return (
    <section
      className="py-10 lg:py-10 w-full scroll-mt-20"
      id="benefit-section"
    >
      <div className="container flex items-center justify-center flex-col gap-2">
        <div className="flex flex-col items-center justify-between lg:flex-row w-full space-y-6 lg:space-y-0 py-10 lg:py-20">
          <div className="flex w-full lg:basis-[50%] flex-col space-y-4 lg:pr-9 ">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-bold text-inter">
                Your Notes, Always Within Reach
              </h2>
              <p className="text-2xl text-inter">
                Use Note-it to helps you capture more than just text. Save your
                images, and documents. Write your ideas wherever you are.
                Whether it’s task lists, project notes, or personal reminders,
                Note-it secures all your thoughts in one place.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:basis-[50%] w-full ">
            <figure className="w-full">
              <img
                alt="Benefit-1"
                className="object-contain w-full"
                src="/images/benefit/benefit-1.svg"
              />
            </figure>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 lg:flex-row w-full space-y-6 lg:space-y-0 py-10 lg:py-20">
          <div className="flex items-center justify-center lg:basis-[50%] order-2 w-full">
            <figure className="w-full">
              <img
                alt="Benefit-2"
                className="object-cover w-full"
                src="/images/benefit/benefit-2.svg"
              />
            </figure>
          </div>
          <div className="flex w-full lg:basis-[50%] flex-col space-y-4 lg:pl-9 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-inter ">24/7 Access</h2>
              <p className="text-2xl text-inter">
                With Note-it, your notes sync seamlessly across all devices,
                giving you instant access to your information no matter where
                you are.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 lg:flex-row w-full space-y-6 lg:space-y-0 py-10 lg:py-20">
          <div className="flex w-full lg:basis-[50%] flex-col space-y-4 lg:pr-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-inter">
                Your Digital Second Brain
              </h2>
              <p className="text-2xl text-inter">
                Note-it is your trusted companion for storing ideas, thoughts,
                and tasks, so you never forget anything important. Organize your
                life and work like never before, keeping everything from meeting
                notes to creative sparks in one secure space. It’s more than
                just a note-taking app; it’s your personal knowledge hub.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:basis-[50%] w-full">
            <figure className="w-full">
              <img
                alt="Benefit-3"
                className="object-contain w-full"
                src="/images/benefit/benefit-3.svg"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;
