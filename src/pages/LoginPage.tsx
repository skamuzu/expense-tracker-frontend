import { Button } from "@/components/ui/button";
import Hero from "@/components/pageComponents/Hero";
import FormArea from "@/components/pageComponents/FormArea";



const LoginPage = () => {
  return (
    <main className="w-full md:min-h-screen sm:h-fit font-display flex flex-col md:flex-row z-10 overflow-hidden">
      <FormArea message={`Don't have an account? `} route="Sign Up" path="signup"/>
      <Hero/>
      </main>
  );
};

export default LoginPage;
