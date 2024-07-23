import React from 'react'

export default function Content() {
  return (
    <div><div id="content">
    {/* <!-- About section --> */}
    <div id="band" class="content-section">
        <h2 class="section-heading">THE BAND</h2>
        <p class="section-sub-heading">We love music</p>
        <p class="about-text">
            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                    
        </p>
        <div class="row members-list">
            <div class="col col-third text-center">
                <p class="member-name">Name</p>
                <img src="../public/images/band/member1.jpg" alt="" class="member-img"/>
            </div>
            <div class="col col-third text-center">
                <p class="member-name">Name</p>
                <img src="assets/img/band/member1.jpg" alt="" class="member-img"/>
            </div>
            <div class="col col-third text-center">
                <p class="member-name">Name</p>
                <img src="assets/img/band/member1.jpg" alt="" class="member-img"/>
            </div>
        </div>
    </div> 
    
    {/* <!-- Tour section --> */}
    <div id="tour" class="tour-section">
        <div class="content-section">
            <h2 class="section-heading text-white">TOUR DATE</h2>
            <p class="section-sub-heading text-white">Remember to book your tickets!</p>
             
            {/* <!-- Tickets --> */}
            <ul class="tickets-list">
                <li>September <span class="sold-out">Sold out</span></li>
                <li>October <span class="sold-out">Sold out</span></li>
                <li>November <span class="quantity">3</span></li>
            </ul>
                                {/* <!-- Places --> */}
             <div class="row places-list">
                <div class="col col-third">
                    <img src="./assets/img/places/place1.jpg" alt="" class="place-img"/>
                    <div class="place-body">
                        <h3 class="place-heading">New York</h3>
                        <p class="place-time">Fri 27 Nov 2016</p>
                        <p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <a href="#" class="btn">Buy Tickets</a>
                    </div>
                </div>
                <div class="col col-third">
                    <img src="./assets/img/places/place2.jpg" alt="" class="place-img"/>
                    <div class="place-body">
                        <h3 class="place-heading">Paris</h3>
                        <p class="place-time">Sat 28 Nov 2016</p>
                        <p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <a href="#" class="btn">Buy Tickets</a>
                    </div>
                </div>
                <div class="col col-third">
                    <img src="./assets/img/places/place3.jpg" alt="" class="place-img"/>
                    <div class="place-body">
                        <h3 class="place-heading">San Francisco</h3>
                        <p class="place-time">Sun 29 Nov 2016</p>
                        <p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <a href="#" class="btn">Buy Tickets</a>
                    </div>
                </div>
             </div>
        </div>
    </div>

    {/* <!--Begin: Contact section --> */}
    <div id="contact" class="content-section">
        <h2 class="section-heading">CONTACT</h2>
        <p class="section-sub-heading">Fan?Drop a note!</p>
        
        <div class="row contact-content">
            <div class="col col-half contact-info">
                <p><i class="ti-location-pin"></i>Chicago, US</p>
                <p><i class="ti-mobile"></i>Phone: +00 151515</p>
                <p><i class="ti-email"></i>Email: mail@mail.com</p>
            </div>
            <div class="col col-half contact-form">
                <form action="">
                    <div class="row">
                        <div class="col col-half">
                            <input type="text" name="" placeholder="Name" required id="" class="form-control"/>
                        </div>
                        <div class="col col-half">
                            <input type="email" name="" placeholder="Email" required id="" class="form-control"/>
                        </div>
                    </div>
                    <div class="row mt-8">
                        <div class="col col-full">
                            <input type="text" name="" placeholder="Message" required id="" class="form-control"/>
                        </div>
                    </div>
                    <input class="btn mt-16 pull-right" type="submit" value="SEND"/>
                </form>
            </div>
        </div>
    </div>
    {/* <!--End: Contact section --> */}

    <div class="map-section">
        <img src="./assets/img/places/map.jpg" alt=""/>
    </div>
</div></div>
  )
}
