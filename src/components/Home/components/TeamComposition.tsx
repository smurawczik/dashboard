import { TeamCompositionCard } from "./TeamCompositionCard";

export const TeamComposition = () => {
  const userIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {userIds.map((userId) => (
        <TeamCompositionCard key={userId} userId={userId} />
      ))}
    </div>
  );
};
