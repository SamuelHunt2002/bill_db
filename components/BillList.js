import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';

const BillList = ({ searchTerm }) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'bills'), (snapshot) => {
      const billsData = [];
      snapshot.forEach((doc) => billsData.push({ ...doc.data(), id: doc.id }));
      setBills(billsData);
    });

    return () => unsubscribe();
  }, []);

  const filteredBills = bills.filter((bill) =>
    bill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredBills.map((bill) => (
         
<li key={bill.id}>
        <Link href={`/bill/${bill.id}`}>
         {bill.title}
        </Link>
      </li>
    ))}
  </ul>
</div>
);
};

export default BillList;