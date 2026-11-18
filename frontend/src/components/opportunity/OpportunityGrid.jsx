import OpportunityCard from "./OpportunityCard";
import { opportunities } from "../../data/opportunitiesjs";

export default function OpportunityGrid({
  activeCategory,
}) {
  const filtered =
    activeCategory === "all"
      ? opportunities
      : opportunities.filter(
          (item) =>
            item.category === activeCategory
        );

  return (
    <section className="mt-10">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recommended Opportunities
          </h2>

          <p className="mt-1 text-gray-500">
            Curated for your profile
          </p>

        </div>

        <button className="rounded-xl border border-gray-200 px-5 py-2 text-sm hover:bg-gray-50">
          View All
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((item) => (

          <OpportunityCard
            key={item.id}
            opportunity={item}
          />

        ))}

      </div>

    </section>
  );
}