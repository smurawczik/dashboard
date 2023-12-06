import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { TeamTable } from "./TeamTable";

export const TeamTableCard = () => {
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
          <p className="text-md">Team employes</p>
          <p className="text-small text-default-500">
            Information per employee
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <TeamTable />
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://www.google.com/search?q=ag-grid react"
        >
          See in depth team data
        </Link>
      </CardFooter>
    </Card>
  );
};
