import React from 'react'

export const Review: React.FC<any> = ({ values }) => {
    return (
        <div>
            <table
                style={{ margin: '0 auto', border: "solid 1px" }}
            >
                <tr>
                    <th style={{ border: "1px solid black", padding: "5px" }}>First Name</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}> Last Name</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>Age</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>Number</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>Email</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>Country</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>City</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>Addres</th>
                    <th style={{ border: "1px solid black", padding: "5px" }}>Street</th>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black" }}>{values.firstName}</td>
                    <td style={{ border: "1px solid black" }}>{values.lastName}</td>
                    <td style={{ border: "1px solid black" }}>{values.age}</td>
                    <td style={{ border: "1px solid black" }}>{values.number}</td>
                    <td style={{ border: "1px solid black" }}>{values.email}</td>
                    <td style={{ border: "1px solid black" }}>{values.country}</td>
                    <td style={{ border: "1px solid black" }}>{values.city}</td>
                    <td style={{ border: "1px solid black" }}>{values.address}</td>
                    <td style={{ border: "1px solid black" }}>{values.street}</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black" }}>{values.firstName}</td>
                    <td style={{ border: "1px solid black" }}>{values.lastName}</td>
                    <td style={{ border: "1px solid black" }}>{values.age}</td>
                    <td style={{ border: "1px solid black" }}>{values.number}</td>
                    <td style={{ border: "1px solid black" }}>{values.email}</td>
                    <td style={{ border: "1px solid black" }}>{values.country}</td>
                    <td style={{ border: "1px solid black" }}>{values.city}</td>
                    <td style={{ border: "1px solid black" }}>{values.address}</td>
                    <td style={{ border: "1px solid black" }}>{values.street}</td>
                </tr>
            </table>
        </div>
    )
}