Template.postEdit.events({
  'submit form': function (e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Posts.update(currentPostId, {
      $set: postPropertries
    }, function (error) {
      if (error) {
        alert(error.reason);
      }else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function (e) {
    e.preventDefault();

    if (confirm("delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postList');
    }
  }
});
