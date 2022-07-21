import Header from '../header/Header';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import userPic from "../../../images/user.svg";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
        }
        request();
    }, []);

    return (
        <>  
            <Header />

            <main>
                
                <div className="home">

                    <div className="container">

                        <h1>User List</h1>

                        <div className="user-area">

                            {
                                    users.map(user => (
                                        <div className="user-card" key={user.id}>

                                            <div className="cols">

                                                <div className="user-card-col-left">
                                                    <img className='user-pic' src={userPic} alt="user icon" />
                                                </div>

                                                <div className="user-card-col-right">
                                                    <ul className="user-info-list">
                                                        <li className="user-info-list-item"><span>Name: </span>{user.firstName} {user.lastName}</li>
                                                        <li className="user-info-list-item"><span>City: </span>{user.address.city}</li>
                                                        <li className="user-info-list-item"><span>Position: </span>{user.company.department}</li>
                                                    </ul>
                                                </div>

                                            </div>

                                            <Link className='link' to={`/${user.id}`}>More info</Link>

                                        </div>                                
                                    ))
                                }

                        </div>

                    </div>

                </div>

            </main>

        </>
        
    )
}

export default Home;
