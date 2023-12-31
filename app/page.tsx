export default function Home() {
  return (
    <div className="container mx-auto my-60">
        <div>

            <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div className="flex justify-center">
                        <img src="https://media.licdn.com/dms/image/D5603AQFR6KtFQ0TAnA/profile-displayphoto-shrink_800_800/0/1680678444194?e=2147483647&v=beta&t=Zi-W6ivxS79US3-6h5X2lCuHsT0Vgg-NjAzIxyXTeZs" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">Andre Pernando Hutabarat</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">Web Developer</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div className="my-5 px-6">
                        <a href="https://www.linkedin.com/in/andre-hutabarat-238761200/" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">@aphtbrt</span></a>
                    </div>
                    <div className="flex justify-between items-center my-5 px-6">
                        <a href="https://www.linkedin.com/in/andre-hutabarat-238761200/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">LinkedIn</a>
                        <a href="https://twitter.com/AndreHu23211093" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="https://www.instagram.com/aphtbrt/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    aphtbrt Updated his status
                                    <span className="text-gray-500 text-xs">24 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    aphtbrt Added new profile picture
                                    <span className="text-gray-500 text-xs">42 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                aphtbrt Posted new article in <span className="font-bold">#Web Dev</span>
                                <span className="text-gray-500 text-xs">49 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                aphtbrt Edited website settings
                                <span className="text-gray-500 text-xs">1 day ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src="h" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                aphtbrt Added new rank
                                <span className="text-gray-500 text-xs">5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}