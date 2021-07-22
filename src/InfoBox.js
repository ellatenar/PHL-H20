import React from "react";

const InfoBox = (open) => {
  return (
    <div className="info-box">
      <p>
        To support the work being done to preserve the Southern Unami dialect of
        Lenape spoken in this area, read more about{" "}
        <a href="https://www.talk-lenape.org/">
          the Lenape Language Preservation Project
        </a>
        , or consider donating to{" "}
        <a href="https://www.lenape-nation.org/">
          the Lenape Nation of Pennsylvania
        </a>
        .
      </p>
      <p>
        From{" "}
        <a href="https://www.opendataphilly.org/dataset/major-watersheds-regional">
          OpenDataPhilly
        </a>
        :{" "}
        <span className="i">
          Data was developed originally from either USGS and the 2004 Sanborn
          DEM (digital elevation model) using ArcHydro watershed extraction
          tools. Major watersheds are dissolved from subshed boundaries which
          reflect surface flow in relationship to stormwater inlets and
          outfalls.
        </span>
      </p>
      <p>
        site design by <a href="https://github.com/ellatenar">Ella Heron</a>
      </p>
    </div>
  );
};

export default InfoBox;
