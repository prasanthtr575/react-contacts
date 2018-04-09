import React from "react";

import Header from "./Header";

class ContactList extends React.Component {
	render() {
		let list = this.props.contacts.map(
			(contact, i) => 
				<li className="list-group-item" key={i}>
					{contact.firstName} <b> {contact.lastName} </b>
				</li>
		)
		return (
			<div>
				<Header title="Contacts"/>
				<ul className="list-group">{list}</ul>
			</div>
		)
	}
}

export default ContactList;