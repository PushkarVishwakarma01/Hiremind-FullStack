import { practiceSheets } from "../../data/practiceSheets";
import PracticeCard from "./PracticeCard";

export default function PracticeGrid() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Practice Sheets
          </h2>

          <p className="mt-2 text-gray-500">
            Keep your coding interview preparation on track.
          </p>

        </div>

        <button className="rounded-xl border px-5 py-2 hover:bg-gray-50">
          View All
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {practiceSheets.map((sheet) => (
          <PracticeCard
            key={sheet.id}
            sheet={sheet}
          />
        ))}

      </div>

    </section>
  );
}