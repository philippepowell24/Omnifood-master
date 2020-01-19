import React from "react";
import ReactDOM from "react-dom";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img
          src="img/whiteLogo.png"
          alt="Omnifood logo"
          className="header__logo"
        />
        <nav className="nav">
          {/*
          <img
            src="img/img/logo.png"
            alt="Omnifood logo"
            class="header__logo-black"
          />
          */}
          <ul className="nav__list js--nav">
            <li className="nav__item">
              <a href="#features" className="nav__link">
                Food delivery
              </a>
            </li>
            <li className="nav__item">
              <a href="#works" className="nav__link">
                How it works
              </a>
            </li>
            <li className="nav__item">
              <a href="#cities" className="nav__link">
                Our cities
              </a>
            </li>
            <li className="nav__item">
              <a href="#plans" className="nav__link">
                Sign up
              </a>
            </li>
          </ul>
          {/*
          <a class="main-nav__mobile-icon js--nav-icon" href="*">
            <i class="ion-navicon-round" />
          </a>
          */}
        </nav>
        <h1 className="heading-1">
          goodbye junk food. <br /> hello super healthy meals.
        </h1>
        <div className="cta">
          <a className="btn btn__full js--scroll-to-plans" href="*">
            I'm hungry
          </a>
          <a className="btn btn__ghost js--scroll-to-start" href="*">
            Show me more
          </a>
        </div>
      </header>
      <section className="features">
        <div className="features__heading">
          <h2 className="heading-2">Get food fast &mdash; not fast food</h2>
          <p className="features__text">
            Hello, we're Omnifood, your new premium food delivery service. We
            know you're always busy. No time for cooking. So let us take care of
            that, we're really good at it, we promise!
          </p>
        </div>

        <div className="features__list">
          <div className="features__item">
            <i className="ion-ios-infinite-outline features__icon--big" />
            <h3 className="heading-3">Up to 365 days/year</h3>
            <p className="features__item--text">
              Never cook again! We really mean that. Our subscription plans
              include up to 365 days/year coverage. You can also choose to order
              more flexibly if that's your style.
            </p>
          </div>
          <div className="features__item">
            <i className="ion-ios-stopwatch-outline features__icon--big" />
            <h3 className="heading-3">Ready in 20 minutes</h3>
            <p className="features__item--text">
              You're only twenty minutes away from your delicious and super
              healthy meals delivered right to your home. We work with the best
              chefs in each town to ensure that you're 100% happy.
            </p>
          </div>
          <div className="features__item">
            <i className="ion-ios-nutrition-outline features__icon--big" />
            <h3 className="heading-3">100% organic</h3>
            <p className="features__item--text">
              All our vegetables are fresh, organic and local. Animals are
              raised without added hormones or antibiotics. Good for your
              health, the environment, and it also tastes better!
            </p>
          </div>
          <div className="features__item">
            <i className="ion-ios-cart-outline features__icon--big" />
            <h3 className="heading-3">Order anything</h3>
            <p className="features__item--text">
              We don't limit your creativity, which means you can order whatever
              you feel like. You can also choose from our menu containing over
              100 delicious meals. It's up to you!
            </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src="img/1NEW.jpg" alt="Food 1" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img src="img/2.jpg" alt="Food 2" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img src="img/3.jpg" alt="Food 3" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img src="img/4.jpg" alt="Food 4" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img src="img/5.jpg" alt="Food 5" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img src="img/6.jpg" alt="Food 6" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img src="img/7.jpg" alt="Food 7" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img src="img/8.jpg" alt="Food 8" className="gallery__img" />
        </figure>
      </section>
      <section className="product">
        <div className="heading-2">How it works &mdash; Simple as 1, 2, 3</div>
        <div className="product__presentation">
          <img
            src="img/iPhoneApp.png"
            alt="Omnifood app on iPhone"
            className="product__presentation--content"
          />
          <div className="product__presentation--features">
            <div className="product__presentation--features-box">
              <div>1</div>
              <p>
                Choose the subscription plan that best fits your needs and sign
                up today.
              </p>
            </div>
            <div className="product__presentation--features-box">
              <div>2</div>
              <p>
                Order your delicious meal using our mobile app or website. Or
                you can even call us!
              </p>
            </div>
            <div className="product__presentation--features-box">
              <div>3</div>
              <p>
                Enjoy your meal after less than 20 minutes. See you the next
                time!
              </p>
            </div>
            <div className="product__presentation--features-btn">
              <a href="*" className="product__presentation--features-btn">
                <img
                  src="img/download-app.svg"
                  alt="App Store Button"
                  className="product__presentation--features-image-1"
                />
              </a>
              <a href="*" className="product__presentation--features-btn">
                <img
                  src="img/download-app-android.png"
                  alt="Play Store Button"
                  className="product__presentation--features-image-2"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="locations">
        <div className="heading-2">We're currently in these cities</div>
        <div className="locations__cities">
          <div className="locations__cities-1">
            <img src="img/lisbon-3.jpg" alt="Lisbon" />
            <h3 className="heading-3">Lisbon</h3>
            <div className="locations__feature">
              <i className="ion-ios-person icon-small" />
              1600+ happy eaters
            </div>
            <div className="locations__feature">
              <i className="ion-ios-star icon-small" />
              60+ top chefs
            </div>
            <div className="locations__feature">
              <i className="ion-social-twitter icon-small" />
              <a href="*">@omnifood_lx</a>
            </div>
          </div>
          <div className="locations__cities-2">
            <img src="img/san-francisco.jpg" alt="San Francisco" />
            <h3 className="heading-3">San Francisco</h3>
            <div className="locations__feature">
              <i className="ion-ios-person icon-small" />
              3700+ happy eaters
            </div>
            <div className="locations__feature">
              <i className="ion-ios-star icon-small" />
              120+ top chefs
            </div>
            <div className="locations__feature">
              <i className="ion-social-twitter icon-small" />
              <a href="*">@omnifood_sf</a>
            </div>
          </div>
          <div className="locations__cities-3">
            <img src="img/berlin.jpg" alt="Berlin" />
            <h3 className="heading-3">Berlin</h3>
            <div className="locations__feature">
              <i className="ion-ios-person icon-small" />
              2400+ happy eaters
            </div>
            <div className="locations__feature">
              <i className="ion-ios-star icon-small" />
              80+ top chefs
            </div>
            <div className="locations__feature">
              <i className="ion-social-twitter icon-small" />
              <a href="*">@omnifood_br</a>
            </div>
          </div>
          <div className="locations__cities-4">
            <img src="img/london.jpg" alt="London" />
            <h3 className="heading-3">London</h3>
            <div className="locations__feature">
              <i className="ion-ios-person icon-small" />
              800+ happy eaters
            </div>
            <div className="locations__feature">
              <i className="ion-ios-star icon-small" />
              20+ top chefs
            </div>
            <div className="locations__feature">
              <i className="ion-social-twitter icon-small" />
              <a href="*">@omnifood_ln</a>
            </div>
          </div>
        </div>
      </section>
      <section className="story">
        <div className="heading-2">Our customers can't live without us</div>
        <div className="story__box">
          <div className="story__box-1">
            <blockquote className="story__box--content">
              Omnifood is just awesome! I just launched a startup which leaves
              me with no time for cooking, so Omnifood is a life-saver. Now that
              I got used to it, I couldn't live without my daily meals!
              <cite className="story__box--citation">
                <img src="img/customer-1.jpg" alt="Cust 1" />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="story__box-2">
            <blockquote className="story__box--content">
              Inexpensive, healthy and great-tasting meals, delivered right to
              my home. We have lots of food delivery here in Lisbon, but no one
              comes even close to Omifood. Me and my family are so in love!
              <cite className="story__box--citation">
                <img src="img/customer-2.jpg" alt="Cust 2" />
                Joana Silva
              </cite>
            </blockquote>
          </div>
          <div className="story__box-3">
            <blockquote className="story__box--content">
              I was looking for a quick and easy food delivery service in San
              Franciso. I tried a lot of them and ended up with Omnifood. Best
              food delivery service in the Bay Area. Keep up the great work!
              <cite className="story__box--citation">
                <img src="img/customer-3.jpg" alt="Cust 1" />
                Milton Chapman
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <h2 className="heading-2">Start eating healthy today</h2>
        <div className="subscribe__plans">
          <div className="subscribe__cards">
            <div>
              <h3 className="heading-3">Premium</h3>
              <p className="subscribe__cards-price">
                $399 <span>/ month</span>
              </p>
              <p className="subscribe__cards-price-meal">
                That's only 13.30$ per meal
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />1 meal
                  every day
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Order 24/7
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Access to newest creations
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Free delivery
                </li>
              </ul>
            </div>
            <div>
              <a href="*" className="btn btn__full">
                Sign up now
              </a>
            </div>
          </div>
          <div className="subscribe__cards">
            <div>
              <h3 className="heading-3">Pro</h3>
              <p className="subscribe__cards-price">
                $199 <span>/ month</span>
              </p>
              <p className="subscribe__cards-price-meal">
                That's only 9.30$ per meal
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />1 meal
                  every day
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Order 24/7
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Access to newest creations
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Free delivery
                </li>
              </ul>
            </div>
            <div>
              <a href="*" className="btn btn__ghost">
                Sign up now
              </a>
            </div>
          </div>
          <div className="subscribe__cards">
            <div>
              <h3 className="heading-3">Starter</h3>
              <p className="subscribe__cards-price">
                $59 <span>/ month</span>
              </p>
              <p className="subscribe__cards-price-meal">
                That's only 6.30$ per meal
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />1 meal
                  every day
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Order 24/7
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Access to newest creations
                </li>
                <li>
                  <i className="ion-ios-checkmark-empty icon-small" />
                  Free delivery
                </li>
              </ul>
            </div>
            <div>
              <a href="*" className="btn btn__ghost">
                Sign up now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2 className="heading-2">Start eating healthy today</h2>
        <form method="post" action="#" className="contact__form">
          <div className="contact__form-box">
            <label className="contact__form-box--label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="contact__form-box--input"
              required
            />
          </div>
          <div className="contact__form-box">
            <label className="contact__form-box--label">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              className="contact__form-box--input"
              required
            />
          </div>
          <div className="contact__form-box">
            <label className="contact__form-box--label">
              How did you find us?
            </label>
            <select name="find-us" id="find-us">
              <option value="friends" selected>
                Friends
              </option>
              <option value="search">Search engine</option>
              <option value="ad">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="contact__form-box">
            <label className="contact__form-box--label">Newsletter</label>
            <div className="checkbox">
              <input type="checkbox" name="news" id="news" checked /> Yes,
              please
            </div>
          </div>
          <div className="contact__form-box">
            <label className="contact__form-box--label">Drop us a line</label>
            <textarea name="message" placeholder="Your message" />
          </div>

          <div className="contact__form-box">
            <label>&nbsp;</label>
          </div>
          <div className="contact__form-btn--full">
            <input type="submit" value="Send it!" />
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="footer__box">
          <ul className="footer__box--nav">
            <li className="footer__box--nav-item">
              <a href="*">About us</a>
            </li>
            <li className="footer__box--nav-item">
              <a href="*">Blog</a>
            </li>
            <li className="footer__box--nav-item">
              <a href="*">Press</a>
            </li>
            <li className="footer__box--nav-item">
              <a href="*">iOS App</a>
            </li>
            <li className="footer__box--nav-item">
              <a href="*">Android App</a>
            </li>
          </ul>
        </div>
        <div className="footer__box">
          <ul className="footer__box--social">
            <li className="footer__box--social-item">
              <a href="*">
                <i className="ion-social-facebook" />
              </a>
            </li>
            <li className="footer__box--social-item">
              <a href="*">
                <i className="ion-social-twitter" />
              </a>
            </li>
            <li className="footer__box--social-item">
              <a href="*">
                <i className="ion-social-googleplus" />
              </a>
            </li>
            <li className="footer__box--social-item">
              <a href="*">
                <i className="ion-social-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p>Built by Omnifood Dev Team. &copy; Omnifood Inc. 2019</p>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
