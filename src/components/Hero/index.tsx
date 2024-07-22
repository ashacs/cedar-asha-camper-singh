import { ReactNode } from "react";
import "./index.css";
import classnames from "../../utils/classnames";

type HeroProps = {
  children: ReactNode;
  className?: string;
};

function Hero(props: HeroProps) {
  const className = classnames("hero_container", props.className);

  return <div className={className}>{props.children}</div>;
}

type HeroTitleProps = {
  children: ReactNode;
  className?: string;
};

function Title(props: HeroTitleProps) {
  const className = classnames("hero_title", props.className);

  return <div className={className}>{props.children}</div>;
}

type HeroDescriptionProps = {
  children: ReactNode;
  className?: string;
};

function Description(props: HeroDescriptionProps) {
  const className = classnames("hero_description", props.className);

  return <div className="hero_description">{props.children}</div>;
}

Hero.Title = Title;
Hero.Description = Description;

export default Hero;
