"use client";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LogoPath from "@/assets/logo.png";
import { ISignInPayload } from "@/lib/interfaces/auth/login";
import { loginAPI } from "@/utils/services/auth";
const SignIn = () => {
  const navigate = useNavigate();
  const [loginBody, setLoginBody] = useState<ISignInPayload>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginBody({ ...loginBody, [name]: value });
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      setErrors([]);
      const response = await loginAPI({ payload: loginBody });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data.message);
      }
    } catch (err: any) {
      if (err.status === 422) {
        setErrors(err.data.errors);
      }
      if (err.status == 401) {
        setErrorMessage(err.data.message);
      }
      console.error({ err });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/auth/login/login-bg.jpg')] bg-cover">
      <Card className=" bg-gradient-to-b from-[#a4d8e4] to-white-100 border-none drop-shadow-lg">
        <CardHeader className="flex flex-col space-y-1 justify-center items-center">
          <img
            src={LogoPath}
            alt="logo"
            className="w-[200px] mx-auto animate-in zoom-in-0 duration-1000"
          />
          <CardTitle className="text-center text-xl">
            Login to your account
          </CardTitle>
          <CardDescription className="font-normal text-center text-gray-500 text-xs">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  className="appearance-none block py-1 h-12 text-lg rounded-none focus:outline-none focus:border-gray-500 focus-visible:ring-0 focus-visible:shadow-none"
                  type="email"
                  value={loginBody.email}
                  onChange={onChangeTextField}
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
                {/* <ErrorMessages errorMessages={errors} keyName="email" /> */}
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  className="appearance-none block py-1 h-12 text-lg rounded-none focus:outline-none focus:border-gray-500 focus-visible:ring-0 focus-visible:shadow-none"
                  type="password"
                  value={loginBody.password}
                  onChange={onChangeTextField}
                  name="password"
                  id="password"
                  placeholder=" Enter Password"
                />
                <Link
                  //   to="/forgot-password"
                  className="ml-auto inline-block text-sm"
                >
                  Forgot password?
                </Link>

                {/* <ErrorMessages errorMessages={errors} keyName="password" /> */}
              </div>
            </div>
            <p className="text-red-500">{errorMessage}</p>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="w-full bg-sky-900 hover:bg-sky-800"
            onClick={() => navigate({ to: "/" })}
          >
            {loading ? (
              <>
                Logging you in...
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              "Login"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
