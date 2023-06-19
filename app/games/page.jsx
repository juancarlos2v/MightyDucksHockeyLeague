import img from "@images/games.jpg"
import Image from "next/legacy/image"
const page = () => {
    return (
        <>
            <Image
                src={img}
                alt="Hockey"
                layout="responsive"
                priority={true}
            />
            <div className="d-flex flex-column justify-content-center align-items-center p-4 text-center">
                <h2>Fall Schedule</h2>
                <p>*All Games Take place on Saturday</p>
                <table>
                    <thead>
                        <tr>
                            <th> SEPTEMBER</th>
                            <th>Teams</th>
                            <th >Location</th>
                            <th>Times</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td rowSpan="2">09/01</td>
                            <td>U1 and U4</td>
                            <td>AJ Katzenmaier</td>
                            <td>09:30a.m.</td>

                        </tr>
                        <tr>
                            <td>U3 and U2</td>
                            <td>Greenbay</td>
                            <td>01:00p.m.</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">09/08</td>
                            <td>U5 and U6</td>
                            <td>Howard A Yeager</td>

                        </tr>
                        <tr>
                            <td>U6 and U1</td>
                            <td>Marjorie P Hart</td>

                            <td>01:00p.m.</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">09/15</td>
                            <td>U2 and U4</td>
                            <td>North</td>

                            <td>09:30a.m.</td>
                        </tr>
                        <tr>
                            <td>U3 and U5</td>
                            <td>AJ Katzenmaier</td>
                            <td>01:00p.m.</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">09/22</td>
                            <td>U1 and U3</td>
                            <td>South</td>
                            <td>09:30a.m.</td>
                        </tr>
                        <tr>
                            <td>U2 and U6</td>
                            <td>Howard A Yeager</td>
                            <td>01:00p.m.</td>
                        </tr>
                        <tr>
                            <td>09/29</td>
                            <td>U4 and U5</td>
                            <td>Greenbay</td>
                            <td>09:30a.m.</td>
                        </tr>
                    </tbody>
                </table>

                <div className="d-flex flex-column align-items-between pt-4 w-100">
                    <div className="d-flex flex-lg-row flex-column justify-content-between">
                        <p><b> Facilyti type:</b> Outdoor</p>
                        <p><b> Additional information:</b> If deemen necessary by MDHL games may be shortened or cancelled due to extreme weather conditions.</p>
                    </div>
                    <div className="d-flex flex-lg-row flex-column justify-content-between pt-3">
                        <p><b>Please direct all questions to:</b> Michael Randall, League Coordinator.</p>
                        <p><b>Phone:</b> (630) 690-8132</p>
                        <p><b> Email:</b> michael.randall@chihockey.org</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page
