import data from "./data.json";

export let contacts = data.contacts;

export let getContactDetail = id => contacts.find( contact => contact.id === id );

export let addContact = contact => contacts.push(contact);

export let updateContact = contact => {
	let selectedContact = getContactDetail(contact.id);

	selectedContact = contact;

	return true;
}

export let deleteContact = id => contacts = contacts.filter( contact => contact.id !== id )

