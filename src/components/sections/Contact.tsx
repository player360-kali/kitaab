import Container from "../Container";
import Flex from "../Flex";

const Contact = () => {
  return (
    <Container>
      <Flex width="100%" height="400px" classes="mt-[60px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.57586208418!2d138.51880540296963!3d36.407486307964746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dcf83e00cf171%3A0xeb942470140439fb!2sMount%20Asama!5e1!3m2!1sen!2s!4v1742406322601!5m2!1sen!2s"
          loading="lazy"
          width={"50%"}
          height={"100%"}
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Flex
          width="50%"
          height="100%"
          align="center"
          direction="column"
          justify="space-around"
          classes="bg-[#8BC34A]"
        >
          <div className="m-auto text-[#fff]">
            <h3 className="text-[28px] font-semibold">Aloqa</h3>
            <p className="text-[18px] mt-[16px]">
              +998 (90) 123 45 67 <br />
              info@tortlar.uz
            </p>
            <br />
            <p className="text-[18px]">
              Jizzax shahri, “Mustaqillik” mahallasi,
              <br />
              Yangi Jizzax ko‘chasi, 15/11-uy
            </p>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Contact;
