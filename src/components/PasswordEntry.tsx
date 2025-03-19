import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  password: string;
  confirmPassword: string;
};

type Props = {
  onSubmit?: (pwd: string) => void;
};

export function PasswordEntry({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ criteriaMode: "all" });
  const [serverMessage, setServerMessage] = useState<string>("");

  const onFormSubmit = (data: FormValues) => {
    setServerMessage("Password is valid and accepted!");
    if (onSubmit) {
      onSubmit(data.password);
    }
  };

  const passwordValue = watch("password", "");

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Password Entry</h2>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              validate: {
                hasUpperCase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain at least one uppercase letter",
                hasLowerCase: (value) =>
                  /[a-z]/.test(value) ||
                  "Password must contain at least one lowercase letter",
                hasNumber: (value) =>
                  /[0-9]/.test(value) ||
                  "Password must contain at least one number",
                hasSpecialChar: (value) =>
                  /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(value) ||
                  "Password must contain at least one special character (!@#$%^&*()_-+={[}]|:;\"'<,>.)",
              },
            })}
          />
          {errors.password && errors.password.types ? (
            <div className="mt-1 text-sm text-red-500">
              {Object.values(errors.password.types).map((error, idx) => (
                <p key={idx}>{error}</p>
              ))}
            </div>
          ) : errors.password ? (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      {serverMessage && (
        <div className="mt-4 text-center font-medium text-green-500">
          {serverMessage}
        </div>
      )}
    </div>
  );
}
