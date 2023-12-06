import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { FC } from "react";
import { useUser } from "../hooks/useUser";

export const TeamCompositionCard: FC<{ userId: string }> = ({ userId }) => {
  const { loading } = useUser(userId);

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none bg-gradient-to-b from-indigo-500 via-purple-500"
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />
        </div>
      )}
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src="/images/hero-card.jpeg"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
        <p className="text-tiny text-white/80">
          {loading ? "loading..." : "Available soon"}
        </p>
        <Button
          className="text-tiny text-white bg-black/20 disabled:bg-black/50"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          disabled={loading}
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
};
