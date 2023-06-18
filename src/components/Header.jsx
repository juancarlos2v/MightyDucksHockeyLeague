'use client';

import Link from "next/link";

const Header = () => {

    const pages = [
        { url: "/", name: "Home" },
        { url: "/about", name: "About" },
        { url: "/contact", name: "Contact" },
        { url: "/games", name: "Games" },
        { url: "/rules", name: "Play Rules" },
        { url: "/register", name: "Register" }]
    return (
        <div>
            <header>
                <h1 className="container-fluid col-12 p-4 d-flex justify-content-end align-items-center text-lg-right text-center">Mighty Ducks Hockey League</h1>
                <nav className="menu d-flex justify-content-around col-12 p-4 flex-wrap">
                    {
                        pages.map((page, index) => (
                            <Link
                                key={index}
                                href={page.url}>{page.name}
                            </Link>
                        ))
                    }
                </nav>
            </header>


            <style jsx>{`
                h1 {
                    color: rgb(250, 231, 61);
                    -webkit-text-stroke: 1px rgb(247, 138, 75);
                    background-color: black;          
                }
              
            
            `}</style>
        </div>
    )
}

export default Header
