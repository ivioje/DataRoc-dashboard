import { Button } from "../ui/button";

interface ButtonProps {
  text: any;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Button className="bg-gray-900 text-white sm:py-2 py-[6px] rounded-[6px] sm:px-4 px-[10px] text-[13px]">
      {text}
    </Button>
  );
};

export default ButtonComponent;
