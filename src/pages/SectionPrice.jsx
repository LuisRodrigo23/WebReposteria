import React from 'react'
import '/src/index.css'

function SectionPrice() {
    return (
        <div className="min-w-screen bg-white flex flex-col lg:flex-row items-center lg:p-10 overflow-hidden relative space-y-10 lg:space-y-0 lg:space-x-10 mt-[2rem] p-[2rem]">
            <div className="w-full lg:w-1/2 max-w-6xl rounded bg-[#f8e8c4] shadow-xl p-[4rem] sm:p-12 lg:p-20 mx-auto text-gray-800 relative md:text-left max-[1000px]:W-[45rem]">
                <div className="md:flex items-center -mx-4 sm:-mx-10">
                    <div className="w-full md:w-1/2 px-4 sm:px-10 mb-10 md:mb-0">
                        <div className="sticky">
                            <img src="https://static.vecteezy.com/system/resources/previews/025/268/608/non_2x/german-chocolate-cake-with-ai-generated-free-png.png" className="w-full relative z-10" alt="Raincoat" />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 sm:px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">Men's Ragged <br />Waterproof Jacket</h1>
                            <p className="text-sm">
                                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...
                                <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">
                                    MORE <i className="mdi mdi-arrow-right"></i>
                                </a>
                            </p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">Q</span>
                                <span className="font-bold text-5xl leading-none align-baseline">159</span>
                                <span className="text-2xl leading-none align-baseline">.99</span>
                            </div>
                            <div className="inline-block align-bottom">
                                <br />
                                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 max-w-6xl rounded bg-[#f8e8c4] shadow-xl p-[4rem] sm:p-12 lg:p-20 mx-auto text-gray-800 relative md:text-left max-[1000px]:W-[45rem]">
                <div className="md:flex items-center -mx-4 sm:-mx-10">
                    <div className="w-full md:w-1/2 px-4 sm:px-10 mb-10 md:mb-0">
                        <div className="sticky">
                            <img src="https://static.vecteezy.com/system/resources/previews/025/268/608/non_2x/german-chocolate-cake-with-ai-generated-free-png.png" className="w-full relative z-10" alt="Raincoat" />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 sm:px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">Men's Ragged <br />Waterproof Jacket</h1>
                            <p className="text-sm">
                                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...
                                <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">
                                    MORE <i className="mdi mdi-arrow-right"></i>
                                </a>
                            </p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">Q</span>
                                <span className="font-bold text-5xl leading-none align-baseline">159</span>
                                <span className="text-2xl leading-none align-baseline">.99</span>
                            </div>
                            <div className="inline-block align-bottom">
                                <br />
                                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
            <div className="flex items-end justify-end fixed bottom-5 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" rel="noopener noreferrer"
                        className="block w-[5rem] h-[5rem] rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="../src/img/imgLogoC.png" alt="Buy me a beer" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SectionPrice