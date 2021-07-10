import React from 'react'

export const Review:React.FC<any> =({values})=>{
    return(
        <div>
            <table
            style={{margin:'0 auto'}}
            >
                <tr>
                    <td>First Name</td>
                    <td> Last Name</td>
                    <td>Age</td>
                    <td>Number</td>
                    <td>Email</td>
                    <td>Country</td>
                    <td>City</td>
                    <td>Addres</td>
                    <td>Street</td>
                </tr>
                <tr>
                    <td>{values.firstName}</td>
                    <td>{values.lastName}</td>
                    <td>{values.age}</td>
                    <td>{values.number}</td>
                    <td>{values.email}</td>
                    <td>{values.country}</td>
                    <td>{values.city}</td>
                    <td>{values.address}</td>
                    <td>{values.street}</td>
                </tr>
            </table>
        </div>
    )
}