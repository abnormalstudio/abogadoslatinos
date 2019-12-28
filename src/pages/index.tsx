import { graphql, StaticQuery } from "gatsby";
import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { css } from "@emotion/core";
import { Layout, SEO, MailForm } from "$components";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexArticlesQuery {
        chapters: mdx(fields: { name: { eq: "chapters" } }) {
          body
        }
        intro: mdx(fields: { name: { eq: "intro" } }) {
          body
        }
      }
    `}
    render={(data: any) => {
      return (
        <Layout>
          <SEO title="" />
          <div
            css={css`
              background-color: #dedcee;
            `}
          >
            <div
              css={css`
                max-width: 1200px;
                margin: 0 auto;
                padding: 4rem 1rem;

                p {
                  font-size: 1.3rem;
                  line-height: 2rem;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                `}
              >
                <div
                  css={css`
                    width: 60%;
                  `}
                >
                  <h1
                    css={css`
                      text-align: left;
                      font-size: 3rem;
                      line-height: 3.5rem;
                      margin-bottom: 3rem;
                    `}
                  >
                    <span
                      css={css`
                        display: block;
                        color: #0072bb;
                      `}
                    >
                      Ser abogado en Canadá,
                    </span>
                    <span
                      css={css`
                        display: block;
                        color: #ff6d31;
                      `}
                    >
                      sin perder su tiempo.
                    </span>
                  </h1>

                  <p
                    css={css`
                      margin: 2rem 0;
                    `}
                  >
                    Quiere practicar el derecho en Canadá pero no sabe cómo
                    validar su título en Canadá?
                  </p>

                  <p
                    css={css`
                      margin: 2rem 0;
                    `}
                  >
                    Suscríbete para recibir <strong>2 capítulos gratis</strong>{" "}
                    sobre articling y los costos del proceso.
                  </p>

                  <MailForm />

                  <p>
                    O <a href="#listo">comprar ya</a> si está convencido!
                  </p>
                </div>

                <div
                  css={css`
                    width: 40%;
                  `}
                >
                  <div
                    css={css`
                      width: 90%;
                      margin: 0 0 0 auto;
                      min-height: 500px;
                      background-color: black;
                      color: white;
                      padding: 1rem;
                      font-size: 2rem;
                      line-height: 2.5rem;
                    `}
                  >
                    Cómo convertirse en un abogado Canadiense
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            css={css`
              max-width: 800px;
              margin: 0 auto;
              padding: 4rem 1rem;
            `}
          >
            <MDXRenderer>{data.intro.body}</MDXRenderer>
          </div>

          <div
            css={css`
              background-color: #dedcee;
            `}
          >
            <div
              css={css`
                max-width: 800px;
                margin: 0 auto;
                padding: 4rem 1rem;
              `}
            >
              <blockquote
                css={css`
                  border: none;
                  position: relative;
                  font-size: 2rem;
                  line-height: 3rem;
                  padding: 0.5rem 3rem;
                  text-align: center;
                `}
              >
                <svg
                  css={css`
                    width: 3rem;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                  `}
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.216 9H35c-2.591 4.338-4.385 8.474-5.282 12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226 13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382 12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237 12.674 9z"
                    fill="#4E68D0"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Hay tres rutas para ser abogado en Canadá
                <svg
                  css={css`
                    width: 3rem;
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                  `}
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.784 32H5c2.591-4.338 4.385-8.474 5.282-12.307H5.498L7.093 9h10.365l-.697 4.842C15.565 21.711 12.774 27.763 9.784 32zm17.542 0h-4.884c2.69-4.338 4.485-8.474 5.382-12.307H23.04L24.635 9H35l-.698 4.842C33.106 21.711 30.316 27.763 27.326 32z"
                    fill="#4E68D0"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </blockquote>
              <p
                css={css`
                  text-align: center;
                  text-transform: uppercase;
                `}
              >
                Marian Serna
              </p>
            </div>
          </div>

          <div
            id="chapters"
            css={css`
              max-width: 800px;
              margin: 0 auto;
              padding: 4rem 1rem;

              ol {
                list-style: decimal !important;
                margin-left: 1.75rem;
              }
              ol > li {
                font-size: 1.5rem !important;
                line-height: 2rem;
                padding: 0px 0.5rem;
              }
              ul {
                margin-left: 1rem;
              }
            `}
          >
            <MDXRenderer>{data.chapters.body}</MDXRenderer>
          </div>

          <div
            id="listo"
            css={css`
              background-color: #dedcee;
            `}
          >
            <div
              css={css`
                max-width: 800px;
                margin: 0 auto;
                padding: 4rem 1rem;
              `}
            >
              <h2
                css={css`
                  text-align: center;
                  margin-bottom: 2rem;
                `}
              >
                Obtener el libro
              </h2>

              <div
                css={css`
                  max-width: 400px;
                  background: #fff;
                  margin: 0 auto;
                  border-radius: 1rem;

                  ul {
                    list-style: disc;
                    margin-left: 1.5rem;
                  }
                `}
              >
                <h3
                  css={css`
                    padding: 1rem;
                    background-color: #eee;
                    border-top-left-radius: 1rem;
                    border-top-right-radius: 1rem;
                  `}
                >
                  Que trae?
                </h3>
                <div
                  css={css`
                    padding: 1rem;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    `}
                  >
                    <span
                      css={css`
                        font-size: 2rem;
                        font-weight: bold;
                        display: inline-block;
                        margin-right: 0.5rem;
                      `}
                    >
                      $20
                    </span>{" "}
                    <span>CAD</span>
                  </div>
                  <ul>
                    <li>
                      <strong>El libro</strong> en formato PDF
                    </li>
                    <li>
                      Acceso a{" "}
                      <strong>una comunidad de abogados latinos</strong> en
                      Slack
                    </li>
                  </ul>
                  <div
                    css={css`
                      text-align: center;
                    `}
                  >
                    <script src="https://gumroad.com/js/gumroad.js"></script>
                    <a
                      href="https://gum.co/VXfflD?wanted=true&locale=es"
                      target="_blank"
                      className="gumroad-button"
                      css={css`
                        background-color: #0072bb;
                        color: white;
                        padding: 1rem 1.5rem;
                        border: 1px solid #0072bb;
                        border-radius: 0.5rem;
                        font-size: 1.1rem;
                        cursor: pointer;
                        display: inline-block;

                        &:hover,
                        &:focus {
                          background-color: #01578f;
                          outline: none;
                          border-color: #01578f;
                        }
                      `}
                    >
                      Comprar Ya
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
