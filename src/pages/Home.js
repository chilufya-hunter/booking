import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import './HomeScreen.css';

const AmenitySection = ({ title, description, imageUrl, isReversed }) => (
  <section className={`amenity-section ${isReversed ? 'reversed' : ''}`}>
    <div className="amenity-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="amenity-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </section>
);

const BlogPreview = ({ title, excerpt, link }) => (
  <div className="blog-preview">
    <h3>{title}</h3>
    <p>{excerpt}</p>
    <Link to={link} className="read-more">Подробнее</Link>
  </div>
);

const Review = ({ name, rating, comment }) => (
  <div className="review">
    <div className="review-header">
      <h4>{name}</h4>
      <div className="rating">{rating} / 5</div>
    </div>
    <p>{comment}</p>
  </div>
);

const HomeScreen = () => (
  <div className="home-container">
    <div className="hero-section">
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1 className="home-title">Ощутите роскошь и комфорт</h1>
      <p className="home-description">Побалуйте себя незабываемым отдыхом в нашем изысканном гостевом доме. Ваш идеальный отдых ждет вас!</p>
        <Link to="/booking" className="book-now-link">
          <button className="book-now-button">
          Забронируйте  сейчас
            <span className="button-arrow">→</span>
          </button>
        </Link>
      </div>
    </div>
    
    {/* Amenity sections */}
    <AmenitySection
      title="Расслабьтесь в нашей роскошной сауне"
      description="Unwind and rejuvenate in our state-of-the-art sauna. Let the soothing heat melt away your stress and leave you feeling refreshed."
      imageUrl="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      isReversed={false}
    />
    
    <AmenitySection
      title="Искупайтесь в нашем крытом бассейне"
      description="Enjoy a swim any time of year in our beautiful indoor pool. Perfect for both relaxation and exercise."
      imageUrl="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      isReversed={true}
    />
    
    <AmenitySection
      title="Уютная гостиная с камином"
      description="Curl up with a book or enjoy conversation by our warm and inviting fireplace in our comfortable lounge area."
      imageUrl="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      isReversed={false}
    />

    {/* Blog section */}
    <section className="blog-section">
      <h2>Последние новости из нашего блога</h2>
      <div className="blog-previews">
        <BlogPreview 
          title="10 Причин посетить это место этим летом"
          excerpt="Discover why our guest house is the perfect summer getaway destination..."
          link="/blog/summer-visit"
        />
        <BlogPreview 
          title="Фирменные блюда нашего шеф-повара"
          excerpt="Explore the culinary delights that await you at our in-house restaurant..."
          link="/blog/signature-dishes"
        />
        <BlogPreview 
          title="Местные достопримечательности, которые Вы не можете пропустить"
          excerpt="Plan your perfect day trip with our guide to the best local attractions..."
          link="/blog/local-attractions"
        />
      </div>
      <Link to="/blog" className="view-all-link">Посмотреть все посты</Link>
    </section>

    {/* Reviews section */}
    <section className="reviews-section">
      <h2>Что говорят наши гости</h2>
      <div className="reviews-container">
        <Review 
          name="Sarah L."
          rating={5}
          comment="Совершенно потрясающий гостевой дом! Удобства были на высшем уровне, а персонал невероятно дружелюбный. Не могу дождаться, когда вернусь!"
        />
        <Review 
          name="Michael R."
          rating={4.5}
          comment="Идеальное сочетание роскоши и комфорта. Сауна стала изюминкой нашего пребывания. Настоятельно рекомендуем для спокойного отдыха."
        />
        <Review 
          name="Emma T."
          rating={5}
          comment="В этом гостевом доме уделяется особое внимание деталям. От уютного лаунджа с камином до изысканного завтрака - все было идеально."
        />
      </div>
      <Link to="/reviews" className="view-all-link">Читайте больше отзывов</Link>
    </section>

    {/* Footer */}
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ссылки</h3>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/booking">Забронировать</Link></li>
            <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/contact">связаться с нами</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Контактная информация</h3>
          <p>123 Малышева, Екатеринбург</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@guesthouse.com</p>
        </div>
        <div className="footer-section">
          <h3>присоединяйтесь к нам</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Год - Наш Гостевой дом. Все права защищены.</p>
      </div>
    </footer>
  </div>
);

export default HomeScreen;