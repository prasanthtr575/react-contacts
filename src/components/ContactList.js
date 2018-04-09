import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import Header from "./Header";

class ContactList extends React.Component {
	render() {
		let list = this.props.data.contacts.map(
			(contact, i) => 
				<li className="list-group-item" key={i}>
					<Link to={`/detail/${contact.id}`}>
						{contact.firstName} <b> {contact.lastName} </b>
					</Link>
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

const mapStateToProps = (state) => {
  return {
    	data: state.contacts
  	};
};

export default connect(mapStateToProps)(ContactList);