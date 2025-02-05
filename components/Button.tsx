import { Button } from "./ui/button";

const ButtonComponent = ({ text }) => {
  return (
    <Button className="bg-gray-900 text-white py-2 rounded-[10px] px-4">
      {text}
    </Button>
  );
};

export default ButtonComponent;
