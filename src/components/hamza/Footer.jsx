function Footer() {
    return (
        <footer className="bg-gray-200 pt-12">
            <div className="h-auto md:h-80 w-full p-6 flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto gap-8 md:gap-0">
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl md:text-5xl font-bold">Hello.</h2>
                    <h4 className="text-sm md:text-base mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </h4>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
                        <p className="hover:text-gray-600 cursor-pointer">Home</p>
                        <p className="hover:text-gray-600 cursor-pointer">About</p>
                        <p className="hover:text-gray-600 cursor-pointer">Contact</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
