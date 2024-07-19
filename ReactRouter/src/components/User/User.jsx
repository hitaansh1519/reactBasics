import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {userid} = useParams()

    return(
        <h1 className="bg-gray-700 text-white text-2xl p-4">User: {userid}</h1>
    )
}

export default User;