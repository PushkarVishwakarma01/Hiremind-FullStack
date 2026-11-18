import { resources } from "../../data/resources";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid({
  search = "",
  category = "all",
}) {
  const filteredResources = resources
    .filter((resource) => {
      const matchesCategory =
        category === "all" ||
        resource.category === category;

      const keyword = search.toLowerCase();

      const matchesSearch =
        resource.title.toLowerCase().includes(keyword) ||
        resource.description.toLowerCase().includes(keyword) ||
        resource.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => b.aiMatch - a.aiMatch);

  return (
    <section className="mt-14">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2
            className="text-3xl font-bold"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Recommended For You
          </h2>

          <p className="mt-2 text-gray-500">
            AI selected resources based on your profile.
          </p>
        </div>

        <button className="rounded-xl border border-gray-200 px-5 py-2 text-sm font-medium transition hover:bg-gray-50">
          View All
        </button>
      </div>

      {/* Grid */}

      {filteredResources.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-white">
          <h3 className="text-xl font-semibold text-gray-700">
            No Resources Found
          </h3>

          <p className="mt-2 text-gray-500">
            Try another search or category.
          </p>
        </div>
      )}
    </section>
  );
}