import axios from "axios";
import React, { useEffect, useState } from "react";
import { InfoPageWrapper } from "./styled";

export default function Info() {
    const [users, setUsers] = useState([]);
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => {
                setUsers(data);
                console.log(data);
            });
        axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then(({ data }) => {
                setAlbum(data);
            });
    }, []);
    return (
        <InfoPageWrapper>
            <div className="user-list">
                <p className="title">User List</p>
                {users.map((user) => (
                    <div className="user-info box" key={user.id}>
                        <div className="image">
                            <img
                                src="https://picsum.photos/id/1005/90/90"
                                alt="user"
                            />
                        </div>
                        <div>
                            <h5 className="user-name">{user.name}</h5>
                            <p>
                                <small>{user.email}</small>
                            </p>
                            <p>
                                <small>{user.address.city}</small>
                            </p>
                            <p>
                                <small>{user.phone}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="album">
                <p className="title">Album List</p>
                {album.map((item) => (
                    <div key={item.id} className="album-info box">
                        <div className="image">
                            <img
                                src="https://picsum.photos/id/101/90/90"
                                alt="album"
                            />
                        </div>
                        <h5 className="album-title">{item.title}</h5>
                    </div>
                ))}
            </div>
        </InfoPageWrapper>
    );
}
