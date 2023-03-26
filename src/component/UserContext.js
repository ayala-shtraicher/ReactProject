import React, { createContext, useState } from "react";


export const usersContex = createContext();

export default function UserContext(props) {

    const arrDonations= [
        { "name": "ayala","id":1, "price": 300 },
        { "name": "ruty","id":2, "price": 150 },
        { "name": "michal","id":3, "price": 1000 },
        { "name": "rachel","id":4, "price": 500 },
        { "name": "nomi","id":5, "price": 200 }
    ]

    
    const arrProducts= [
        { "name": "vacation", "id": 2 ,"price":75,"img":"vacation.png"},
        { "name": "table", "id": 3 ,"price":50,"img":"table.png"},
        { "name": "sofa", "id": 4 ,"price":50,"img":"sofa.png"},
        { "name": "bookCard", "id": 5 ,"price":50,"img":"bookCard.png"},
        { "name": "shoping", "id": 6 ,"price":50,"img":"shoping.png"},
        { "name": "ikea", "id": 7 ,"price":50,"img":"ikea.png"},
        { "name": "camera", "id": 8 ,"price":20,"img":"camera.png"},
        { "name": "bed", "id": 9 ,"price":20,"img":"bed.png"},
        { "name": "phone", "id": 10 ,"price":20,"img":"phone.png"}
    ]

    return (
        <>
            <usersContex.Provider value={{arrDonations,arrProducts}}>
                {props.children}
            </usersContex.Provider>
        </>
    )
}