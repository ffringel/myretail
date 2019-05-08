import React, { Component } from "react";

class CustomerReview extends Component {
  /*Get the overall rating of the product and also
  the total number of reviews and render to screen*/
  getReviewStats = reviews => {
    if (reviews === undefined) {
      return <div />;
    } else {
      return (
        <div className="ui horizontal list">
          <div className="item">
            <div
              className="ui star rating"
              data-rating={reviews[0].consolidatedOverallRating}
              data-max-rating="5"
            >
              {reviews[0].consolidatedOverallRating} Overall
            </div>
          </div>
          <div className="item">
            <div className="content">{reviews[0].totalReviews} reviews</div>
          </div>
        </div>
      );
    }
  };

  //Get the positives (rating 4+) reviews and display on the PRO column
  getProReviews = review => {
    if (review === undefined) {
      return <div />;
    } else {
      return (
        <div className="comment">
          <div className="content">
            <a className="author">{review[0].Pro[0].title}</a>
            <div className="metadata">
              <span className="date">{review[0].Pro[0].datePosted}</span>
            </div>
            <div className="text">{review[0].Pro[0].review}</div>
            <div className="actions">
              <a className="reply">{review[0].Pro[0].screenName}</a>
            </div>
          </div>
        </div>
      );
    }
  };

  //get the bad (rating 1 - 2) reviews and display on the CON column
  getConReviews = review => {
    if (review === undefined) {
      return <div />;
    } else {
      return (
        <div className="comment">
          <div className="content">
            <a className="author">{review[0].Con[0].title}</a>
            <div className="metadata">
              <span className="date">{review[0].Con[0].datePosted}</span>
            </div>
            <div className="text">{review[0].Con[0].review}</div>
            <div className="actions">
              <a className="reply">{review[0].Con[0].screenName}</a>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    const review = this.props.reviews;
    const stats = this.getReviewStats(review);
    const proReviews = this.getProReviews(review);
    const conReviews = this.getConReviews(review);
    return (
      <div className="segments">
        <div className="ui divider" />
        {stats}
        <div className="ui divider" />
        <div className="ui stackable two column grid">
          <div className="column">
            <h3 className="ui header">PRO</h3>
            <div className="ui comments">{proReviews}</div>
          </div>
          <div className="column">
            <h3 className="ui header">CON</h3>
            <div className="ui comments">{conReviews}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerReview;
