import React from 'react';
import dynamic from 'next/dynamic';

// Import the login handler/form dynamically with SSR disabled to prevent Next.js
// from "optimising" it with static rendering, which means it doesn't have access
// to router params.
const LoginHandler = dynamic(
  () => import('../components/customer/LoginHandler'),
  { ssr: false },
);

function LoginPage() {
  return <LoginHandler />;
}

export default LoginPage;
