import React from "react";

const TeamCardGrid = props => {

  let x = props.index + 1;
  let y = x <= 2 || (x > 5 && x < 9) || (x > 11 && x < 15) || (x > 17 && x < 21)  ;

  return (

    <div className={(y) ? "member--about team--right" : "member--about team--left"}>

      <img
        className="member__pic"
        srcSet={
          props.details.better_featured_image.media_details.sizes.teamCardGrid
            .source_url
        }
        alt={props.details.title.rendered}
      />
      <h3
        className="member__fullname mt"
        dangerouslySetInnerHTML={{ __html: props.details.title.rendered }}
      />
      <p
        className="member__jobposition"
        dangerouslySetInnerHTML={{
          __html: props.details.acf.position_expert_cpt
        }}
      />

      {/* <img className="member__pic" srcSet={props.details.better_featured_image.media_details.sizes.teamSlide.source_url} alt={props.details.title.rendered} />
      <h2 className="member__fullname mt" dangerouslySetInnerHTML={{ __html: props.details.title.rendered }} />
      <p className="member__jobposition" dangerouslySetInnerHTML={{ __html: props.details.acf.position_expert_cpt }} /> */}

    </div>
  );
};

export default TeamCardGrid;
