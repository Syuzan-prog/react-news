import React from "react";
import PropTypes from "prop-types";
import "./Article.css";

class Article extends React.Component {
  state = {
    visible: false,
  };

  handleReadMoreClck = (e) => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { author, text, bigText } = this.props.data;
    const { visible } = this.state;
    return (
      <div className="article">
        <p className="news__author ">{author}</p>
        <p className="news__text">{text}</p>
        {!visible && (
          <a
            href="#"
            onClick={this.handleReadMoreClck}
            className="new
                    s__readmore"
          >
            Подробнее
          </a>
        )}
        {visible && <p>{bigText}</p>}
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
  }),
};

export { Article };
