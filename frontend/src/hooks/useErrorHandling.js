import { toast } from "react-toastify";

export default function useErrorHandling() {
  function catchAsync(fn) {
    return async (event) => {
      try {
        await fn(event);
      } catch (err) {
        toast.error(err?.data?.message || "Unknown error! Please try again");
      }
    };
  }

  return { catchAsync };
}
