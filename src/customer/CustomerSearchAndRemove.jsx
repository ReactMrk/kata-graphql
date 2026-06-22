import React, {useContext, useState} from "react";
import ExtraFields from "./ExtraFields";
import {CustomerContext} from "./CustomerContext";

const CustomerSearchAndRemove = () => {
    const { setCustomers } = useContext(CustomerContext);
    const [email, setEmail] = useState("");

    //TODO: use searchResultCustomer to display the result of searchCustomer
    const [searchResultCustomer, setSearchResultCustomer] = useState();

    const searchCustomer = async () => {
       //TODO: perform searchCustomer operation
    };

    const removeCustomer = async () => {
        //TODO: perform removeCustomer operation
    };

    return (
        <>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ marginTop: "10px", width: "100%" }}>
                <button onClick={searchCustomer}>Search</button>
                <button onClick={removeCustomer}>Remove</button>
            </div>
            {!!searchResultCustomer && (
                <ul className='customer-list'>
                    <li key={searchResultCustomer?.email}>
                        <strong>{searchResultCustomer?.name}</strong>
                        <br/>
                        <span>Email: {searchResultCustomer?.email}</span>
                        <br/>
                        <span>Phone: {searchResultCustomer?.phone}</span>
                        <br/>
                        <span>Gross Salary: {searchResultCustomer?.grossSalary}</span>
                        <br/>
                        <ExtraFields email={searchResultCustomer?.email}/>
                    </li>
                </ul>
            )}
        </>
    );
};

export default CustomerSearchAndRemove;
