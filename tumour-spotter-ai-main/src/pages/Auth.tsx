import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Chrome, Facebook } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button 
          asChild 
          variant="ghost" 
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Card className="p-8 bg-card border-0 shadow-elevated">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-medical-dark mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Sign in to access your brain scan analysis dashboard" 
                : "Join thousands of healthcare professionals using our AI platform"
              }
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <Button 
              variant="outline" 
              className="w-full h-12 text-left justify-start border-border hover:bg-accent"
            >
              <Chrome className="mr-3 h-5 w-5 text-blue-500" />
              Continue with Google
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-left justify-start border-border hover:bg-accent"
            >
              <Mail className="mr-3 h-5 w-5 text-red-500" />
              Continue with Gmail
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-left justify-start border-border hover:bg-accent"
            >
              <Facebook className="mr-3 h-5 w-5 text-blue-600" />
              Continue with Facebook
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-left justify-start border-border hover:bg-accent"
            >
              <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Continue with Microsoft
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-left justify-start border-border hover:bg-accent"
            >
              <Phone className="mr-3 h-5 w-5 text-green-500" />
              Continue with Phone Number
            </Button>
          </div>

          <div className="relative mb-6">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-4 text-sm text-muted-foreground">
                or continue with email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="h-12"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="Confirm your password"
                  className="h-12"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link 
                  to="#" 
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-primary hover:shadow-medical text-white font-medium"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-medium"
              >
                {isLogin ? "Create one" : "Sign in"}
              </button>
            </p>
          </div>

          {!isLogin && (
            <div className="mt-6 text-xs text-muted-foreground text-center">
              By creating an account, you agree to our{" "}
              <Link to="#" className="text-primary hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Auth;