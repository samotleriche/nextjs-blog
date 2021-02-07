import React from 'react';
import { useRouter } from 'next/router';

const Posti = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
    <>
      {params
        ? params.map((val, id) => {
            return (
              <div key={id}>
                Hello {id}: {val}
              </div>
            );
          })
        : ''}
    </>
  );
};

export default Posti;
