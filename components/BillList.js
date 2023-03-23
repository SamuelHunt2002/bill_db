import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const BillList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'bills'), (snapshot) => {
      const billsData = [];
      snapshot.forEach((doc) => billsData.push({ ...doc.data(), id: doc.id }));
      setBills(billsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id}>
            <h3>Bill Number: {bill.billNumber}</h3>
            <p>Title: {bill.title}</p>
            <p>Long Title: {bill.longTitle}</p>
            <p>Content: {bill.content}</p>
            <p>
              Tags:{' '}
              {bill.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < bill.tags.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
