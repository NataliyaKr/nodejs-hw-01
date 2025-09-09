import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contact = await readContacts();
    const newContact = createFakeContact();
    const newArray = [...contact, newContact];

    await writeContacts(newArray);
    console.log('Added one contact', newContact);
  } catch (error) {
    console.log('Error', error);
  }
};

addOneContact();
