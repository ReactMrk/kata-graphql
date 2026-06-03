import React, { useState } from 'react';
import { CustomerProvider } from './CustomerContext';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import Alert from './Alert';
import CustomerSearchAndRemove from "./CustomerSearchAndRemove";

const CustomerManagement = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const [homeAlertText, setHomeAlertText] = useState("");
	const [homeAlertVisible, setHomeAlertVisible] = useState(false);
	const handleLogin = loggedIn => () => {
		setLoggedIn(!loggedIn);
	}
	return (
		<>
			<div style={{ display: "inline-block" }}>
				<button onClick={handleLogin(loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>
			</div>
			<Alert visible={homeAlertVisible} text={homeAlertText}/>
			{loggedIn && (
				<CustomerProvider>
					<CustomerForm />
					<CustomerList setHomeAlertVisible={setHomeAlertVisible} setHomeAlertText={setHomeAlertText} />
					<CustomerSearchAndRemove />
				</CustomerProvider>
			)}
		</>
	)
};

export default CustomerManagement;
