const PubSub = require('..helpers/pub_sub.js');

const BucketListFormView = function(form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketListFormView.prototype.handleSubmit = function(evt) {
  evt.preventDefault();
  const newBucketItem = this.createBucketItem(evt.target);
  PubSub.publish(
      'BucketListFormView:bucket-list-item-submitted',
      newBucketItem);
  evt.target.reset();
};
