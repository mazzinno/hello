function Footer() {


    return (
        <footer className="bg-gray-200">
            <div className="h-96 w-full p-6 flex justify-between max-w-[1200px] mx-auto">
                <div className="flex flex-col items-start">
                    <h2 className="text-5xl font-bold">Hello.</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h4>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex gap-4">
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
  
  export default Footer
