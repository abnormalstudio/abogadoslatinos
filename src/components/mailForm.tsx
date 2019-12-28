import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { css } from "@emotion/core";

const listUrl =
  "https://gmail.us4.list-manage.com/subscribe/post?u=59fe5ece5dc5a07197223bcb8&id=9aeacde732";

export default function MailForm() {
  const [email, setEmail] = React.useState("");

  return (
    <MailchimpSubscribe
      url={listUrl}
      render={({ subscribe, status, message }: any) => (
        <form
          css={css`
            margin: 2rem 0;
          `}
          onSubmit={e => {
            e.preventDefault();
            subscribe({ EMAIL: email });
          }}
        >
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={e => {
              setEmail(e.target.value);
            }}
            css={css`
              padding: 1rem;
              width: 50%;
              border: 1px solid #fff;
              border-top-left-radius: 0.5rem;
              border-bottom-left-radius: 0.5rem;
              font-size: 1.1rem;

              &:focus {
                outline: none;
                border: 1px solid #0072bb;
              }
            `}
            placeholder="email"
          />
          <button
            type="submit"
            css={css`
              background-color: #0072bb;
              color: white;
              padding: 1rem 1.5rem;
              border: 1px solid #0072bb;
              border-top-right-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
              font-size: 1.1rem;
              cursor: pointer;

              &:hover,
              &:focus {
                background-color: #01578f;
                outline: none;
                border-color: #01578f;
              }
            `}
          >
            Recibir Avance
          </button>

          {status === "sending" && <p style={{ color: "blue" }}>enviando...</p>}
          {status === "error" && (
            <p
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && <p style={{ color: "green" }}>Suscrito!</p>}
        </form>
      )}
    />
  );
}
