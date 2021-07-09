import React, { Component } from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import EventCard from "../../components/events/attended/eventCard";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

export default class Landing extends Component {
  componentDidMount = () => {
    const reviews = document.querySelector(".container-reviews");
    const indicators = document.querySelectorAll(".indicator");

    indicators[0].addEventListener("click", () => {
      reviews.style.transform = "translatex(0px)";
      indicators[1].classList.remove("active");
      indicators[0].classList.add("active");
    });

    indicators[1].addEventListener("click", () => {
      reviews.style.transform = "translatex(-90vw)";
      indicators[0].classList.remove("active");
      indicators[1].classList.add("active");
    });
  };

  render() {
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

          <section className='what-we-do'>
            <div className='container-image'>
              {/* <img
                src={process.env.PUBLIC_URL + "/landing/corner.png"}
                alt=''
              />*/}
              <img
                className='img-ngo'
                src={process.env.PUBLIC_URL + "/landing/ngo.png"}
                alt=''
              />
            </div>
            <div className='content'>
              <h1>What we do ?</h1>
              <br />
              <p>
                We bring <span className='highlight'> organizations </span> and
                <span className='highlight'> volunteers </span>on a single
                platform,thus simplifying further processes to connect,track and
                manage Events happening around!
              </p>
              <br />
              <button className='btn-explore'>Explore More</button>
            </div>
          </section>

          {/* <div className='left-corner'>
            <img
              src={process.env.PUBLIC_URL + "/landing/corner.png"}
              className='benefit-corner'
              alt=''
            />
          </div> */}
          <div className='left-benefit-corner'>
            <img
              src={process.env.PUBLIC_URL + "/landing/03.png"}
              className='benefit-corner'
              alt=''
            />
          </div>
          <section className='benefit'>
            <h1>How we will benefit you ?</h1>
            <div className='card-wrapper'>
              {/* <div className='volunteer-card'>
                <h2>As a volunteer :</h2>
                <ul>
                  <li>Know about ongoing events easily!</li>
                  <li>Track your organisation's work seemlessly</li>
                  <li>Get Exciting rewards for your efforts taken</li>
                </ul>
                <button>Start as volunteer</button>
              </div>
              <div className='organisation-card'>
                <h2>As an organisation :</h2>
                <ul>
                  <li>Help spread words about your campaigns faster !</li>
                  <li>Find responsible volunteers easily</li>
                  <li>Grow your organisation with us</li>
                </ul>
                <button>Start as organisation</button>
              </div> */}
              <h2>As a volunteer</h2>

              <div className='volunteer-cards'>
                <div className='v-card'>
                  <div className='v-img'>
                    <img
                      src={process.env.PUBLIC_URL + "/landing/track.svg"}
                      alt=''
                    />
                  </div>
                  <p>Track events seemlessly</p>
                </div>
                <div className='v-card'>
                  <div className='v-img'>
                    <img
                      src={process.env.PUBLIC_URL + "/landing/event.svg"}
                      alt=''
                    />
                  </div>
                  <p>Know about ongoing events</p>
                </div>
                <div className='v-card'>
                  <div className='v-img'>
                    <img
                      src={process.env.PUBLIC_URL + "/landing/award.svg"}
                      alt=''
                    />
                  </div>
                  <p>Get rewards for your work</p>
                </div>
              </div>
              <h2>As an organization</h2>
              <div className='org-cards'>
                <div className='v-card'>
                  <div className='v-img'>
                    <img
                      src={process.env.PUBLIC_URL + "/landing/grow.svg"}
                      alt=''
                    />
                  </div>
                  <p>Grow your work with us</p>
                </div>
                <div className='v-card'>
                  <div className='v-img'>
                    <img
                      src={process.env.PUBLIC_URL + "/landing/spread.svg"}
                      alt=''
                    />
                  </div>
                  <p>Spread awareness exponentially</p>
                </div>
                <div className='v-card'>
                  <div className='v-img'>
                    <img
                      src={process.env.PUBLIC_URL + "/landing/people.svg"}
                      alt=''
                    />
                  </div>
                  <p>Get responsible volunteers</p>
                </div>
              </div>
            </div>
          </section>

          <section className='testimonial'>
            <h1>What our clients say about us</h1>
            <div className='container-reviews'>
              <div className='review'>
                <FormatQuoteIcon
                  style={{
                    fontSize: "50px",
                    color: "#ea4997",
                    marginBottom: "1rem",
                  }}
                />
                <div className='content'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus iure qui modi consectetur quia odio vero, ipsam hic
                  accusantium accusamus. Quae consequatur vero ut in? Sapiente
                  nihil alias soluta exercitationem.
                </div>
                <div className='review-img'></div>
                <h4 style={{ color: "gray" }}>Organization Name</h4>
              </div>
              <div className='review'>
                <FormatQuoteIcon
                  style={{
                    fontSize: "50px",
                    color: "#ea4997",
                    marginBottom: "1rem",
                  }}
                />
                <div className='content'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus iure qui modi consectetur quia odio vero, ipsam hic
                  accusantium accusamus. Quae consequatur vero ut in? Sapiente
                  nihil alias soluta exercitationem.
                </div>
                <h4 style={{ color: "gray" }}>Organization Name</h4>
              </div>
              <div className='review'>
                <FormatQuoteIcon
                  style={{
                    fontSize: "50px",
                    color: "#ea4997",
                    marginBottom: "1rem",
                  }}
                />
                <div className='content'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus iure qui modi consectetur quia odio vero, ipsam hic
                  accusantium accusamus. Quae consequatur vero ut in? Sapiente
                  nihil alias soluta exercitationem.
                </div>
                <h4 style={{ color: "gray" }}>Organization Name</h4>
              </div>
              <div className='review'>
                <FormatQuoteIcon
                  style={{
                    fontSize: "50px",
                    color: "#ea4997",
                    marginBottom: "1rem",
                  }}
                />
                <div className='content'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus iure qui modi consectetur quia odio vero, ipsam hic
                  accusantium accusamus. Quae consequatur vero ut in? Sapiente
                  nihil alias soluta exercitationem.
                </div>
                <h4 style={{ color: "gray" }}>Organization Name</h4>
              </div>
            </div>
            <div className='indicators'>
              <div className='indicator active'></div>
              <div className='indicator'></div>
            </div>
          </section>

          {/* <section className='search-section'>
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

          <section className='attend-events-near-you'>
            <h1>Attend Events Near You</h1>
            <div className='event-attend-cards'>
              <EventCard
                title='Data Science Meetup'
                date={"Mon, Aug 17 , 8.00 PM "}
                desc='Live and Interactive Practical Training on Job
in IT Industry'
                footer_title='Big Events Pvt. Ltd.'
              />
              <EventCard
                title='Data Science Meetup'
                date={"Mon, Aug 17 , 8.00 PM "}
                desc='Live and Interactive Practical Training on Job
in IT Industry'
                footer_title='Big Events Pvt. Ltd.'
              />
              <EventCard
                title='Data Science Meetup'
                date={"Mon, Aug 17 , 8.00 PM "}
                desc='Live and Interactive Practical Training on Job
in IT Industry'
                footer_title='Big Events Pvt. Ltd.'
              />
            </div>
            <a href=''>See More</a>
          </section>

          <section className='host-event'>
            <h1>Host events as </h1>
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
                <p>Donations</p>
              </div>
              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <p>Cleanliness</p>
              </div>
              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <p>Blood Donations</p>
              </div>

              <div className='category-card'>
                <div className='category-img'>
                  <img src='' alt='' />
                </div>
                <p>Enivronment</p>
              </div>
              <div className='category-card see-more'>
                <a href=''>See More</a>
              </div>
            </div>
    </section> */}
        </div>
      </>
    );
  }
}
