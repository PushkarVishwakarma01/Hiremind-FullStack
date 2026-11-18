import { resources } from "../../data/resources";
import ResourceCard from "./ResourceCard";

export default function ContinueLearning() {

    const continueLearning =
        resources.filter(resource => resource.progress > 0);

    return (

        <section className="mt-10">

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-3xl font-bold">
                        Continue Learning
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Pick up where you left off
                    </p>

                </div>

                <button className="text-pink-500 font-medium hover:underline">

                    View All

                </button>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

                {continueLearning.map(resource => (

                    <ResourceCard
                        key={resource.id}
                        resource={resource}
                    />

                ))}

            </div>

        </section>

    );

}