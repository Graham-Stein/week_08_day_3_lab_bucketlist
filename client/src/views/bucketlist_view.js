const PubSub = require('../helpers/pub_sub.js');

const BucketListView = function(container) {
  this.container = container;
};

BucketListView.prototype.render = function(bucket) {
  console.log('BucketList View:', bucket);
  console.log('BucketList View:', bucket.type);
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const newListItem = document.createElement('h3');
  newListItem.textContent = bucket.type;
  bucketContainer.appendChild(newListItem);

  this.container.appendChild(bucketContainer);
};


module.exports = BucketListView;
