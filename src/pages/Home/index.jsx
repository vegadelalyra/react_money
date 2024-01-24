import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import theHomeReducer from '../../store/reducers/HomeReducer';
import styles from './Home.css';

const store = configureStore({
    reducer: {
        home: theHomeReducer,
    },
});

const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const dispatch = useDispatch();
    const homeState = useSelector(state => state.home);

    useEffect(() => {
        // Fetch data from Firebase here
        // ...
        // Update state based on fetched data
        // ...
    }, []);

    const handleAddContact = contact => {
        const action = setContacts({
            payload: [...contacts, contact],
        });
        dispatch(action);
    };

    return (
        <div className={styles.container}>
            {/* Header section */}
            <header className={styles.header}>
                <h1>Transferring Money</h1>
                <div className={styles.balance}>
                    <p>Balance</p>
                    <h2>${homeState.balance}</h2>
                </div>
            </header>

            {/* Content section */}
            <main className={styles.content}>
                {/* Contact list */}
                <section className={styles.contactList}>
                    <h2>Contacts</h2>
                    <ul>
                        {homeState.contacts.map(contact => (
                            <li key={contact.id}>{contact.name}</li>
                        ))}
                    </ul>
                    <button onClick={() => handleAddContact()}>
                        Add Contact
                    </button>
                </section>

                {/* Transaction history */}
                <section className={styles.transactionHistory}>
                    <h2>History</h2>
                    <ul>
                        {homeState.transactions.map(transaction => (
                            <li key={transaction.id}>
                                {transaction.description}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* QR code and transfer options (complete based on the image) */}
            </main>
        </div>
    );
};

export default Home;
