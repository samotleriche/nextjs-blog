import React from 'react'
import { useRouter } from 'next/router'

const Posti = () => {

  const router = useRouter();
  const { params } = router.query;
  console.log(params)
  return (
    <>
    {params ? params.map((val, id) => {
      return (
      <div>Hello {id}: { val }</div>
      )
    }) : ''}
    </>
  )
}

export default Posti;