import { Link } from 'react-router-dom';


const Cards = ({ products }) => {

    return (
        <div className='bg-[#eef2fa]'>
            <div className='font-primary'>

                {/* [#090b11] */}

                <div className="w-full dark:bg-black duration-300 bg-[#eef2fa] truncate">
                    <section className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="text-center pb-12">
                            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading dark:text-white text-black duration-300">
                                <span className=''>Top</span> Brands
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 duration-300">
                            <Link to={'/brand-ferrari'}>
                                <div className="w-full dark:dark:bg-[#0f1116] bg-[#dde3ee] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center md:hover:scale-105 duration-300">
                                    <div className="mb-8">
                                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/3f86v5c/Untitled-design-32.png" alt="photo" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl text-black dark:text-white font-bold mb-2">Ferrari</p>

                                    </div>
                                </div>
                            </Link>
                            <Link to={'/brand-audi'}>
                                <div className="w-full dark:bg-[#0f1116] bg-[#dde3ee] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center md:hover:scale-105 duration-300">
                                    <div className="mb-8">
                                        <img className="invert dark:invert-0 object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/JRPZk05/Untitled-design-33.png" alt="photo" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl text-black dark:text-white font-bold mb-2">Audi</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/brand-mercedes'}>
                                <div className="w-full dark:bg-[#0f1116] bg-[#dde3ee] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center md:hover:scale-105 duration-300">
                                    <div className="mb-8">
                                        <img className="invert dark:invert-0 object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/SrPJ9J5/Untitled-design-31.png" alt="photo" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl text-black dark:text-white font-bold mb-2">Mercedes</p>

                                    </div>
                                </div>
                            </Link>
                            <Link to={'/brand-porsche'}>
                                <div className="w-full dark:bg-[#0f1116] bg-[#dde3ee] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center md:hover:scale-105 duration-300">
                                    <div className="mb-8">
                                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/51WXmNG/Untitled-design-34.png" alt="photo" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl text-black dark:text-white font-bold mb-2">Porsche</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/brand-rolls-royce'}>
                                <div className="w-full dark:bg-[#0f1116] bg-[#dde3ee] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center md:hover:scale-105 duration-300">
                                    <div className="mb-8">
                                        <img className="invert dark:invert-0 object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/SNGL3T6/Untitled-design-29.png" alt="photo" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl text-black dark:text-white font-bold mb-2">Rolls Royce</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/brand-bmw'}>
                                <div className="w-full dark:bg-[#0f1116] bg-[#dde3ee] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center md:hover:scale-105 duration-300">
                                    <div className="mb-8">
                                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/PgjKzn0/bmw.png" alt="photo" />
                                    </div>
                                    <div className="w-full text-center">
                                        <p className="text-xl text-black dark:text-white font-bold mb-2">BMW</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>



            </div>
        </div>
    );
};

export default Cards;