const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function() {
  // PubSub.subscribe('BucketListView:bucketListItem-delete-clicked', (evt) => {
  //   this.deleteSighting(evt.detail);
  // });
  PubSub.subscribe('BucketListFormView:bucket-list-item-submitted', (evt) => {
    console.log('EVT DETAIL IN MODEL:', evt.detail);
    this.postBucketItem(evt.detail);
  });
};
BucketList.prototype.postBucketItem = function(item) {
  console.log(item);
  this.request.post(item)
      .then((items) => {
        PubSub.publish('BucketList:data-loaded', items);
      })
      .catch(console.error);
};
  // To do another subscribe to new form being created
  //make post request to server to add new data

BucketList.prototype.getData = function() {
  this.request.get()
      .then((bucketListItems) => {
        PubSub.publish('BucketList:data-loaded', bucketListItems);
      })
      .catch(console.error);
};

module.exports = BucketList;
