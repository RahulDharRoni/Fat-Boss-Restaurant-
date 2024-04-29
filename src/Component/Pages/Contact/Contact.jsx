import contactImage from "../../../assets/contact.png";
import Banner from "../../Common/Banner/Banner";
import Headline from "../../Common/Headline/Headline";
import Address from "./Address/Address";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <div>
      <Banner img={contactImage} title={"contact"}></Banner>
      <Headline
        heading={"Our Location"}
        subHeading={"---Visit Us---"}
      ></Headline>

      <section className="max-w-[1000px] mx-auto my-5">
        <Address />
      </section>
      <Headline
        heading={"CONTACT FORM"}
        subHeading={"---Send Us a Message---"}
      ></Headline>

      <section className="max-w-[1000px] bg-gray-200 mx-auto py-16 px-16 my-5">
        <Form />
      </section>
    </div>
  );
};

export default Contact;
