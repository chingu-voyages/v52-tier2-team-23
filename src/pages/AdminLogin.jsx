import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const approvedEmails = import.meta.env.VITE_APPROVED_EMAILS?.split(",") || [];
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debug approved emails and input email
    console.log("Approved Emails: ", approvedEmails);
    console.log("Entered Email: ", email.trim());

    if (approvedEmails.includes(email.trim())) {
      toast({
        title: "Login Successful!!",
        description: "Welcome Admin!!",
        type: "success",
        variant: "success",
      });

      // Redirect after a delay
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 1000); // Adjust delay if needed
    } else {
      toast({
        title: "Access Denied!!!",
        description: "You have entered an invalid email address!!!",
        type: "error",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-fit p-6 bg-white rounded-lg shadow-md">
        <div className="text-center pb-8">
          <h1 className="text-5xl font-bold pb-4">Welcome, Admin!</h1>
          <p className="text-2xl">
            To login, please fill in your @solarpanel.co.uk email address below
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm ml-1 mb-1 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
