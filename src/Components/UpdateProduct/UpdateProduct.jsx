import Swal from 'sweetalert2';

const UpdateProduct = ({ product }) => {

    const { _id, photo, name, brand, type, engine_type, transmission, fuel_type, drive_system, infotainment, seats, description, price, rating, featured } = product || {};

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const updatedName = form.name.value;
        const updatedBrand = form.brand.value;
        const updatedType = form.type.value;
        const updatedPrice = form.price.value;
        const updatedDescription = form.description.value;
        const updatedRating = form.rating.value;
        const updatedPhoto = form.photo.value;
        const updatedFeatured = form.featured.value;

        const updatedEngineType = form.engine_type.value;
        const updatedTransmission = form.transmission.value;
        const updatedFuelType = form.fuel_type.value;
        const updatedDriveSystem = form.drive_system.value;
        const updatedInfotainment = form.infotainment.value;
        const updatedSeats = form.seats.value;

        const updatedProduct = {
            name: updatedName,
            brand: updatedBrand,
            type: updatedType,
            price: updatedPrice,
            description: updatedDescription,
            rating: updatedRating,
            photo: updatedPhoto,
            featured: updatedFeatured,
            engine_type: updatedEngineType,
            transmission: updatedTransmission,
            fuel_type: updatedFuelType,
            drive_system: updatedDriveSystem,
            infotainment: updatedInfotainment,
            seats: updatedSeats,
        };

        if (!updatedName || !updatedBrand || !updatedType || !updatedPrice || !updatedDescription || !updatedRating || !updatedPhoto) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all required fields.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        } else {
            console.log("update clicked");
            // Send data to the server
            fetch(`https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Updated Successfully',
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
                <h2 className="text-3xl font-extrabold">Update: {name}</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* name and brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="rounded-lg">
                                <select name="brand" className="input input-bordered w-full" defaultValue={brand}>
                                    <option value="" disabled>Select a Brand</option>
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
                                <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="text" name="engine_type" defaultValue={engine_type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Transmission</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="transmission" defaultValue={transmission} placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="text" name="fuel_type" defaultValue={fuel_type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Drive System</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="drive_system" defaultValue={drive_system} placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="text" name="infotainment" defaultValue={infotainment} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seats</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="seats" defaultValue={seats} placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Photo URL and featured row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Featured</span>
                            </label>
                            <label className="rounded-lg">
                                <select name="featured" className="input input-bordered w-full" defaultValue={featured}>
                                    <option value="" disabled>Select If You Want to Feature It or Not</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn hover:bg-[#ffc362] w-full text-white text-lg bg-[#FF9D00]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
