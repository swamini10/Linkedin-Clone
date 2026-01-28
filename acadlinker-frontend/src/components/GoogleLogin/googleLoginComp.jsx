import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
const GoogleLoginComp = () => {
  const handleOnSuccess = (credResponse) => {
    console.log(credResponse)
  }
  return (
    <div className='w-full'>
      <GoogleLogin
        onSuccess={(credentialResponse) => handleOnSuccess(credentialResponse)}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  )
}

export default GoogleLoginComp
