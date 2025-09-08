import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const array = await readContacts();
  for (let i = 0; i < number; i += 1) {
    const contact = createFakeContact();
    array.push(contact);
  }
  const arrayString = JSON.stringify(array, null, 2);
  fs.writeFile(PATH_DB, arrayString, 'utf-8');

  console.table(array);
};

generateContacts(5);
