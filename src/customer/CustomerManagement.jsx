import { useState } from 'react';
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import Alert from "./Alert";

const CustomerManagement = () => {
	const [customers, setCustomers] = useState([]);
	const [loggedIn, setLoggedIn] = useState(true);
	const [homeAlertText, setHomeAlertText] = useState("");
	const [homeAlertVisible, setHomeAlertVisible] = useState(false);
	const handleLogin = loggedIn => () => {
		!loggedIn && setCustomers([]);
		setLoggedIn(!loggedIn);
	}
	return (
		<>
			<button onClick={handleLogin(loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>
			<Alert visible={homeAlertVisible} text={homeAlertText}/>
			{loggedIn && (
				<>
					<CustomerForm setCustomers={setCustomers}/>
					<CustomerList customers={customers} setHomeAlertVisible={setHomeAlertVisible} setHomeAlertText={setHomeAlertText} />
				</>
			)}
		</>
	)
};

export default CustomerManagement;