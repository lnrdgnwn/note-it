import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <header className="fixed z-50 border-b-[1px] bg-white border-b-black flex items-center justify-center top-0 left-0 right-0 p-5 w-full">
        <img
          src="/images/Note-it.svg"
          alt="Note-it logo"
          className="w-[176px] h-full"
        />
      </header>
      <section className="flex items-center justify-center h-screen px-[6%] lg:px-[13%]">
        <div className="flex w-full gap-20 items-center justify-center space-y-8">
          <SignUpForm />
        </div>
      </section>
    </>
  );
}

export default SignUp;
