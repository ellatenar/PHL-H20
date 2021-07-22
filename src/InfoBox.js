import React from "react";

const InfoBox = ({ open, classProp }) => {
  return (
    <div className={"info-box " + classProp}>
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
        all mapping data from{" "}
        <a href="https://www.opendataphilly.org/">OpenDataPhilly</a>
      </p>
      <p>
        site design by <a href="https://github.com/ellatenar">Ella Heron</a>
      </p>
    </div>
  );
};

export default InfoBox;
