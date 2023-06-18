'use client';
const Footer = () => {
    return (

        <footer className="d-flex justify-content-center align-items-end">
            <p>Copyright© 2021 - web design by Juan Carlos Vilcherrez </p>

            <style jsx>{`
            footer>p {
                color: white;
                font-size: 0.9rem;
                padding-top: 2rem;
            }
            footer{
                border-top: 0.1rem solid white;
            }
            `}</style>
        </footer>

    )
}

export default Footer
