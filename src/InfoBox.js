import React from "react";

const InfoBox = ({ open, classProp }) => {
  return (
    <div className={"info-box " + classProp}>
      <p>
        This project was inspired by a desire to connect people to the aqueous
        flows weaving together our lives across histories and enabling our
        collective wellbeing. In Philadelphia, a territory colonized through{" "}
        <a href="https://hiddencityphila.org/2019/08/philadelphias-forgotten-forebears-how-pennsylvania-erased-the-lenape-from-local-history/">
          deception and forced expropriation
        </a>
        , our rivers have shaped the character of the city, and yet, like the
        communities who have stewarded this land before us, much is wagered on
        us not paying them any mind. Water is the great connector; her cycles
        implicate us all in mutually assured flourishing or destruction. Whether
        it's European viral strains,{" "}
        <a href="https://www.phillyvoice.com/philadelphia-water-contaminated-chemicals-pfas-environmental-working-group-reports/">
          PFAs,
        </a>{" "}
        or{" "}
        <a href="https://www.ecowatch.com/pennsylvania-fracking-water-contamination-much-higher-than-reported-1882166816.html">
          methane
        </a>
        , the chemical byproducts of capital's self-valorization will always
        make their way into the body public.
      </p>
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
