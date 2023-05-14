import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee}) => {

    const {_id,name,quantity,Supplier,Taste,Category,Details,Photo}=coffee;

    const hendleDeleat =_id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount>0){
                 Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )  
                }
            })
            }
          })
    }
    
    return (
                    <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={Photo} alt="Movie"/></figure>
            <div className="flex w-full justify-between pr-4">
                <div>
                <h2 className="card-title">Name:{name}</h2>
                <p>{quantity}</p>
                <p>{Taste}</p>
                <p>{Supplier}</p>
                </div>
                <div className="card-actions justify-end ">
                <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn btn-active">view</button>
               <Link to={`updateCoffee/${_id}`}>
               <button className="btn">Edit</button>
               </Link>
                <button
                onClick={() => hendleDeleat(_id)}
                className="btn bg-red-600">x</button>
                </div>
                </div>
            </div>
            </div>
    );
};

export default CoffeeCard;