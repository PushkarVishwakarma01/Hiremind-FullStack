import { videos } from "../../data/videos";
import VideoCard from "./VideoCard";

export default function VideoGrid() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Popular Videos
          </h2>

          <p className="mt-1 text-gray-500">
            AI recommended tutorials
          </p>

        </div>

        <button className="rounded-xl border px-5 py-2 hover:bg-gray-50">
          View All
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {videos.map((video) => (

          <VideoCard
            key={video.id}
            video={video}
          />

        ))}

      </div>

    </section>
  );
}