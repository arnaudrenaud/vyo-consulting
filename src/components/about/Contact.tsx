import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section className="mt-12 bg-white p-8 rounded-lg shadow-md w-full">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl max-md:text-3xl">
            Contactez-nous
          </h2>
          <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
            <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
            <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
          </div>
        </div>
        <p className="mt-6">
          Vous avez un besoin ou une question à nous poser?
        </p>
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>

      <ContactForm />
    </section>
  );
}

export default Contact;
