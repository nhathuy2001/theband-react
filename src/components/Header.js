import React from 'react'
export default function Header() {
  return (
    <div>
        <div id="header">
    {/* <!-- Begin: Nav --> */}
    <ul id="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#band">Band</a></li>
        <li><a href="#tour">Tour</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
            <a href="#">
                More
                <i class="nav-arrow-down ti-angle-down"></i>
            </a>
            <ul class="subnav">
                <li><a href="#">Merchandise</a></li>
                <li><a href="#">Extras</a></li>
                <li><a href="#">Media</a></li>
            </ul>
        </li>
    </ul>
    {/* <!-- End: Nav --> */}

    {/* <!-- Mobile button --> */}
    <div id="mobile-menu" class="mobile-menu-btn">
        <i class="menu-icon ti-menu"></i>
    </div>
    {/* <!-- Search button --> */}
    <div class="search-btn">
        <i class="search-icon ti-search"></i>
    </div>
</div></div>
  )
}
