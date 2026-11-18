import { articles } from "../../data/articles";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Latest Articles
          </h2>

          <p className="mt-2 text-gray-500">
            Curated articles for your learning journey.
          </p>

        </div>

        <button className="rounded-xl border px-5 py-2 hover:bg-gray-50">
          View All
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {articles.map((article) => (

          <ArticleCard
            key={article.id}
            article={article}
          />

        ))}

      </div>

    </section>
  );
}