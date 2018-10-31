const PubSub = require('../helpers/pub_sub.js');

const BucketListFormView = function(form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (evt) => {
    console.log('event:', evt);
    this.handleSubmit(evt);
  });
};

BucketListFormView.prototype.handleSubmit = function(evt) {
  evt.preventDefault();
  console.log('event in publish', evt);
  console.log('event TARGET in publish', evt.target[0].value);
  console.log('event TARGET.VALUE in publish', evt.target.type.value);
  const newBucketItem = this.createBucketItem(evt.target);
  PubSub.publish(
      'BucketListFormView:bucket-list-item-submitted',
      newBucketItem);
  evt.target.reset();
};

BucketListFormView.prototype.createBucketItem = function(form) {
  console.log('Form????', form);
  const newListItem = {
    type: form.type.value,
  };
  return newListItem;
};

module.exports = BucketListFormView;
