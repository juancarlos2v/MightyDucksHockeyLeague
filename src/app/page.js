import Image from "next/legacy/image";
import img from "../../public/images/img2.jpg";

export default function Home() {
  return (
    <>
      <Image src={img} alt="images/img2.jpg" layout="responsive" />
    </>
  );
}
