const Foot = () => {
    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]

    return (
        <footer className="pt-10 pb-10">
            <div className="mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-2 sm:max-w-md sm:mx-auto sm:text-center">
                    <a href="javascript:void(0)">
                        <h1 style={{ color: "grey", fontSize: "30px", fontWeight: "bold" }}>flux</h1>
                    </a>

                    <p>© 2024 Flux Inc. All rights reserved.</p>

                </div>



            </div>
        </footer>
    )
}
export default Foot;
