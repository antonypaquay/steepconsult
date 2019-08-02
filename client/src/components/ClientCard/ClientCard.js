import React from "react";



const ClientCard = (props) => {


    return (

      <React.Fragment>
        <img className="testimonial__img" srcSet={props.details.better_featured_image.media_details.sizes.clientSlide.source_url} alt={props.details.title.rendered}/>
        <h3 className="testimonial__quote mt" dangerouslySetInnerHTML={{__html : props.details.acf.quote_clients_cpt}}/>
        <p className="testimonial__id mt" dangerouslySetInnerHTML={{__html : props.details.title.rendered}}/>
        <p className="testimonial__position"  dangerouslySetInnerHTML={{__html : props.details.acf.position_clients_cpt}}/>
      </React.Fragment>

    );
}

export default ClientCard;
