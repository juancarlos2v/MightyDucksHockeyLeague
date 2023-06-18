import Image from "next/legacy/image"
import img from "../../../public/images/logo.png"

const page = () => {
    return (
        <div class="mail">
            <div id="logo_contact">
                <Image
                    className="logo"
                    src={img}
                    width={100}
                    height={100}
                    alt="MDHL logo" />
            </div>



            <h4 className="text_contact">Please email us <a id="mailto" href="mailto:mdhl@chihockey.org">mdhl@chihockey.org</a> </h4>
            <p className="text_contact">We will reply to your email as soon as we can</p>

        </div>
    )
}

export default page
