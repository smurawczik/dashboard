import { Button, Input } from "@nextui-org/react";
import { PasswordInput } from "../../PasswordInput";

export const SignUpForm = () => {
  return (
    <form className="flex items-center flex-col gap-4">
      <Input
        variant="bordered"
        className="max-w-xs"
        size="sm"
        type="text"
        placeholder="First Name"
      />
      <Input
        variant="bordered"
        className="max-w-xs"
        size="sm"
        type="text"
        placeholder="Last Name"
      />
      <Input
        variant="bordered"
        className="max-w-xs"
        size="sm"
        type="email"
        placeholder="Email"
      />
      <PasswordInput />
      <Button variant="bordered" color="primary">
        Sign Up
      </Button>
    </form>
  );
};
