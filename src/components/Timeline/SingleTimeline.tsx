import { Timeline } from "@/types/timeline";

const SingleTimeline = ({ timeline }: { timeline: Timeline }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">{timeline.title}</h3>
      <p>{timeline.paragraph}</p>
    </div>
  );
};

export default SingleTimeline;
