import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const approvedEmails = import.meta.env.VITE_APPROVED_EMAILS.split(",");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (approvedEmails.includes(email.trim())) {
      toast({
        title: "Login Successful!!",
        description: "Welcome Admin!!",
        type: "success",
        variant: "success",
      });
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
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
    </div>
  );
}
