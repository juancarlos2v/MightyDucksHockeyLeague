import Image from "next/legacy/image"
import logo from "@images/logo.png"
import img from "@images/contact.jpg"


const page = () => {
    return (
        <>
            <Image
                src={img}
                alt="Hockey"
                layout="responsive"
                priority={true}
            />
            <div className="p-4 pt-0 d-flex flex-column justify-content-center align-items-center">
                <Image
                    className="logo"
                    src={logo}
                    width={150}
                    height={150}
                    alt="MDHL logo" />
                <h4 >Please email us <a id="mailto" href="mailto:mdhl@chihockey.org">mdhl@hockey.org</a> </h4>
                <p >We will reply to your email as soon as we can</p>

            </div>
        </>
    )
}

export default page
