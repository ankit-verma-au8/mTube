import React, { Component } from "react";
import { fetchSubscriptions } from "../redux/actions/subscriptionActions";
import { connect } from "react-redux";
import SubsListitem from "../components/SubsListitem";

export class SubscriptionsPage extends Component {
  componentDidMount() {
    this.props.fetchSubscriptions();
  }

  render() {
    return this.props.subscriptiosData ? (
      this.props.subscriptiosData.items.map((element) => {
        return <SubsListitem key={element.id} subscriptions={element} />;
      })
    ) : (
      <h1>Loading Subscriptions....</h1>
    );
  }
}

const mapStateToprops = (storeData) => {
  return {
    subscriptiosData: storeData.userState.mySubscriptions,
  };
};

export default connect(mapStateToprops, {
  fetchSubscriptions: fetchSubscriptions,
})(SubscriptionsPage);
