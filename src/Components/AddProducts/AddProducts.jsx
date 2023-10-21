
import Swal from 'sweetalert2';

const AddProducts = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const featured = form.featured.value;

        const engine_type = form.engine_type.value;
        const transmission = form.transmission.value;
        const fuel_type = form.fuel_type.value;
        const drive_system = form.drive_system.value;
        const infotainment = form.infotainment.value;
        const seats = form.seats.value;

        const newProduct = { photo, name, brand, type, engine_type, transmission, fuel_type, drive_system, infotainment, seats, description, price, rating, featured  }

        console.log(newProduct);

        if (!name || !brand || !type || !price || !description || !rating || !photo) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all required fields.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return
        } else {
            const newProduct = { photo, name, brand, type, engine_type, transmission, fuel_type, drive_system, infotainment, seats, description, price, rating, featured };

            // send data to the server
            fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                });
        }
    }

    return (
        <div>
            <div className="bg-[#eef2fa] p-24 font-primary">
                <h2 className="text-3xl font-extrabold">ADD A PRODUCT</h2>
                <form onSubmit={handleAddProduct}>
                    {/* name and brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="rounded-lg">
                                <select name="brand" className="input input-bordered w-full">
                                    <option value="" disabled selected>Select Brand Name</option>
                                    <option value="ferrari">Ferrari</option>
                                    <option value="audi">Audi</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="porsche">Porsche</option>
                                    <option value="rolls-royce">Rolls Royce</option>
                                    <option value="bmw">BMW</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {/* type and price row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* engine type and Transmission row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Engine Type</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="engine_type" placeholder="Engine Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Transmission</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="transmission" placeholder="Transmission" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Fuel Type and Drive System row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Fuel Type</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="fuel_type" placeholder="Fuel Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Drive System</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="drive_system" placeholder="Drive System" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Infotainment and Seats row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Infotainment</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="infotainment" placeholder="Infotainment" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seats</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="seats" placeholder="Seats" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* description and ratings row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row and featured */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Featured</span>
                            </label>
                            <label className="rounded-lg">
                                <select name="featured" className="input input-bordered w-full">
                                    <option value="" disabled selected>Select If You Want To Feature It or Not</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn hover:bg-[#ffc362] w-full text-white text-lg bg-[#FF9D00]" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;


// <div>
//     <div className="bg-[#eef2fa] p-24 font-primary bg-[#12141b]">
//         <h2 className="text-3xl font-extrabold text-gray-300">ADD A PRODUCT</h2>
//         <form onSubmit={handleAddProduct}>
//             {/* name and brand row */}
//             <div className="md:flex mb-8 ">
//                 <div className="form-control md:w-1/2">
//                     <label className="label ">
//                         <span className="label-text text-gray-300">Name</span>
//                     </label>
//                     <label className="rounded-lg ">
//                         <input type="text" name="name" placeholder="Name" className="input input-bordered w-full bg-[#23232c]" />
//                     </label>
//                 </div>
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text text-gray-300">Brand Name</span>
//                     </label>
//                     <label className="rounded-lg">
//                         <select name="brand" className="input input-bordered w-full bg-[#23232c] text-[#8ba3af]" >
//                             <option value="" disabled selected>Select Brand Name</option>
//                             <option value="ferrari">Ferrari</option>
//                             <option value="audi">Audi</option>
//                             <option value="mercedes">Mercedes</option>
//                             <option value="porsche">Porsche</option>
//                             <option value="rolls-royce">Rolls Royce</option>
//                             <option value="bmw">BMW</option>
//                         </select>
//                     </label>
//                 </div>
//             </div>
//             {/* type and price row */}
//             <div className="md:flex mb-8">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text text-gray-300">Type</span>
//                     </label>
//                     <label className="rounded-lg">
//                         <input type="text" name="type" placeholder="Type" className="input input-bordered w-full bg-[#23232c]"  />
//                     </label>
//                 </div>
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text text-gray-300">Price</span>
//                     </label>
//                     <label className="rounded-lg">
//                         <input type="text" name="price" placeholder="Price" className="input input-bordered w-full bg-[#23232c]"  />
//                     </label>
//                 </div>
//             </div>
//             {/* description and ratings row */}
//             <div className="md:flex mb-8">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text text-gray-300">Description</span>
//                     </label>
//                     <label className="rounded-lg">
//                         <input type="text" name="description" placeholder="Description" className="input input-bordered w-full bg-[#23232c]"  />
//                     </label>
//                 </div>
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text text-gray-300">Rating</span>
//                     </label>
//                     <label className="rounded-lg">
//                         <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full bg-[#23232c]"  />
//                     </label>
//                 </div>
//             </div>
//             {/* form Photo url row */}
//             <div className="mb-8">
//                 <div className="form-control w-full">
//                     <label className="label">
//                         <span className="label-text text-gray-300">Photo URL</span>
//                     </label>
//                     <label className="rounded-lg">
//                         <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full bg-[#23232c]"  />
//                     </label>
//                 </div>
//             </div>
//             <input type="submit" value="Add Product" className="btn hover:bg-[#ffc362] w-full text-white text-lg bg-[#FF9D00]" />
//         </form>
//     </div>
// </div>