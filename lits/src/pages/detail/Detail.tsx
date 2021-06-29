import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './Detail.scss'

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Detail(props: any) {
  const navigate = useLocation()
  console.log(props)
  console.log(navigate)
  useEffect(() => {
    //
  }, [])
  return <div>详情</div>
}
