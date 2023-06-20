"use client";
import Image from 'next/legacy/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import img from "@images/about.jpg"

const page = () => {
    return (

        <Container className='text-center '>
            <Image
                src={img}
                alt="Hockey"
                layout="responsive"
                priority={true} />
            <Row className='p-3'>
                <h2>Mission</h2>
                <p>To support young athletesliving in Chicago&apos northside neighborhoods, who have an interest in learning and playing hockey, with opportunities to learn and practice skills related to the game of hockey, specifically those skills around  </p>
            </Row>
            <Row className='p-3'>
                <h2>Vision</h2>
                <p>LThe Mighty Ducks Hockey League aspires to develop strong, well·rounded, and mindful athletes through the building of character, self-discipline, and leadership.</p>
            </Row>
            <Row className='p-3'>
                <h2>General information</h2>
                <p>The Mighty Ducks Hockey League was established in 1996 to provide athletesresiding in Chicago&apos snorthside neighborhoods an environment in which to learn and play hockey. To be a member of MDHL, you must be between the ages of 4 -12
                    and reside in a Chicago northside neighborhood. MDHL is ran by a small fullt·ime staff, and relies on the generous volunteer time of parents and previous league members.</p>
            </Row>
        </Container>

    )
}

export default page
