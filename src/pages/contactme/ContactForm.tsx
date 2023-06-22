import SocialButtons from "../presentation/SocialButtons";

const ContactForm = () => {
  return (
    <section id="contactme" className="bg-image overflow-hidden relative lg:flex flex-col xl:py-20 py-12 xl:px-40 md:w-full items-start justify-between md:px-20 sm:px-10 px-5 w-full">
      {/* <form autoComplete="off" className="mb-10 flex flex-col w-96 gap-6" action="https://public.herotofu.com/v1/9f8477f0-d89c-11ed-bd27-47b3be7286e7" method="post" accept-charset="UTF-8">
        <input className=" bg-transparent border-b-2 focus:border-b-primary outline-none pb-1" type="text" name="nombre" id="nombre" placeholder="John Doe" />
        <input className=" bg-transparent border-b-2 focus:border-b-primary outline-none pb-1" type="email" name="email" id="email" placeholder="johndoe@domain.com" />
        <textarea className=" bg-transparent border-b-2 outline-none focus:border-b-primary" name="message" id="" placeholder="Write your message"></textarea>
        <input className="cursor-pointer mt-6 border hover:border-primary hover:text-primary transition-colors duration-300 ease-in-out py-3 rounded-lg" type="submit" value={"Send"} />
      </form> */}
      <form className="w-full md:w-96 mb-10 flex flex-col gap-6" action="https://public.herotofu.com/v1/9f8477f0-d89c-11ed-bd27-47b3be7286e7" method="post" acceptCharset="UTF-8">
        <input type="text" className="w-full bg-transparent border-b-2 focus:border-b-primary outline-none pb-1" name="nombre" id="nombre" placeholder="John Doe" />
        <input type="email" className="w-full bg-transparent border-b-2 focus:border-b-primary outline-none pb-1" name="email" id="email" placeholder="johndoe@domain.com" />
        <textarea className="w-full bg-transparent border-b-2 outline-none focus:border-b-primary" name="message" id="" placeholder="Write your message"></textarea>
        <input className="cursor-pointer px-3 mt-6 border hover:border-primary hover:text-primary transition-colors duration-300 ease-in-out py-3 rounded-lg" type="submit" value={"Send message"} />
      </form>
      <SocialButtons />
    </section>
  );
};

export default ContactForm;
