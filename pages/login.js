import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router';

const Login = dynamic(() => import('../components/customer/Login'),
  { ssr: false }
)

function LoginPage() {
  return (
    <>
      <Head>
        <title>Order | commerce</title>
      </Head>
      <Login />
    </>
  )
}

export default withRouter(LoginPage);
