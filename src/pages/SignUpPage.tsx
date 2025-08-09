import FormArea from "@/components/pageComponents/FormArea";
import Hero from "@/components/pageComponents/Hero";

const SignUpPage = () => {
  return (
    <main className="w-full md:min-h-screen sm:h-fit font-display flex flex-col md:flex-row z-10 overflow-hidden">
      <FormArea message={`Already have an account? `} route="Log In" path="login"/>
      <Hero />
    </main>
  );
};

export default SignUpPage;
