import React from "react";

const TeamCard = props => {
  return (
    <div className="member">
      <img
        className="member__pic"
        srcSet={
          props.details.better_featured_image.media_details.sizes.teamSlide
            .source_url
        }
        alt={props.details.title.rendered}
      />
      <h3
        className="member__fullname"
        dangerouslySetInnerHTML={{ __html: props.details.title.rendered }}
      />
      <p
        className="member__jobposition"
        dangerouslySetInnerHTML={{
          __html: props.details.acf.position_expert_cpt
        }}
      />
    </div>
  );
};

export default TeamCard;
