import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
    title: state.jPlayer.media.title,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    ({title, attributes, ...props}) => <div className={classNames.TITLE} {...attributes}>{title}</div>
);