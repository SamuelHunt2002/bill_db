import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const BillList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('bills').onSnapshot((snapshot) => {
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
          <li key={bill.id}>{bill.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
