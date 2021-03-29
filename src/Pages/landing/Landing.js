import React, { Component } from "react";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";

export default class Landing extends Component {
  render () {
    return (
      <>
        <img
          src={process.env.PUBLIC_URL + "/landing/corner.png"}
          className='landing-corner'
          alt=''
        />
        <div className='hero-img'>
          <img src={process.env.PUBLIC_URL + "/landing/hero.png"} alt='' />
        </div>
        <div className='landing-page'>
          <div className='landing-header'>
            <div className='logo-wrapper'>
              <div className='logo'>
                <img
                  src={process.env.PUBLIC_URL + "/navbar/sayitsocial.svg"}
                  alt=''
                />
              </div>
              <div className='company'>SayItSocial</div>
            </div>

            <div className='container-buttons'>
              <button className='btn-login'>Login</button>
              <button className='btn-signup'>Signup</button>
            </div>
          </div>
          <div className='hero'>
            <div className='hero-info'>
              <p>With SayItSocial</p>
              <h1>Attend or Host Events you Love.</h1>
              <p className='greyscale'>
                The platform meant to host and attend in person & virtual events
              </p>
              <button className='btn-join'>Join SayItSocial Now</button>
            </div>
          </div>

          <section className='search-section'>
            <h1>Search Events Near You</h1>
            <div className='search-box'>
              <SearchIcon />
              <input
                placeholder='Try Searching for Events e.g. Fitness Bootcamp'
                type='text'
                name='search'
                id=''
              />
              <LocationOnOutlinedIcon />

              <select name='location' id='' placeholder='Pune, MH'>
                <option value='Pune'>Pune , MH</option>
              </select>
              <button className='btn-search'>Search</button>
            </div>
          </section>

          <section className='host-event'>
            <h2>Host events as </h2>
            <div className='host-event--cards'>
              <div className='event-card'>
                <div className='soon'>Available</div>
                <div className='container-img'>
                  <img
                    src={process.env.PUBLIC_URL + "/landing/ngo.png"}
                    alt=''
                  />
                </div>
                <div className='header'>NGO</div>
              </div>

              <div className='event-card'>
                <div className='soon'>Coming Soon</div>
                <div className='container-img'>
                  <img
                    src={process.env.PUBLIC_URL + "/landing/company.png"}
                    alt=''
                  />
                </div>
                <div className='header'>COMPANY</div>
              </div>

              <div className='event-card'>
                <div className='soon'>Coming Soon</div>
                <div className='container-img'>
                  <img
                    src={process.env.PUBLIC_URL + "/landing/social.png"}
                    alt=''
                  />
                </div>
                <div className='header'>SOCIAL GROUP</div>
              </div>
            </div>
          </section>
          <section className='top-attendees'>
            <h1>Top Attendees</h1>
            <br />
            <div className='attendees-cards'>
              <div className='att-card'>
                <div className='att-img'>
                  <img src='' alt='' />
                </div>
                <div className='att-info'>
                  <h4 className='att-name'>Aniket Devgune</h4>
                  <p className='att-points'>1000</p>
                  <p>Points</p>
                </div>
              </div>

              <div className='att-card'>
                <div className='att-img'>
                  <img src='' alt='' />
                </div>
                <div className='att-info'>
                  <h4 className='att-name'>Aniket Devgune</h4>
                  <p className='att-points'>1000</p>
                  <p>Points</p>
                </div>
              </div>

              <div className='att-card'>
                <div className='att-img'>
                  <img src='' alt='' />
                </div>
                <div className='att-info'>
                  <h4 className='att-name'>Aniket Devgune</h4>
                  <p className='att-points'>1000</p>
                  <p>Points</p>
                </div>
              </div>

              <div className='att-card'>
                <div className='att-img'>
                  <img
                    src={process.env.PUBLIC_URL + "/landing/meet.png"}
                    alt=''
                  />
                </div>
                <div className='att-info'>
                  <h4 className='att-name'>Aniket Devgune</h4>
                  <p className='att-points'>1000</p>
                  <p>Points</p>
                </div>
              </div>
            </div>
            <a href=''>See More</a>
          </section>

          <section className='browse-by--category'>
            <h1>Browse by Category</h1>
            <div className='grid-cards'>
              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <h4>Donations</h4>
              </div>
              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <h4>Cleanliness</h4>
              </div>
              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <h4>Blood Donations</h4>
              </div>

              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <h4>Enivronment</h4>
              </div>
              <div className='category-card see-more'>
                <a href=''>See More</a>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
