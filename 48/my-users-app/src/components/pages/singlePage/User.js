import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await response.json();
            console.log(data);
            setUser(data);
        }
        request();
    }, [id])

    return(
        <>
            <Header />

            <div className="user">

                <div className="user-card">
                    <img src={user.image} alt="user" className="user-img" />
                    <h1 className="user-name">{user.firstName} {user.lastName}</h1>
                    <ul className="info-list">
                        <li className="info-list-item"><span>Age: </span>{user.age}</li>
                        <li className="info-list-item"><span>Gender: </span>{user.gender}</li>
                        <li className="info-list-item"><span>IP: </span>{user.ip}</li>
                        <li className="info-list-item"><span>Social Security Number: </span>{user.ssn}</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default User;
