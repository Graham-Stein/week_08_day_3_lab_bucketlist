const BucketListFormView = require('./views/bucketlist_form_view.js');
const BucketListGridView = require('./views/bucketlist_gridview.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketForm = document.querySelector('form#list-form');
  console.log('form:', bucketForm);
  const bucketFormView = new BucketListFormView(bucketForm);
  bucketFormView.bindEvents();

  const url = 'http://localhost:3000/api/bucketList';
  const bucketList = new BucketList(url);
  bucketList.bindEvents();
  bucketList.getData();
});
