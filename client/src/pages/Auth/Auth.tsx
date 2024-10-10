import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './authAnimations.css'; // Animation styles remain the same

const AuthComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen max-w-3xl flex flex-col items-center justify-center mx-auto">
        <div>
          {/* Logo and Branding */}
          <Card className="mb-8 p-4 text-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-[#2e9ccc] text-2xl font-bold">
                Welcome to DevLinks
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="w-full max-w-xl p-8 overflow-hidden bg-white shadow-md">
          <CardContent>
            <div className="flex justify-around mb-6">
              <Button
                variant={isSignIn ? 'default' : 'ghost'}
                onClick={() => setIsSignIn(true)}
                className={`text-lg font-semibold pb-2 ${
                  isSignIn
                    ? 'text-[#2e9ccc] border-b-2 border-[#2e9ccc]'
                    : 'text-gray-400'
                }`}
              >
                Sign In
              </Button>
              <Button
                variant={!isSignIn ? 'default' : 'ghost'}
                onClick={() => setIsSignIn(false)}
                className={`text-lg font-semibold pb-2 ${
                  !isSignIn
                    ? 'text-[#2e9ccc] border-b-2 border-[#2e9ccc]'
                    : 'text-gray-400'
                }`}
              >
                Sign Up
              </Button>
            </div>

            {/* Animated Transition for Sign In and Sign Up */}
            <SwitchTransition>
              <CSSTransition
                key={isSignIn ? 'signIn' : 'signUp'}
                timeout={300}
                classNames="fade-slide"
              >
                <div>{isSignIn ? <SignIn /> : <SignUp />}</div>
              </CSSTransition>
            </SwitchTransition>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthComponent;
