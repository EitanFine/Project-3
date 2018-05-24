import React from "react";
import "./howitworks.css";

class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <div id="services" className="container">
          <div className="panel panel-primary">
            <div className="panel-heading" />
            <div className="panel-body">
              <div className=" row text-center">
                <div className="col-sm-12">
                  <h1 id='howItWorks'>HOW IT WORKS</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <hr />
                  <div className="howitworksdescription text-center">
                    RENT MY STUFF is a premier stuff rental and services
                    providing platform to connect stuff owners and thing doers
                    with other people looking to rent or get stuff done around
                    the world. Through our service, owners list their stuff or
                    service, users search for stuff in whatever area they want,
                    and complete the rental process easily through our website.
                  </div>
                </div>
              </div>
              <hr />
              <div className="row howitworks-textcenter">
                <div className="col-sm-4 asd">
                  <span className="glyphicon glyphicon-search" /><br />
                  <h4> Find the Perfect Stuff or Service</h4>
                  <p>
                    Search through thousands of stuff and services all over the
                    world for one near you.
                  </p>
                </div>
                <div className="col-sm-4 asd">
                  <span className="glyphicon glyphicon-list-alt" /><br />
                  <h4>Book a Stuff/Service and Pay</h4>
                  <p>
                    Check the available dates and put in a request or two and
                    message the owner. Then book and pay through Rent Our Stuff.
                    It’s cashless and convenient and definitely not a scam.
                  </p>
                </div>
                <div className="col-sm-4 asd">
                  <span className="glyphicon glyphicon-tree-conifer" /><br />
                  <h4> Post your stuff and have fun</h4>
                  <p>
                    Make money by renting out stuff you dont even use anyway or
                    offering skills that come in handy but don't need everyday.
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="text-center">
                    Step by step instructions on how to use this site
                  </h3>
                  <ul>
                    <li>
                      Users who are not signed in can view and browse listings.
                    </li>
                    <li>
                      Through the home page, choose if you want to browse stuff
                      listings or service listings. Depending on which one you
                      choose, you can see all items in our database. Have fun
                      browsing through all of the various stuff that are
                      available to rent!
                    </li>
                    <li>
                      Use the navigation bar to easily switch between services
                      or rentals.
                    </li>
                    <li>
                      {" "}
                      Once you see a listing you like, you can click on "view
                      listing" to see more details about the stuff or service,
                      including the dates it is available, a large image of the
                      item, and an interactive map of where the item is located,
                      complete with step by step directions on how to get there.
                    </li>
                    <li>
                      Only users who are signed in are able to post an item
                    </li>
                    <li>
                      {" "}
                      Just click the post item button and fill in the
                      appropriate fields and you're good to go
                    </li>
                    <li> Happy stuff hunting!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HowItWorks;
