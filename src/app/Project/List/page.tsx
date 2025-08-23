import { OrganismsWipproCard } from "@/app/_components/organisms/WipproCard";

export default function ProjectListPage() {
  return(
      <div className="timeline bg-white h-full overflow-y-auto custom-scrollbar px-3">
      {Array.from({ length: 3 }, (_, index) => (
        <OrganismsWipproCard className="mt-3" key={index} />
      ))}
    </div>
  )
}