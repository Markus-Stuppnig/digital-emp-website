"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "./timelineData";
import SingleTimeline from "./SingleTimeline";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary1 py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <VerticalTimeline lineColor="#fff" animate={true}>
            {timelineData.map((timeline, i) => (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.6)",
                  boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  borderRadius: "20px",
                }}
                contentArrowStyle={{
                  borderRight: "0.6rem solid rgba(250, 250, 250, 0.7)",
                }}
                date={timeline.date}
                // The icon should be a React element, not just a reference
                icon={timeline.icon}
                iconStyle={{ background: "#fc3d59ff", color: "#fff" }}
                className="cursor-pointer"
                visible={true}
              >
                <SingleTimeline timeline={timeline} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
