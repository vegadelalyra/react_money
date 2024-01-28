import { v4 as uuidv4 } from "uuid";

const incomeSections = [
  'Project bonus',
  'Payments',
  'Add money',
  'Salary',
  'Freelance income',
  'Investments',
  'Gifts',
  'Refunds',
  'Rent income',
  'Interest income',
  // Add more as needed
];

const deficitSections = [
  'Movie tickets',

  'Grocery',
  'QR code',
  'Rent',
  'Utilities',
  'Dining out',
  'Shopping',
  'Healthcare',
  'Transportation',
  'Insurance',
  // Add more as needed
];

const getRandomSection = array =>
  array[Math.floor(Math.random() * array.length)];

  /*
    Transaction structure:
          {
        id: 123,
        name: 'Anthony Robinson',
        section: 'Project bonus',
        date: '21/08/23',
        charge: 300,
      },
  */
const generateTransaction = (transferName, transferCharge) => {
  const isIncome = transferCharge > 0 
  const sectionCategory = isIncome ? incomeSections : deficitSections;

  const generateFormattedDate = () => {
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${
      now.getFullYear() % 100
    }`;
    return formattedDate;
  };

  const transaction = {
    id: uuidv4(),
    name: transferName,
    section: getRandomSection(sectionCategory),
    date: generateFormattedDate(), // Replace with actual random date generation logic
    charge: transferCharge, // Generating a random change between -50 and 50
  };

  return transaction;
};

export { generateTransaction };
