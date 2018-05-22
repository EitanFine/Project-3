import React from 'react';
import "./howitworks.css";


    class HowItWorks extends React.Component {
        render() {
    return (
        <div>
            <div id="services" className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    </div>
                    <div className="panel-body">
                        <div className=" row text-center">
                            <div className="col-sm-12">
                                <h1>HOW IT WORKS</h1>
                            </div>
                           
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <hr />
                                <div className="howitworksdescription text-center">
                                    RENT MY STUFF is a premier stuff rental and sharing service that provides a platform to connect stuff owners with people
                                    looking to rent or borrow around the world. Through our service, owners list their stuff,
                                    renters search for stuff in whatever area they want, and complete the rental process easily
                                    through our website.
                            </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row howitworks-textcenter">
                            <div className="col-sm-4 asd">
                                <span className="glyphicon glyphicon-search"></span>
                                <h4> Find the Perfect Stuff</h4>
                                <p>Search through thousands of stuff all over the world for one near you.</p>
                            </div>
                            <div className="col-sm-4 asd">
                                <span className="glyphicon glyphicon-list-alt"></span>
                                <h4>
                                    Book a Stuff and Pay</h4>
                                <p>Check the available dates and put in a request or two and message the owner. Then book pay through
                                Rent Our Stuff. It’s cashless and convenient and definitely not a scam.</p>
                            </div>
                            <div className="col-sm-4 asd">
                                <span className="glyphicon glyphicon-tree-conifer"></span>
                                <h4> Post your stuff and have fun
                            </h4>
                                <p>Make money by renting out stuff you dont even use anyway</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="text-center">Step by step instructions on how to use this site
                            </h3>
                                <ul>
                                    <li>
                                        Users who are not signed in can view and browse items
    
                                </li>
                                    <li>
                                        The home page shows all items in our database. Have fun browsing through all of the various stuff that are available to rent!
                                </li>
                                    <li>
                                        Use the category drop down in the navigation bar to view items for rent by category
                                </li>
                                    <li> Once you see an item you like, you can click on "view item" to see more details about the
                                        stuff, including the dates it is available, a large image of the item, and an interactive
                                    map of where the item is located</li>
                                    <li>Users who are signed in are able to post an item</li>
                                    <li> Just click the post item button and fill in the appropriate fields and you're good to go</li>
                                    <li> Happy stuff hunting!</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
    }
export default HowItWorks;