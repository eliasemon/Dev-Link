import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './authAnimations.css'; // Animation styles remain the same

const AuthComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="bg-white md:bg-gradient-to-br md:from-primary-500 md:to-primary-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full pt-10 md:pt-0 md:h-screen flex flex-col md:flex-row items-center justify-center mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-primary-900 md:text-white text-center text-2xl md:text-5xl font-bold">
              Welcome to DevLinks
            </h1>
          </div>

          <Card className="md:w-1/2 p-8  bg-white shadow-none border-none md:border md:shadow-md">
            <CardContent className="w-full">
              <div className="flex justify-around mb-6">
                <Button
                  variant={isSignIn ? 'default' : 'ghost'}
                  onClick={() => setIsSignIn(true)}
                  className={`text-lg font-semibold pb-2 ${
                    isSignIn
                      ? 'text-primary-900 border-b-2 border-primary-900'
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
                      ? 'text-primary-900 border-b-2 border-primary-900'
                      : 'text-gray-400'
                  }`}
                >
                  Sign Up
                </Button>
              </div>

              {/* Animated Transition for Sign In and Sign Up */}
              <div className="h-auto md:h-[60vh] md:overflow-y-auto">
                <SwitchTransition>
                  <CSSTransition
                    key={isSignIn ? 'signIn' : 'signUp'}
                    timeout={300}
                    classNames="fade-slide"
                  >
                    <div className="w-full">
                      {isSignIn ? <SignIn /> : <SignUp />}
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
