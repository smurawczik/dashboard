import { TeamChartCard } from "./TeamChartCard";
import { TeamTableCard } from "./TeamTableCard";

export const Dashboard = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ml-2 mr-2">
      <TeamChartCard />
      <TeamTableCard />
    </div>
  );
};
