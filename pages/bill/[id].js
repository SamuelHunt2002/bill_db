import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const BillPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [bill, setBill] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBill = async () => {
        const billDoc = await getDoc(doc(db, 'bills', id));
        if (billDoc.exists()) {
          setBill({ ...billDoc.data(), id: billDoc.id });
        }
      };
      fetchBill();
    }
}, [id]);

if (!bill) {
return <div>Loading...</div>;
}

return (
<div>
<h1>{bill.title}</h1>
<h2>{bill.longTitle}</h2>
<p>Bill Number: {bill.billNumber}</p>
<div>
<h3>Tags:</h3>
<ul>
{bill.tags.map((tag, index) => (
<li key={index}>{tag}</li>
))}
</ul>
</div>
<div>
<h3>Content:</h3>
<p>{bill.content}</p>
</div>
</div>
);
};

export default BillPage;