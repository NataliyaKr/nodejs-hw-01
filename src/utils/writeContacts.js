import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToString = JSON.stringify(updatedContacts, null, 2);
    fs.writeFile(PATH_DB, dataToString, 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};
