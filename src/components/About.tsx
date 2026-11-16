function About() {
  return (
<section className="about-us" id="about">
                      <div className="divider" />

          <h2>ABOUT US</h2>
      <div className="about-cards">
        <div className="card1">
          <i className="fa-solid fa-bread-slice"></i>
          <h3>Fresh Every Day</h3>
          <p>We bake fresh pastries and bread every morning using quality ingredients</p>
        </div>

        <div className="card2">
          <i className="fa-regular fa-heart"></i>
          <h3>Made With Love</h3>
          <p>Every dessert is handmade with care to bring warmth and comfort</p>
        </div>

        <div className="card3">
          <i className="fa-solid fa-cake-candles"></i>
          <h3>Quality Ingredients</h3>
          <p>We choose the finest ingredients to create rich and delicious flavors.</p>
        </div>
      </div>
    </section>
  )
}

export default About