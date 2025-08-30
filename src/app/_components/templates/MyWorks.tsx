import { WorkGroup } from "@/app/_type/data";
import { OrganismsGroupCard } from "../organisms/GroupCard";

type Props = {
  userId: string;
  workGroups: WorkGroup[];
}

export const TemplatesMyWorks = (props: Props) => {
  return (
    <div>
      <h1>My Works</h1>
      <p>User ID: {props.userId}</p>
      {props.workGroups.map((group, index) => (
        <OrganismsGroupCard className="mt-3" key={index} group={group} />
      ))}
    </div>

  );
};
