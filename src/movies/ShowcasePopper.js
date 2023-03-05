// import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const lineTextStyle = {
  maxWidth: "100%",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function ShowcasePopper({ titleInfo }) {
  const renderTooltip = (props) => (
    <Tooltip className="fw-bold" id="button-tooltip" {...props}>
      {titleInfo.title}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      variant="secondary"
      delay={{ show: 0, hide: 250 }}
      overlay={renderTooltip}
    >
      <a href={titleInfo.homepage} className="col">
        <p className="text-light fs-3 fw-bold text-capitalize mb-2 "
        style={lineTextStyle}>
          {titleInfo.title}
        </p>
      </a>
      {/* <Button variant="success">{title}</Button> */}
    </OverlayTrigger>
  );
}

export default ShowcasePopper;
