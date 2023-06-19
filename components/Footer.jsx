'use client';
function Footer() {
    return (

        <footer className="d-flex justify-content-center align-items-center p-3">
            <p>Copyright© 2021 - web design by Juan Carlos Vilcherrez </p>

            <style jsx>{`
            footer>p {
                color: white;
                font-size: 0.9rem;
            }
            footer{
                border-top: 0.1rem solid white;
            }
            `}</style>
        </footer>

    )
}

export default Footer
