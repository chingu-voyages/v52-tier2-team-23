import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function SuccessModal() {
  const [isModalOpen, setOpenModal] = useState(true);

  const handleSubmissionModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {isModalOpen && (
        // Modal Background Mask
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white flex flex-col text-center shadow-2xl rounded-xl max-w-md w-full mx-4">
            <div className="p-8">
              <h2 className="text-3xl font-bold pb-4">Submission Successful</h2>
              <p className="pb-4">
                Thank you! Your form has been successfully submitted.
              </p>
              <p className="pb-4">
                Please note, your preferred time slot is only indicative and
                that you will receive confirmation a few hours before the
                scheduled visit.
              </p>
              <p className="pb-4">
                To cancel your appointment please call 1-800-123-4567
              </p>
              <Link to="/admin-login">
                <Button onClick={() => handleSubmissionModal()}>
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
