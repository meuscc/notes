import React, { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PageData } from '../PageData'

import './home.scss'

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default function Home(props: any) {
  const pageData = React.useContext(PageData)

  console.log(pageData)

  useEffect(() => {
    //
  }, [])
  return <div>==</div>
}
