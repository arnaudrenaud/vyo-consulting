import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section className="flex justify-center items-center mb-12 bg-[url('/histoire-bckg.jpg')] py-16 rounded-lg bg-no-repeat bg-cover h-full w-full relative">
      <div className="bg-white p-8 rounded-lg shadow-md max-sm:w-[96%] max-md:w-[90%] md:w-[80%] max-w-[800px]">
        <div className="text-center">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl max-md:text-3xl">
              Contactez-nous
            </h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
          <p className="mt-4 mb-6 text-[#737373]">
            Vous avez un besoin ou une question à nous poser?
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
        <ContactForm />
      </div>
      <div className="absolute bg-[#BBF7D0] h-[86px] w-[86px] block z-[-1] -top-6 right-0 md:-right-12 rounded-full" />
    </section>
  );
}

export default Contact;
