import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee =useLoaderData();
    const {_id,name,quantity,Supplier,Taste,Category,Details,Photo}=coffee;
    const handelUpdetCoffee =event =>{
        event.preventDefault();

        const form =event.target;


        const name =form.name.value;
        const quantity =form.quantity.value;
        const Supplier =form.Supplier.value;
        const Taste =form.Taste.value;
        const Category =form.Category.value;
        const Details =form.Details.value;
        const Photo =form.Photo.value;

        const updetCoffee ={name,quantity,Supplier,Taste,Category,Details,Photo};
        console.log(updetCoffee);

        // send data to server;

        fetch(`http://localhost:5000/coffee${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updetCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
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
        <h3 className="text-5xl text-ellipsis">Updete coffee:{name}</h3> 
        <form onSubmit={handelUpdetCoffee}>
         <div className="md:flex">
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text">Coffee Name</span>
             </label>
             <label className="input-group">
                 <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
             </label>
         </div>
         <div className="form-control md:w-1/2 ml-4">
             <label className="label">
                 <span className="label-text">Available Quantity</span>
             </label>
             <label className="input-group">
                 <input type="text" name="quantity"  defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full" />
             </label>
         </div>
         </div>
         <div className="md:flex">
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text">Supplier</span>
             </label>
             <label className="input-group">
                 <input type="text" name="Supplier" defaultValue={Supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
             </label>
         </div>
         <div className="form-control md:w-1/2 ml-4">
             <label className="label">
                 <span className="label-text">Taste</span>
             </label>
             <label className="input-group">
                 <input type="Taste" name="Taste" defaultValue={Taste} placeholder="Taste" className="input input-bordered w-full" />
             </label>
         </div>
         </div>
         <div className="md:flex">
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text">Category</span>
             </label>
             <label className="input-group">
                 <input type="text" name="Category"  defaultValue={Category} placeholder="Category" className="input input-bordered w-full" />
             </label>
         </div>
         <div className="form-control md:w-1/2 ml-4">
             <label className="label">
                 <span className="label-text">Details</span>
             </label>
             <label className="input-group">
                 <input type="text" name="Details"  defaultValue={Details} placeholder="Details" className="input input-bordered w-full" />
             </label>
         </div>
         </div>
         <div className="md:flex">
         <div className="form-control w-full">
             <label className="label">
                 <span className="label-text">Photo</span>
             </label>
             <label className="input-group">
                 <input type="text" name="Photo" defaultValue={Photo} placeholder="Photo" className="input input-bordered w-full" />
             </label>
         </div>
         </div>
         <input type="submit" value="Add Coffee"  className="btn btn-block mt-5"/>
        </form>
     </div>
    );
};

export default UpdateCoffee;