'use client';
import { Col, Row } from "react-bootstrap";
import Image from "next/legacy/image";
import img from "../../public/images/contact.jpg";

const pages = () => {
    return (
        <>
            <Image
                src={img}
                alt="Hockey"
                layout="responsive"
                priority={true} />
            <div className="p-5">
                <h2 className="mb-3">Registration Form</h2>
                <Row className="mb-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-lg-column justify-content-between col-lg-2 col-md-12"> <label htmlFor="get-name">First Name</label>
                        <input id="get-name" type="text" name="name" /></div>
                    <div className="d-flex flex-lg-column justify-content-between  col-lg-2  col-md-12" ><label htmlFor="get-lastname">Last Name</label>
                        <input id="get-lastname" type="text" name="lastname" /></div>
                    <div className="d-flex flex-lg-column justify-content-between  col-lg-2  col-md-12" ><label htmlFor="get-street">Street Address</label>
                        <input id="get-street" type="text" name="street" /></div>
                    <div className="d-flex flex-lg-column justify-content-between col-lg-2  col-md-12" > <label htmlFor="get-city">City</label>
                        <input id="get-city" type="text" name="city" /></div>
                    <div className="d-flex flex-lg-column justify-content-between  col-lg-2  col-md-12"><label htmlFor="get-code">Zid Code</label>
                        <input id="get-code" type="text" name="code" /></div>
                    <div className="d-flex flex-lg-column justify-content-between  col-lg-2 col-md-12"> <label htmlFor="get-birthdate">Birthdate(mm/ddyyyy)</label>
                        <input id="get-birthdate" type="date" name="birthdate" /></div>
                </Row>
                <Row className="iml mt-4">
                    <p> Gender:</p>
                    <Row lg={12}>
                        <Col lg={6} md={6}>
                            <label htmlFor="get-male">
                                <input id="get-male" type="radio" name="gender" value="Male" /> Male</label></Col>
                        <Col lg={6} md={6}>
                            <label htmlFor="get-female">
                                <input id="get-female" type="radio" name="gender" value="Female" />Female</label>
                        </Col>
                    </Row>
                </Row>
                <Row className="mt-4">
                    <p>Grade:</p>
                    <div className="d-flex flex-lg-row flex-column justify-content-center justify-content-lg-start col-12 iml">
                        <div><input id="get-pre" type="radio" name="grade" value="Pre-Grade" />Pre-Grades </div>
                        <div><input id="get-1" type="radio" name="grade" value="1st" />1st</div>
                        <div><input id="get-2" type="radio" name="grade" value="2nd" />2nd</div>
                        <div><input id="get-3" type="radio" name="grade" value="3rd" />3rd</div>
                        <div><input id="get-4" type="radio" name="grade" value="4th" />4th</div>
                        <div><input id="get-5" type="radio" name="grade" value="5th" />5th</div>

                    </div>
                </Row>
                <Row className="mt-4 ">
                    <h4>Which elementary school do you live near?</h4>
                    <p> Closest School:</p>
                    <div className="d-flex flex-lg-row justify-content-between flex-column iml">
                        <div><input id="get-aj" type="radio" name="school" value="AJ Katzenmaier" />AJ Katzenmaier</div>
                        <div><input id="get-green" type="radio" name="school" value="Greenbay" />Greenbay</div>
                        <div><input id="get-howard" type="radio" name="school" value="Howard A Yeager" />Howard A Yeager</div>
                        <div><input id="get-marjorie" type="radio" name="school" value="Marjorie P Hart" />Marjorie P Hart</div>
                        <div><input id="get-north" type="radio" name="school" value="North Elementary" />North Elementary</div>
                        <div><input id="south" type="radio" name="school" value="South Elementary" />South Elementary</div>
                    </div>

                </Row>
                <Row className="mt-4">
                    <h4> What position(s) do you normally play? (check all that apply)</h4>
                    <div className="container_position iml">
                        <input id="get-forward" type="checkbox" name="position" value="Forward" /> Forward
                        <input id="get-defense" type="checkbox" name="position" value="Defense" />Defense
                        <input id="get-midfield" type="checkbox" name="position" value="Midfield/" />Midfield
                        <input id="goalkeeper" type="checkbox" name="position" value="Goalkeeper" />Goalkeeper
                    </div>
                </Row>
                <Row className="mt-4">

                    <h3>Permission to Play</h3>
                    <p>I, the parent or guardian of the minor registrant, agree that the registrant and I will abide by all the rules of the Mighty Ducks Hockey League (MDHL). In recognizing the possibility of physical injury associated with hockey
                        and in consideration for the &aposLeague&apos accepting the registrant for its hockey programs and activities, I hereby release, discharge, and/or otherwise indemnify MDHL, their employees and associated personnel and voIunteers,incIuding
                        the facilities used for practices and games, against any claim by or on behalf of the registrant as a result of the registrant&aposs participation in the programand/orbeing transported to or from MDHL sponsored activities,which
                        transportation By signing below, I here by agree andauthorizethe above.In addition, by signing below, lalso acknowledge that I have read the cancellation policy and agree to its terms.
                    </p>
                </Row>
                <Row >
                    <div className="d-flex flex-lg-row justify-content-between align-items-center flex-column mt-3 iml">
                        <div className="mb-lg-0 mb-2 d-flex"> <label htmlFor="get-signature">Parent/Guardian Signature:</label>
                            <input id="get-signature" type="text" name="signature" /></div>
                        <div className="mb-lg-0 mb-2 d-flex"> <label htmlFor="get-date">Date:</label>
                            <input id="get-date" type="date" name="date" /></div>
                        <button type="button" >Send</button>
                    </div>
                </Row>

            </div>
        </>

    )
}

export default pages
