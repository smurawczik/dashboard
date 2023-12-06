import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { TeamChart } from "./TeamChart";

export const TeamChartCard = () => {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Team Performance</p>
          <p className="text-small text-default-500">
            based on task per sprint
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <TeamChart />
      </CardBody>
    </Card>
  );
};
