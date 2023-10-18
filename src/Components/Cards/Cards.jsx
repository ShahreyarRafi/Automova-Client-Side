import { Link } from 'react-router-dom';






const Cards = ({ products }) => {

    return (
        <div className='bg-[#eef2fa]'>
            <div className='font-primary'>

                {/* [#090b11] */}

                <div className="w-full bg-black">
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="text-center pb-12">
                            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                                Top Brands
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="w-full bg-[#090b11] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/3f86v5c/Untitled-design-32.png" alt="photo" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">Ferrari</p>
                                    <Link to={'/brand-ferrari'}>
                                        <div className=" px-3 py3 flex items-center justify-center text-sm font-medium leading-snug hover:opacity-75 text-[#FF9D00] hover:cursor-pointer">
                                            <p>Show Cars</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className="w-full bg-[#090b11] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/JRPZk05/Untitled-design-33.png" alt="photo" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">Audi</p>
                                    <Link to={'/brand-audi'}>
                                        <div className=" px-3 py3 flex items-center justify-center text-sm font-medium leading-snug hover:opacity-75 text-[#FF9D00] hover:cursor-pointer">
                                            <p>Show Cars</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full bg-[#090b11] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/SrPJ9J5/Untitled-design-31.png" alt="photo" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">Mercedes</p>
                                    <Link to={'/brand-mercedes'}>
                                        <div className=" px-3 py3 flex items-center justify-center text-sm font-medium leading-snug hover:opacity-75 text-[#FF9D00] hover:cursor-pointer">
                                            <p>Show Cars</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full bg-[#090b11] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/51WXmNG/Untitled-design-34.png" alt="photo" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">Porsche</p>
                                    <Link to={'/brand-porsche'}>
                                        <div className=" px-3 py3 flex items-center justify-center text-sm font-medium leading-snug hover:opacity-75 text-[#FF9D00] hover:cursor-pointer">
                                            <p>Show Cars</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full bg-[#090b11] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/SNGL3T6/Untitled-design-29.png" alt="photo" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">Rolls Royce</p>
                                    <Link to={'/brand-rolls-royce'}>
                                        <div className=" px-3 py3 flex items-center justify-center text-sm font-medium leading-snug hover:opacity-75 text-[#FF9D00] hover:cursor-pointer">
                                            <p>Show Cars</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full bg-[#090b11] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/PgjKzn0/bmw.png" alt="photo" />
                                </div>
                                <div className="w-full text-center">
                                    <p className="text-xl text-white font-bold mb-2">BMW</p>
                                    <Link to={'/brand-bmw'}>
                                        <div className=" px-3 py3 flex items-center justify-center text-sm font-medium leading-snug hover:opacity-75 text-[#FF9D00] hover:cursor-pointer">
                                            <p>Show Cars</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                {/* <div className='container grid grid-cols-4 gap-5 mx-auto px-4'>
                    <div className="w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Total Products: {products.length}</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a] py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>

                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Cards;