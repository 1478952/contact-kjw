"use client";
import styled from "@emotion/styled";
import { useMemo } from "react";

const Words = styled.ul`
  margin: 0 auto;
  padding: 80px 0;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 68px;
  font-weight: 900;
  letter-spacing: -2px;
  /* text-transform: uppercase; */
  transform: translate3d(0, 0, 0) translateX(-15%) translateY(-20%);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;

  &:hover {
    p {
      transform: translate3d(0, -50px, 0);
    }
  }

  & p {
    height: 50px;
    line-height: 45px;
    padding: 0 10px;
    transition: all 0.4s ease-in-out;
    transform: translate3d(0, 0, 0);
    vertical-align: top;
    white-space: nowrap;
  }
`;

interface WordsLineProps {
  index: number;
}

const WordsLine = styled.li<WordsLineProps>`
  height: 50px;
  overflow: hidden;
  position: relative;

  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.33333);
  }

  &:nth-child(${(props) => props.index}) {
    left: ${(props) => props.index * 29}px;
  }
`;

interface AnimationTitleProps {
  animationTexts: string[];
}

const AnimationTitle = ({ animationTexts }: AnimationTitleProps) => {
  return (
    <Words>
      {[...animationTexts, ""].map((animationText, idx) => {
        return (
          <WordsLine index={idx + 1} key={idx}>
            <p>{idx === 0 ? <>&nbsp;</> : <>{animationTexts[idx - 1]}</>}</p>
            <p>
              {idx === animationTexts.length ? (
                <>&nbsp;</>
              ) : (
                <>{animationText}</>
              )}
            </p>
          </WordsLine>
        );
      })}
    </Words>
  );
};

export default AnimationTitle;
