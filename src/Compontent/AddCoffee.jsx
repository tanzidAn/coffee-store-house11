import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handelAddCoffee =event =>{
        event.preventDefault();

        const form =event.target;


        const name =form.name.value;
        const quantity =form.quantity.value;
        const Supplier =form.Supplier.value;
        const Taste =form.Taste.value;
        const Category =form.Category.value;
        const Details =form.Details.value;
        const Photo =form.Photo.value;

        const newCoffee ={name,quantity,Supplier,Taste,Category,Details,Photo};
        console.log(newCoffee);

        // send data to server;

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'user add successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24 ">
           <h3 className="text-5xl text-ellipsis">Add coffee</h3> 
           <form onSubmit={handelAddCoffee}>
            <div className="md:flex">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                    <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                </label>
            </div>
            </div>
            <div className="md:flex">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                    <input type="text" name="Supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                    <input type="Taste" name="Taste" placeholder="Taste" className="input input-bordered w-full" />
                </label>
            </div>
            </div>
            <div className="md:flex">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                    <input type="text" name="Category" placeholder="Category" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                    <input type="text" name="Details" placeholder="Details" className="input input-bordered w-full" />
                </label>
            </div>
            </div>
            <div className="md:flex">
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                    <input type="text" name="Photo" placeholder="Photo" className="input input-bordered w-full" />
                </label>
            </div>
            </div>
            <input type="submit" value="Add Coffee"  className="btn btn-block mt-5"/>
           </form>
           <div>
            <Link to='/addCoffee'>Home</Link>
            <Outlet></Outlet>
           </div>
        </div>
        
    );
};

export default AddCoffee;