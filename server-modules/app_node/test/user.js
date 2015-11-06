var username = "u" + Date.now();
var email = "u" + Date.now() + "@test.com";
var password = "password1";
describe("User", function() {

  describe("User.signUp", function() {
    it("should sign up", function(done) {
      var user = new SH.User();
      user.set("username", username);
      user.set("password", password);
      user.set("email", email);
      // other fields can be set just like with Parse.Object
      user.set("mobileNumber", "449-843-149");

      user.signUp(null, {
        success: function(user) {
          debug(user);
          expect(user.id).to.be.ok();
          done();
          // Hooray! Let them use the app now.
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          throw error;
        }
      });
    });
  });

  describe("User.logIn and User.become", function() {
    it("should login", function(done) {
      SH.User.logIn(username, password, {
        success: function(user) {
          expect(user.get("username")).to.be(username);
          // console.dir(user);
          SH.User.become(user._sessionToken, {
            success: function(theUser) {
              expect(theUser.get("username")).to.be(username);
              done();
            },
            error: function(err) {
              throw err;
            }
          });
          // Do stuff after successful login.
        },
        error: function(user, error) {
          throw error;
          // The login failed. Check error to see why.
        }
      });

    });
  });

  // describe("Current User",function(){
  //   it("should return current user",function(done){

  //     var currentUser = SH.User.current();
  //     expect(currentUser).to.be.ok();
  //     SH.AV.User.currentAsync().then(function(user) {
  //       expect(user).to.be.ok();
  //       done();
  //     });
  //   });
  // });

  describe("User update", function() {
    it("shoud update name", function(done) {

      var user = SH.User.logIn(username, password, {
        success: function(user) {
          user.set("username", username); // attempt to change username
          user.save(null, {
            success: function(user) {
              done();
              /*


                 var query = new AV.Query(SH.User);
                 query.get("516528fa30046abfb335f2da", {
                 success: function(userAgain) {
                 userAgain.set("username", "another_username");
                 userAgain.save(null, {
                 error: function(userAgain, error) {
                 done();
              // This will error, since the Parse.User is not authenticated
              }
              });
              },
              error: function(err){
              throw err;
              }
              });
              */
            }
          });
        }
      });
    });
  });

  describe("Update user password", function() {
    it("should update password", function(done) {
      var user = SH.User.logIn(username, password, {
        success: function(user) {
          user.updatePassword(password, 'new pass').then(function() {
            SH.User.logIn(username, 'new pass').then(function(user) {
              user.updatePassword('new pass', password).then(function() {
                done();
              });
            });
          });
        },
        error: function(err) {
          throw err;
        }
      });
    });
  });

  describe("User query", function() {
    it("should return conditoinal users", function(done) {
      var query = new SH.AV.Query(SH.User);
      query.equalTo("mobileNumber", "449-843-149"); // find all the women
      query.find({
        success: function(women) {
          done();
        }
      });
    });
  });


  // describe("Associations",function(){
  //   it("return post relation to user",function(done){
  //     var user = SH.User.current();

  //     // Make a new post
  //     var Post = AV.Object.extend("Post");
  //     var post = new Post();
  //     post.set("title", "My New Post");
  //     post.set("body", "This is some great content.");
  //     post.set("user", user);
  //     post.save(null, {
  //       success: function(post) {
  //         // Find all posts by the current user
  //         var query = new AV.Query(Post);
  //         query.equalTo("user", user);
  //         query.find({
  //           success: function(usersPosts) {
  //             expect(usersPosts.length).to.be.ok();
  //             done();
  //           },
  //           error:function(err){
  //             throw err;
  //           }
  //         });
  //       }
  //     });

  //   });
  // });

  describe("Follow/unfollow users", function() {
    it("should follow/unfollow", function(done) {
      var user = SH.User.current();
      user.follow('56346e7060b2804569446e03', {
        success: function() {
          var query = user.followeeQuery();
          query.find({
            success: function(results) {
              expect(results.length).to.be(1);
              debug(results);
              expect(results[0].id).to.be('56346e7060b2804569446e03');
              var followerQuery = SH.User.followerQuery('56346e7060b2804569446e03');
              followerQuery.find().then(function(results) {
                expect(results.filter(function(result) {
                  return result.id === user.id;
                })).not.to.be(0);
                debug(results);
                //unfollow
                user.unfollow('56346e7060b2804569446e03').then(function() {
                  //query should be emtpy
                  var query = user.followeeQuery();
                  query.find({
                    success: function(results) {
                      expect(results.length).to.be(0);
                      done();
                    },
                    error: function(err) {
                      throw err;
                    }
                  });
                }, function(err) {
                  throw err;
                });
              }, function(err) {
                throw err;
              });
            },
            error: function(err) {
              throw err;
            }
          });
        },
        error: function(err) {
          done(err);
        }
      });
    });
  });

  describe("Destroy user", function() {
    it("should destroy user", function(done) {
      var user = SH.User.current();
      user.destroy({
        success: function(user) {
          user.fetch({
            success: function(user) {
              throw Error("User is not destroyed");
            },
            error: function(user, error) {
              expect(error.message).to.be("Could not find user");
              done();
            }
          });
        },
        error: function(user, error) {
          throw error;
        }
      });
    });
  });
});