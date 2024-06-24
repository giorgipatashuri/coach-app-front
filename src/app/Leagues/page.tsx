import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

export default async function Homet() {
  const getEnglishLeague = await filterLeague("Premier League");
  console.log("test", getEnglishLeague);
  return (
    <div className="w-full">
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
}
