import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './authAnimations.css'; // Animation styles for transitions

const AuthComponent = () => {
  // State to determine if the Sign In or Sign Up form is displayed
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  return (
    <div className="bg-white md:bg-gradient-to-br md:from-primary-500 md:to-primary-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full pt-10 md:pt-0 md:h-screen flex flex-col md:flex-row items-center justify-center mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-primary-900 mt-12 md:mt-0 md:text-white text-center text-2xl md:text-5xl font-bold">
              Welcome to DevLinks
            </h1>
          </div>
          <p className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-primary-500  text-white mx-auto text-center  text-sm w-full md:w-2/4 p-2 rounded-lg  m-3">
            <span className="block">Test Account</span>
            <span className="block">Email: admin@example.com</span>
            <span className="block">Password: Password123@</span>
          </p>
          <Card className="md:w-1/2 p-8 bg-white shadow-none border-none md:border md:shadow-md">
            <CardContent className="w-full">
              <div className="flex justify-around mb-6">
                {/* Sign In Button */}
                <Button
                  variant={isSignIn ? 'default' : 'ghost'}
                  onClick={() => setIsSignIn(true)}
                  className={`text-lg font-semibold pb-2 ${isSignIn ? 'text-primary-900 border-b-2 border-primary-900' : 'text-gray-400'}`}
                >
                  Sign In
                </Button>

                {/* Sign Up Button */}
                <Button
                  variant={!isSignIn ? 'default' : 'ghost'}
                  onClick={() => setIsSignIn(false)}
                  className={`text-lg font-semibold pb-2 ${!isSignIn ? 'text-primary-900 border-b-2 border-primary-900' : 'text-gray-400'}`}
                >
                  Sign Up
                </Button>
              </div>

              {/* Animated Transition for Sign In and Sign Up */}
              <div className="h-auto md:h-[60vh] md:overflow-y-auto px-2">
                <SwitchTransition>
                  <CSSTransition
                    key={isSignIn ? 'signIn' : 'signUp'}
                    timeout={300}
                    classNames="fade-slide"
                  >
                    <div className="w-full">
                      {/* Render SignIn or SignUp component based on state */}
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
