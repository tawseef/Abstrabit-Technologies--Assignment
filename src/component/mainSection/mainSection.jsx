import "./mainSection.style.css";
import { PiChart } from "./piChart/piChart";
import Cards from "./cardSection/card";
import SideBanner from "./sideBanner/sideBanner";
import FAQ from "./FAQ/faq";
import { Chart } from "react-google-charts";
import { data } from "./horizontalChart/horizontalChart";

function MainSection() {
  return (
    <>
      <div className="mainSectionWrapper">
        <div className="userName"> Welcome, Johan Paul</div>
        <div className="chart">
          <div className="piChart">
            <PiChart />
          </div>
          <div className="horizontalChart">
            <div className="timelineChartText">FD Maturity Timeline</div>
            <Chart
              className="timeChart"
              chartType="Timeline"
              data={data}
              width="729px"
              height="286px"
              options={{
                timeline: {
                  singleColor: "#3B39D9",
                },
              }}
            />
          </div>
        </div>

        <div className="cardAndBanner">
          <div className="cardSection">
            <Cards />
            <FAQ />
          </div>
          <div className="BannerSection">
            <SideBanner />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
