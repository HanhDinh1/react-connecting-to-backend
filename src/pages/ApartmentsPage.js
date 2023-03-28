import { useState, useEffect} from "react";
import axios from "axios";

function ApartmentsPage() {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        axios
        .get("https://ironbnb-m3.herokuapp.com/apartments")
        .then ((response) => {
            console.log('response.data', response.data);
            setApartments(response.data)
        });
    }, []); //<- [] : empty dependency array -  means run the effect only omce, after initial render

    return (
        <div>
            <h3> List of apartments</h3>
            {apartments.map((apartment) => (
                <div key={apartment._id} className="card">
                    <img src={apartment.image} alt="apartment"/>
                    <h3>{apartment.tittle}</h3>
                    <p>Price: {apartment.pricePerDay}</p>
                </div>
            ))}
        </div>
    );
}

export default ApartmentsPage;