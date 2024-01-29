import { v4 as uuidv4 } from 'uuid';

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

export const getRandomSection = amount => {
  const array = amount > 0 ? incomeSections : deficitSections;
  return array[Math.floor(Math.random() * array.length)];
};

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
  const isIncome = transferCharge > 0;
  const sectionCategory = isIncome ? incomeSections : deficitSections;

  const generateFormattedDate = () => {
    const currentTime = new Date();
    const formattedDate = `${currentTime.getHours()}:${currentTime.getMinutes()} ${currentTime.toLocaleDateString()}`;
    return formattedDate;
  };

  const transaction = {
    id: uuidv4(),
    contactToTransfer: { name: transferName },
    section: getRandomSection(sectionCategory),
    time: generateFormattedDate(), // Replace with actual random date generation logic
    amount: transferCharge, // Generating a random change between -50 and 50
  };

  return transaction;
};

export { generateTransaction };
