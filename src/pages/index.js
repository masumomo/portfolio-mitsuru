import React, { useEffect } from 'react'
import Helmet from 'react-helmet'

import AOS from 'aos'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const siteTitle = 'Mitsuru Masumoto - 増元充'
  const siteDescription =
    '岐阜県飛騨市の画家。元美術教員で現在も講師として活動中です。'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="about" data-aos="fade-up">
          <h2>about me</h2>
          <p>
            ここに何か説明文を。以下の文章はダミーです。
            <br />
            あなたも直接ことにそういう希望院としてもののために飽いたあり。
            万時間に吹聴者はひょろひょろこうした成就でだろまでであっていでにも吹聴あるないたて、
            はっきりには忘れるたですますまし。女学校の積んですのはとうとう十一月にもっとですずない。
          </p>
        </section>

        <section id="work" data-aos="fade-up">
          <h2>recent work</h2>
          <Gallery />
        </section>

        <section id="exhibit" data-aos="fade-up">
          <h2>exhibit history</h2>
          <ul style={{ marginTop: 30 }}>
            <li>
              <p className="exhibit-item">
                増元 充 / 幸司　二人展（兄弟展）in Takayama
              </p>
              <p className="date">2015 June</p>
            </li>
            <li>
              <p className="exhibit-item">
                Mitsuru Masumoto Exhibition in Takayama
              </p>
              <p className="date">2014 November</p>
            </li>
            <li>
              <p className="exhibit-item">
                Mitsuru Masumoto Exhibition in Takayama
              </p>
              <p className="date">2013 September</p>
            </li>
          </ul>
        </section>

        <section id="contact" data-aos="fade-up">
          <h2>contact</h2>
          <p>お問い合わせはこちらから。</p>
          <div className="row">
            <div className="12u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="送信" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
