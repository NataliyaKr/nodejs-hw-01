import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    const contacts = await readContacts();
    if (contacts.length === 0) {
        console.log('No contacts to remove.');
        return;
    }
    await writeContacts([]);
    console.log('All contacts removed successfully.');
};

removeAllContacts();
