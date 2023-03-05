// import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const lineTextStyle = {
  maxWidth: "100%",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function TitlePopper({ titleInfo }) {
  const renderTooltip = (props) => (
    <Tooltip className="fw-bold" id="button-tooltip" {...props}>
      {titleInfo.name}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      variant="secondary"
      delay={{ show: 0, hide: 250 }}
      overlay={renderTooltip}
    >
      <a href={titleInfo.homePath} className="p-0">
        <p
          className="text-light fw-bold text-capitalize mb-2 p-0 title-name "
          id="name"
          // style={hovTitle ? null : lineTextStyle}
          style={lineTextStyle}
        >
          {titleInfo.name}
        </p>
      </a>
      {/* <Button variant="success">{title}</Button> */}
    </OverlayTrigger>
  );
}

export default TitlePopper;
