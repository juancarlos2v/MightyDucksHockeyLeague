"use client";
import Image from "next/legacy/image";
import img from "../../public/images/img2.jpg";

export default function Home() {
  return (
    <>
      <Image
        src={img}
        alt="Hockey"
        layout="responsive"
        priority={true} />

      <div className="d-flex flex-column align-items-center pt-3 justify-content-between">
        <h2>Upcoming Events</h2>
        <h4>August 4</h4>
        <p> MDHL Fundraiser</p>
        <h4>Augusto 16</h4>
        <p>Season Kick-off: Meet the Teams</p>
        <h4>September 1</h4>
        <p>First Game of the Season (Check Game Schedule)</p>

        <style jsx>{`
          h2,
          h4,
          p {
            color: white;
          }
        `}</style>
      </div>
    </>
  );
}
