const PubSub = require('../helpers/pub_sub.js');
const BucketListView = require('./bucketlist_view.js');

const BucketListGridView = function(container) {
  this.container = container;
};

BucketListGridView.prototype.bindEvents = function() {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

BucketListGridView.prototype.render = function(items) {
  this.container.innerHTML = '';
  const bucketListView = new BucketListView(this.container);
  items.forEach((item) => bucketListView.render(item));
};


module.exports = BucketListGridView;
