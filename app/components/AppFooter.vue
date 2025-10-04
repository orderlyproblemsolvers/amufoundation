<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Explore Section -->
        <div class="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about/history">About</NuxtLink></li>
            <li><NuxtLink to="/stories/events">Events</NuxtLink></li>
            <li><NuxtLink to="/about/team">Our Team</NuxtLink></li>
          </ul>
        </div>

        <!-- Get Involved Section -->
        <div class="footer-column">
          <h3>Get Involved</h3>
          <ul>
            <li><NuxtLink to="/stories/events">Register a Child</NuxtLink></li>
            <li><NuxtLink to="/donate">Partner with Us</NuxtLink></li>
            <li><NuxtLink to="/about/kacis">KACIS</NuxtLink></li>
            <li><NuxtLink to="/donate">Donate</NuxtLink></li>
            <li><NuxtLink to="/contact">Volunteer</NuxtLink></li>
          </ul>
        </div>

        <!-- Stay Connected Section -->
        <div class="footer-column">
          <h3>Stay Connected</h3>
          <div class="contact-info">
            <div class="address">
              <h4>USA Office:</h4>
              <p>3001 SW 58th Avenue<br>
              Amarillo Texas 79118<br>
              United States<br>
              </p>
            </div>
            
            <div class="address">
              <h4>Nigeria Office:</h4>
              <p>Suite 308, 3rd Floor <br/>
                The Kings Opposite NAF Conference Centre<br>
              Ahmadu Bello Way<br>
              Abuja, Nigeria</p>
            </div>
            
            <div class="contact-details">
              <p><Icon name="i-lucide-phone"/>+234 (0)802 500 7333</p>
              <p><Icon name="i-lucide-mail"/> info.go@amufoundation.org</p>
              <a class="underline" href="https://studylifeabroad.com">www.bs-education.com</a>
            </div>
          </div>
        </div>

        <!-- About AMU Section -->
        <div class="footer-column">
          <h3>About AMU</h3>
          <p class="about-text">
            A Million of Us (AMU) Foundation was established by a group of people, 
            passionate and desiring to make a change in the life and development of 
            children and youth in Nigeria...
          </p>
          <NuxtLink to="/about/vision-mission" class="read-more">Read More</NuxtLink>
          
          <div class="social-links">
            <h4>Follow Us:</h4>
            <div class="social-icons">
              <a href="https://www.facebook.com/share/g/17J4xPpo9C/" aria-label="Facebook"><Icon name="i-lucide-facebook"/></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="copyright">
        <div class="copyright-content">
          <p>&copy; {{ new Date().getFullYear() }} AMU Foundation. All rights reserved.</p>
          <div class="copyright-links">
            <p>Powered By</p>
            <span class="separator">|</span>
            <p>OPS</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #68092A;
  color: white;
  padding: 30px 0 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 25px;
}

.footer-column h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #ffffff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 5px;
  display: inline-block;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a,
.footer-column a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 14px;
}

.footer-column ul li a:hover,
.footer-column a:hover {
  color: #ffffff;
  transform: translateX(5px);
}

.contact-info {
  line-height: 1.6;
}

.contact-info .address {
  margin-bottom: 15px;
}

.contact-info h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-info p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
  font-size: 13px;
}

.contact-details p {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
}

.contact-details i {
  width: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.about-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 13px;
}

.read-more {
  color: #ffffff !important;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 15px;
  font-size: 14px;
}

.social-links h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 15px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 14px;
}

.social-icons a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transform: translateY(-3px);
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 0;
  margin-top: 25px;
}

.copyright-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright-content p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 13px;
}

.copyright-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.copyright-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 13px;
}

.copyright-links a:hover {
  color: #ffffff;
}

.separator {
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    padding: 25px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .container {
    padding: 0 15px;
  }

  .copyright-content {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-column h3 {
    font-size: 18px;
  }

  .social-icons a {
    width: 35px;
    height: 35px;
  }
}
</style>