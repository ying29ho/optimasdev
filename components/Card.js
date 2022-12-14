import Link from "next/link";
import styles from "../styles/Components.module.css";
// import "../styles/scss/Components.scss";
import cn from "classnames";
import Image from "next/image";
import MediaQuery from "react-responsive";

export const DisplayCard = ({ card }) => {
  return (
    <div className="flip-card-outer">
      <div className={styles.displayCardInner}>
        <div className={styles.displayCard}>
          <div className={styles.displayCardBody}>
            <Image
              src={card.img}
              width={180}
              height={70}
              alt="card background image"
            />
          </div>
          <h3>{card.title}</h3>
        </div>
      </div>
    </div>
  );
};

export const FlipCard = ({ card }) => {
  return (
    <div className="flip-card-outer">
      {/* <div className="flip-card-inner"> */}
      <div
        className={cn("flip-card-inner", {
          "hover-trigger": card.variant == "hover",
        })}
      >
        <div className="card front">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <Image
              className=""
              src={card.img}
              width={150}
              height={150}
              alt="brand image"
            />
            <h3 className="card-text mt-4 text-uppercase text-center fw-bold ">
              {card.front}
            </h3>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-tex mx-2">{card.back}</p>
          </div>
          <div className="text-center mb-4">
            <Link href={card.link}>
              <a>{card.linkText}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SolutionCard = ({ card }) => {
  return (
    <div className="col-6 solution-card-outer mx-auto">
      <Image
        className=""
        src={card.img}
        // height={442}
        // width={588}
        width={688}
        height={542}
        alt="card background image"
      />
      <div className="solution-card-inner">
        <div className="solution-card-heading">
          <h3 className="solution-card-h3">{card.front}</h3>
        </div>
        <div className="colution-card-body">
          <p className="solution-card-p">{card.back}</p>
        </div>
      </div>
    </div>
  );
};

