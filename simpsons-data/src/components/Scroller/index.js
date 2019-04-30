import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import Responsive from "../ImageCarousel";
const SectionWipesStyled = styled.div`
  overflow: hidden;
`;

// For help with getting ScrollMagic to work, I used the following resources as
// reference, though a lot of them I may have just looked at
// and didn't actually use.
// http://scrollmagic.io/examples/basic/going_horizontal.html,
// https://bitworking.github.io/react-scrollmagic/section-wipes2,
// https://bitworking.github.io/react-scrollmagic/section-wipes
// https://www.npmjs.com/package/react-scrollmagic,
// https://greensock.com/docs/NPMUsage,
// https://scrollmagic.io/docs/debug.addIndicators.html#newScrollMagic.Controlleroptions,
// http://scrollmagic.io/docs/ScrollMagic.Controller.html
// http://scrollmagic.io/examples/basic/section_wipes_natural.html
// https://www.npmjs.com/package/gsap
// https://www.npmjs.com/package/react-scrollmagic
// https://github.com/bitworking/react-scrollmagic/blob/master/example/src/components/ScrollMagicExamples/SectionWipes.js
// https://www.styled-components.com/
/** JS Doc comment */
class Scroller extends React.Component {
  /** JS Doc comment
   * @return {div}
   */
  render() {
    return (
      <SectionWipesStyled>
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin>
            <div className="panel intro">
              <h1>The Real Faces of The Simpsons</h1>
              <div className="simpsons-images">
                {/* For svgs, I may have used this resource as a reference: https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.89 68.62" id="homer" className="simpsons"><defs></defs><title>homer</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M7.09,35.34c.26-4.63-.22-9.29.21-13.9S9.24,12.06,12.68,9c4-3.48,9.66-4,14.9-3.76a11,11,0,0,1,4.33.81c3.08,1.48,4.3,5.23,5,8.62,3.46,16.89,1.56,34.38-.35,51.52a34.1,34.1,0,0,1-13.23,2.08,1.38,1.38,0,0,1-1-.31,1.52,1.52,0,0,1-.27-1l-.37-7.63a2,2,0,0,0-.29-1.14,1.74,1.74,0,0,0-1.18-.52c-2.27-.34-4.59,0-6.88-.23s-4.72-1.32-5.59-3.48C7.2,52.62.27,51,5.87,50c.45-.08-2.2-.16-2.57-.43C2.59,49,3.92,47,4.84,46.37c1.36-.88-.21-2.62.17-4.22L6.6,35.36" transform="translate(-0.2)" /><path className="cls-2" d="M7.31,35.21C7.69,26.93,5.74,16.77,11.82,10,15.15,6.27,20.25,5.42,25,5.37c4.21,0,8,.34,10.1,4.44,1.91,3.77,2.33,8.44,2.81,12.57a113.71,113.71,0,0,1,.72,14.29,289.08,289.08,0,0,1-2.27,29.68l.43-.25a34.06,34.06,0,0,1-12.32,2.11c-2.37-.06-2.14-1.14-2.24-3.19L22,61.21a8.42,8.42,0,0,0-.15-2.52c-.71-1.62-3.36-1.21-4.85-1.2A16.37,16.37,0,0,1,11.54,57c-2.53-.89-3.22-3.2-5.42-4.44-.44-.25-1.94-.82-2.08-1.36-.27-1.08,1-.59,1.63-1.06s.45-.06-.1-.34c-.88-.46-2,.33-2.24-1s1.69-2,2.11-2.92c.52-1.11-.31-2.38-.24-3.55.13-2.32,1.09-4.83,1.62-7.1,0,.11-.41.14-.43.25-.54,2.29-1.69,5.05-1.66,7.4,0,1.67.87,2.37-.29,3.76-.51.62-2.21,2.11-1.36,3a8.43,8.43,0,0,0,2.58.43l.43-.25c-.85.17-3.08.52-2.31,1.73.62,1,2.39,1.23,3.24,2a12.94,12.94,0,0,1,1.24,1.76,6.51,6.51,0,0,0,3.18,2c2.67.8,5.46.15,8.17.52,1.79.25,1.85,1,1.94,2.67s.16,3.18.23,4.77c0,1.08-.24,2.51.81,3.1.9.5,3.16.09,4.12,0a35.76,35.76,0,0,0,9.63-2.05c.06,0,.43-.2.43-.25,1.9-17,3.92-34.57.35-51.51C36.51,11.66,35.58,8.3,33,6.48c-2.83-2-7.49-1.54-10.77-1.19-4,.42-8.08,1.87-10.83,4.94C5.31,17,7.26,27.18,6.88,35.46c0-.08.42-.15.43-.25Z" transform="translate(-0.2)" /><path className="cls-2" d="M14.1,7.22C15.87,2.65,20.42,1,25,.83c1.74-.06,4-.26,5.5.88S32,5,32.43,6.71c0,0,.44-.21.43-.25C32.06,3.59,32.05,1,28.49.63A18.1,18.1,0,0,0,19.06,2a10.22,10.22,0,0,0-5.39,5.52c0-.12.38-.12.43-.25Z" transform="translate(-0.2)" /><path className="cls-2" d="M20,5.31c-.1-4.75,6.3-5,9.69-4.89C34.6.54,35,5.06,34.56,9c0-.09.42-.15.43-.25.27-2.69.54-6.39-2.18-8C30.7-.52,26.61.07,24.34.69s-4.87,2.16-4.82,4.87c0-.07.44-.16.44-.25Z" transform="translate(-0.2)" /><path className="cls-2" d="M28.71,34a13.18,13.18,0,0,1,1.93-4.49l-.44.25c.4.77,1.06,3.18,2.07,2.91a1.22,1.22,0,0,0,.36-.27A20.81,20.81,0,0,0,35,29.07l-.43.25a23,23,0,0,0,1.78,5.3s.44-.24.43-.25A24,24,0,0,1,35,29.07s-.4.2-.43.25A21.66,21.66,0,0,1,32,32.83l.43-.25c-.75-.22-1.48-2.4-1.81-3,0,0-.41.21-.44.25a13.16,13.16,0,0,0-1.92,4.49c0-.11.41-.13.43-.25Z" transform="translate(-0.2)" /><path className="cls-2" d="M31.63,35.88c.84-.16,2.59-.6,3.39-.12a2.37,2.37,0,0,1,.67,2.41c-.5,2.36-2.89,2.9-5,2.54-.13,0-.31.27-.43.25A5.63,5.63,0,0,0,35,39.82a3.35,3.35,0,0,0,1.07-3.35,1.37,1.37,0,0,0-1.31-1.09,9.89,9.89,0,0,0-2.71.25c-.15,0-.28.22-.43.25Z" transform="translate(-0.2)" /><path className="cls-1" d="M14,32.1l-7.28-.21c-2.13-.07-4.55,0-6,1.61a1.92,1.92,0,0,0-.46.79,1.75,1.75,0,0,0,.6,1.65,4,4,0,0,0,1.63.78,29.18,29.18,0,0,0,8,.72l4.33,0" transform="translate(-0.2)" /><path className="cls-2" d="M14.22,32c-3.41-.1-7.54-.85-10.87,0a6.51,6.51,0,0,0-1.71.74c-2.84,1.77-1,3.74,1.54,4.32,3.71.82,7.7.49,11.48.47.15,0,.29-.25.43-.25-2.63,0-5.29.11-7.93,0-1.77-.1-5.83-.1-6.56-2.2-1.5-4.4,11.29-2.89,13.19-2.84.14,0,.29-.25.43-.25Z" transform="translate(-0.2)" /></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.88 99.03" id="marge" className="simpsons"><defs></defs><title>marge</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M6.31,79.93a4.93,4.93,0,0,0,.83,3.54c.32.46.72.86,1,1.31a8.94,8.94,0,0,1,1.36,5.38,24.19,24.19,0,0,1-.81,6.22,10.66,10.66,0,0,0,3.25,2,10,10,0,0,0,3.08.36c2.1,0,4.19,0,6.29,0a.71.71,0,0,0,.52-.14.78.78,0,0,0,.18-.5l.61-5.83c.16-1.46.39-3.06,1.5-4,.5-.42,1.18-.69,1.46-1.28a2.4,2.4,0,0,0,.19-.79l.84-6.6" /><path className="cls-2" d="M6.1,80.05c-.21,2.81,1.68,3.87,2.63,6.25s.69,5.47.26,8a10.42,10.42,0,0,0-.47,2.19c.12.3,1,.77,1.23,1a7.38,7.38,0,0,0,3.16,1.33,26,26,0,0,0,3.74.12,22.44,22.44,0,0,0,4.49,0c2-.45,1.37-3.11,1.54-4.77a19.88,19.88,0,0,1,.6-4.14c.4-1.2,1.1-1.5,1.91-2.37,1.63-1.73,1.39-5.76,1.68-8.08,0,.09-.42.14-.43.25-.24,1.88-.45,3.77-.72,5.65a3.73,3.73,0,0,1-.7,2.24c-.44.52-1.11.72-1.55,1.29-2,2.58-.77,6.86-1.8,9.79l.43-.25c-2.32.62-5.57.29-8,.12a7.4,7.4,0,0,1-3.3-1A5,5,0,0,1,9.26,96.5c-.39-.64-.07-1.15.09-2a17.51,17.51,0,0,0,.06-7.69c-.75-2.68-3.1-4-2.88-7,0,.09-.43.15-.43.25Z" /><path className="cls-3" d="M30,42.61a9,9,0,0,0,.59-3.85,3,3,0,0,0-.56-1.41l-.41,6.23A7,7,0,0,0,30,42.61Z" /><path className="cls-3" d="M29.16,44.12a.86.86,0,0,1,.46-.1l0-.44A1.24,1.24,0,0,1,29.16,44.12Z" /><path className="cls-3" d="M34.24,20.61a2.19,2.19,0,0,0,.13-1.72l-.63,2.31A1.9,1.9,0,0,0,34.24,20.61Z" /><path className="cls-3" d="M34,24.8a3,3,0,0,0-.67-2l-1.12,4.05A2.31,2.31,0,0,0,34,24.8Z" /><path className="cls-3" d="M4.35,37.35a2.24,2.24,0,0,1,1.21-.58" /><path className="cls-3" d="M12.84,2.76A2.58,2.58,0,0,0,9.8,4a4.66,4.66,0,0,0-.28,3.54,2.45,2.45,0,0,0-2.3,1.27,2.55,2.55,0,0,0,.18,2.67A1.47,1.47,0,0,0,5.84,12.9,2.86,2.86,0,0,0,6.75,15a1.63,1.63,0,0,0-1.91,1.39A3.93,3.93,0,0,0,5.47,19a1.2,1.2,0,0,0-1.15.66A2.48,2.48,0,0,0,4.09,21a4.94,4.94,0,0,0,1.56,3.23,1.68,1.68,0,0,0-1.23,1.9,4.86,4.86,0,0,0,1.09,2.23A1.84,1.84,0,0,0,4,30.29a4.66,4.66,0,0,0,1,2.47c-.78.3-1.68.77-1.77,1.62a2.82,2.82,0,0,0,2.2,2.42" /><path className="cls-3" d="M4.35,37.35a2.64,2.64,0,0,0-.82,1.41,6,6,0,0,0,.71,3.49c0,.11,0,.21,0,.32v1.64a2.69,2.69,0,0,0-1.32,1.15,7.19,7.19,0,0,0-.66,3.26A4.14,4.14,0,0,0,2.6,51a1.56,1.56,0,0,0,1.49.71,3.8,3.8,0,0,0,.12,6.87v.13A3.39,3.39,0,0,0,.72,61.61a3.42,3.42,0,0,0,3,3.64C2.2,65.12,1.08,67,1.31,68.55a8,8,0,0,0,2.38,4c-1.51-.78-3.45.81-3.44,2.54a4.33,4.33,0,0,0,3,3.76A6.88,6.88,0,0,0,5,79.19a12,12,0,0,0,11.22,8.08h.47a12,12,0,0,0,11.21-8,5.15,5.15,0,0,0,2.92-.38,4.31,4.31,0,0,0,2.09-3.76c0-1.73-1.33-3.32-2.37-2.54a9.13,9.13,0,0,0,1.64-4c.16-1.57-.61-3.43-1.68-3.3,1.2-.1,2.22-1.87,2.09-3.64s-1.38-3.18-2.57-2.9A4.25,4.25,0,0,0,31.7,55a4.35,4.35,0,0,0-1.46-3.3,1,1,0,0,0,1-.71,5.78,5.78,0,0,0,.26-2.37,10.16,10.16,0,0,0-.46-3.26A1.86,1.86,0,0,0,29.62,44c.73-.45,1.37-.9,1.91-1.31s.7-.57.8-.74a3,3,0,0,0-.15-2.62,4.05,4.05,0,0,0-2.66-2l.05-.44q-1.45.57-1.41.69c0,.1.66,0,1.9-.24l.05-.83-.25.07A5.88,5.88,0,0,0,31.64,35,2,2,0,0,0,31,32.5l.09-.29c.06-.22.07-.44.13-.67a2.91,2.91,0,0,0,1.25-1.74A3,3,0,0,0,32,27.47l-.55-.69c0-.71.12.83,0,.13a3.06,3.06,0,0,1,.52.56l-.55-.69c-.24,0,.24.06,0,0a11.76,11.76,0,0,0-.31-1.59A12.43,12.43,0,0,0,33,22.48c.08.1.18.19.26.29l.44-1.57c-.07.05-.15.07-.22.12.1-.27.25-.52.33-.8l.27-.88c.09-.3.11-.6.18-.89a.91.91,0,0,1,.07.14l.23-.83-.17,0c.29-1.73.41,1.64,0,0,0,0,.14,0,.17,0a2.38,2.38,0,0,0,1.3-2.12,1.29,1.29,0,0,1,.17-.78,2.08,2.08,0,0,1,.58-.33,1,1,0,0,0,.4-1.17.93.93,0,0,0-.63-.54c.84-.17,1.09-.73,1.08-1.52.47-1.47-.4-2.3-1.39-3.14a2.48,2.48,0,0,0-1-2.56,2.37,2.37,0,0,0-2.71.15A2.35,2.35,0,0,0,31.3,3a6.54,6.54,0,0,0-3.46-.51,1.12,1.12,0,0,0-.45.12A1.62,1.62,0,0,0,26.84,1a4.06,4.06,0,0,0-2.4-.59c-.93,0-2.12.14-2.35,1.06a2.28,2.28,0,0,0-4.15.15c0-1-1.38-1.57-2.3-1.13a4.24,4.24,0,0,0-1.82,2.4l-1-.17" /><path className="cls-3" d="M5.71,36.78H5.56l.14,0" /></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.29 97.88" id="bart" className="simpsons"><defs></defs><title>bart</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M.25,55.43l0-53.14A92.13,92.13,0,0,0,6.35,20.58,84.73,84.73,0,0,1,10.63,1.29,128.65,128.65,0,0,0,13.9,18.84a40.24,40.24,0,0,1,5.54-15.1,97.78,97.78,0,0,0,1.72,15.5,26.16,26.16,0,0,1,6.5-13l.39,12.11A49.65,49.65,0,0,1,36.89,2.11c1.41,29-4.14,58.13-1.5,87,.32,3.47.36,7.88-2.22,9.38-1.6.93-3.47.21-5.14-.52L12.72,91.23a19.83,19.83,0,0,0,3.56-5.76c.77-2.24.76-5-.55-6.86a8,8,0,0,0-2.84-2.22L4.61,71.78c-1-.56-2.19-1.5-2-2.83.09-.62.48-1.11.62-1.72a4.54,4.54,0,0,0-.17-2Q1.66,59.43.28,53.64" transform="translate(-0.03 -1.16)" /><path className="cls-2" d="M.47,55.3.5,2.16l-.43.25a96.49,96.49,0,0,0,6.06,18.3s.43-.2.43-.25a88.61,88.61,0,0,1,4.29-19.3l-.43.25A135.69,135.69,0,0,0,13.68,19s.42-.19.43-.25a41.82,41.82,0,0,1,5.55-15.1l-.43.25a103.53,103.53,0,0,0,1.71,15.5c0-.06.42-.18.43-.25a27.13,27.13,0,0,1,6.51-13l-.43.25.38,12.11c0-.08.41-.17.44-.25A51.1,51.1,0,0,1,37.11,2l-.43.25c.78,17.13-.76,34.21-1.66,51.29-.44,8.36-.73,16.74-.48,25.12.12,4,.51,8,.74,11.93.15,2.75.19,6.3-2.33,8.05l.43-.25c-2.65,1.14-5.42-.66-7.83-1.72l-9-4a18.08,18.08,0,0,1-2.7-1.18c-.93-.64-.85-.08-.39-1.06.58-1.23,1.72-2.26,2.36-3.51,1.15-2.28,1.72-5.16.63-7.57s-4.06-3.51-6.23-4.72l-4.14-2.3a7.18,7.18,0,0,1-2.86-2.07c-.68-1.12-.14-1.77.13-2.89a7.84,7.84,0,0,0-.41-3.76L.5,53.51s-.45.2-.44.25l2.2,9.16a15.31,15.31,0,0,1,.81,3.76C3,68,2,69,2.6,70.28c.89,1.91,4.22,3,5.93,3.93,2.23,1.24,5.45,2.37,7,4.52a7.56,7.56,0,0,1,.76,6.18,12.86,12.86,0,0,1-1.76,3.75c-.31.47-.64.93-1,1.38l-1,1.32.9.4c1,.92,3.21,1.41,4.51,2l4.5,2C24.93,96.82,28,98.82,30.78,99c7.62.57,4.52-13.34,4.33-17.27-.6-12.4.09-24.82.84-37.2C36.82,30.39,37.76,16.19,37.11,2c0,.06-.39.2-.43.25A51.32,51.32,0,0,0,27.83,18.5l.44-.25L27.88,6.14c0,.05-.39.19-.43.25a27,27,0,0,0-6.51,13l.43-.25a103.53,103.53,0,0,1-1.71-15.5c0,.06-.39.18-.43.25A41.64,41.64,0,0,0,13.68,19l.43-.25A137.41,137.41,0,0,1,10.85,1.16c0,.07-.41.18-.43.25a88.61,88.61,0,0,0-4.29,19.3l.43-.25A97.2,97.2,0,0,1,.5,2.16c0,.06-.43.19-.43.25L0,55.55c0-.08.44-.16.44-.25Z" transform="translate(-0.03 -1.16)" /></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.98 74.28" id="lisa" className="simpsons"><defs></defs><title>lisa</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M71,41.5,92.51,29.73a90.66,90.66,0,0,0-25.2-1.58q4.09-10.45,8.21-20.9a74.61,74.61,0,0,1-24.27,16.3L42.37.9,37.76,25.5,12.12,20.13,22.85,38.44c.6,1,1.22,2.26.7,3.33a3.9,3.9,0,0,1-2,1.57L1,53.38q13.35.88,26.75.49a10,10,0,0,0,.37,3A4.37,4.37,0,0,0,30.88,60c1.45.39,3.08-.28,4.45.36-.11,1.33-1.24,2.29-2.2,3.21s-1.86,2.24-1.4,3.49c.57,1.54,2.63,1.65,4.23,1.49l8.89-.88a3.05,3.05,0,0,1,1.53.12,3.12,3.12,0,0,1,1.11,1l3.81,5a2.67,2.67,0,0,0,.89.85,2.58,2.58,0,0,0,1.14.17l8.24,0a.91.91,0,0,0,.63-.14,1,1,0,0,0,.25-.76q.36-8.72.74-17.43l-5.86-.63C68.18,55.15,79,54.25,89.8,53Z" transform="translate(-0.74 -0.78)" /><path className="cls-2" d="M70.8,41.6,92.32,29.84c.07,0,.33-.25.4-.24A92.15,92.15,0,0,0,69.4,27.9L68,28c-.69.19-.73-.1-.11-.87A18.18,18.18,0,0,1,69,24.39c.71-1.82,1.43-3.63,2.14-5.45Q73.41,13,75.73,7.12c0,.11-.35.17-.43.25a74,74,0,0,1-8.19,7.13,72.53,72.53,0,0,1-7.18,4.69c-1.78,1-3.51,2-5.37,2.86a9.82,9.82,0,0,1-2.32,1.05c-.56.55-.88.51-1-.12l-.54-1.36L49.69,18.9,47.2,12.56Q44.91,6.67,42.59.78s-.42.19-.43.25L37.54,25.62l.44-.25L12.33,20s-.42.26-.43.25q3.18,5.4,6.34,10.81l3.17,5.41c.73,1.25,2.33,3.16,2.11,4.75-.27,1.92-2.94,2.57-4.44,3.3l-6.27,3L1.16,53.26c-.09,0-.32.25-.42.24,4.62.3,9.24.5,13.86.57q3.48.06,6.94,0l3.47,0a10.64,10.64,0,0,1,1.49,0c1.33.2.94-.06,1,1.13a5.65,5.65,0,0,0,2.18,4.48c1.47,1,3.85-.25,5,.71,1.81,1.43-6.67,5.72-2.08,8,1.34.66,3.13.29,4.55.15,2.43-.24,5-.69,7.4-.73,2.26,0,3,1.61,4.27,3.27,1,1.23,2,3.46,3.63,3.84,1.84.42,4.19,0,6.08,0,.94,0,2.61.36,3.46-.19,1.21-.78.68-3.06.74-4.34l.32-7.75c0-1.09.78-5.68.15-6.31-.39-.37-2.55-.27-3.05-.33l-2.68-.29-.43.25c10.84-.68,21.67-1.58,32.47-2.77.08,0,.38-.29.43-.25L71.21,41.37c-.07,0-.37.29-.44.25L89.59,53.17l.43-.25C79.22,54.11,68.39,55,57.55,55.69c-.14,0-.3.26-.43.25l3.17.35a7.8,7.8,0,0,1,1.94.21c.91.35.72-.53.7,1,0,2.9-.25,5.81-.37,8.71l-.21,4.84c-.05,1.13.21,2.67-.37,3.66l.44-.25c-2.06.49-4.48.14-6.59.13-2.67,0-3.49,0-5.13-2.09-1-1.32-2.51-4.26-4.1-4.93-1-.41-2.51,0-3.51.08l-4,.39c-1.78.18-4.31.85-6,0-2.19-1.09-1-3.36.24-4.69.77-.81,3.21-2.8,1.49-3.42-2.17-.8-4,.71-5.72-1.58a5.6,5.6,0,0,1-1-2.36,10,10,0,0,0-.17-1.52c-.47-1.07.86-.43-1-.75-2.44-.41-5.44.1-7.93.09q-7.68,0-15.35-.46c-.49,0-1.42.19-1.75-.21s.18-.26.64-.57a34.8,34.8,0,0,1,3.58-1.74l7.17-3.49c2.94-1.43,6.1-2.67,8.89-4.36,3.48-2.11.44-5.48-1.06-8L12.33,20l-.43.25,25.64,5.36a1.73,1.73,0,0,0,.44-.25L42.59.78,42.16,1l6.39,16.31,1.59,4.07a6.51,6.51,0,0,0,.71,1.82c.08.63.39.67,1,.12l.78-.34c1.81-.81,3.6-1.69,5.34-2.63A76.79,76.79,0,0,0,75.73,7.12l-.43.25L68.7,24.19c-.24.61-1.9,3.58-1.61,4.09.13.23,3.66-.21,4.22-.23q4.45-.14,8.91.16c2.81.19,5.61.51,8.38,1a16.64,16.64,0,0,1,1.85.32,1.16,1.16,0,0,1,1.15.38c.37.2.3.35-.2.45-.59.89-2.89,1.57-3.87,2.11l-16.35,9Z" transform="translate(-0.74 -0.78)" /></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.98 76.11" id="maggie" className="simpsons"><defs></defs><title>maggie</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M28.48,53.86C19.3,54.14,10.11,54,1,53.38l20.6-10a3.9,3.9,0,0,0,2-1.57c.52-1.07-.1-2.3-.7-3.33L12.12,20.13,37.76,25.5,42.37.9l8.88,22.65A74.61,74.61,0,0,0,75.52,7.25l-8.21,20.9a90.66,90.66,0,0,1,25.2,1.58L71,41.5,89.8,53q-17.94,2-36,3c4,8.45.24,20.83-8.13,20.83C27,71.79,36.36,78.11,27.49,73.6c-.45-.22.11-.51,0,0-1.37,6.5.56-.38,0,0-7.58,5.22,7.15,1.69,0,0-3.85-4.63-6-9.85.51-18.08" transform="translate(-0.74 -0.78)" /><path className="cls-2" d="M28.69,53.73c-7.53.22-15.08.17-22.61-.2-1,0-2,0-2.94-.16l-1-.06c-.8-.23-.68-.46.39-.69,1.26-1,3.46-1.68,4.93-2.39l10.3-5c1.47-.72,3-1.34,4.44-2.2,1.7-1,2.07-2.19,1.21-4.06-1.42-3.09-3.51-6-5.23-9L12.33,20l-.43.25,25.64,5.36a1.73,1.73,0,0,0,.44-.25L42.59.78,42.16,1l6.39,16.31,1.59,4.07a6.51,6.51,0,0,0,.71,1.82c.08.63.39.67,1,.12l.78-.34c1.81-.81,3.6-1.69,5.34-2.63A76.79,76.79,0,0,0,75.73,7.12l-.43.25L68.7,24.19c-.24.61-1.9,3.58-1.61,4.09.13.23,3.66-.21,4.22-.23q4.45-.14,8.91.16c2.81.19,5.61.51,8.38,1,.61.09,1.25.16,1.85.31a1.18,1.18,0,0,1,1.15.39c.37.2.3.35-.2.44-.59.9-2.89,1.58-3.87,2.12l-16.35,9a2.93,2.93,0,0,1-.41.23L89.59,53.17l.43-.25q-18,2-36,3a4.09,4.09,0,0,0-.43.25c2.3,5.09,2.27,11.59-.78,16.4-1.39,2.2-3.63,4.11-6.36,4.15-1.73,0-3.66-.81-5.36-1.19-1.28-.28-2.56-.55-3.86-.72a10.71,10.71,0,0,0-3.66-.06,11.13,11.13,0,0,1-1.35.43,5.05,5.05,0,0,1-2.35-.67c-.72-.32-1.93-1.31-2.59-.8a6.2,6.2,0,0,0-.49,2.8s.4-.2.43-.25c.27-.28.85-2.68.49-2.8s-1.54,1.08-1.62,1.14c-2.53,2.28,1,2,2.49,1.14,2.59-1.39-.63-1.93-1.57-3.16C22.56,66.78,24,61,28.22,55.39c-.1.12-.34.13-.44.25-2.6,3.42-4.94,7.55-3.88,12a13.43,13.43,0,0,0,2.18,4.56,4.58,4.58,0,0,0,1.62,1.65c.37.19,1.07.22,1.33.6.87,1.23-1.49,1.76-2.39,1.77-2.61,0,.24-2.15,1.06-2.73l-.43.25a6.89,6.89,0,0,1-.49,2.8l.43-.25c-.19-1,.63-2.07.44-3.08h0l-.12.06s-.42.25-.43.24a6.16,6.16,0,0,0,5.49,1.68c3.58-.89,7.64.46,11.1,1.35a8.34,8.34,0,0,0,8.93-3.3c3.7-4.8,3.83-11.94,1.4-17.3l-.43.25q18-1,36-3c.08,0,.38-.29.43-.25l-9.82-6-4.49-2.76-2.46-1.5L72,41.87c-.55-.51-.52-.83.07-1,.37-.51,1.57-.86,2.16-1.18l2.58-1.41L82,35.49l10.33-5.65c.07,0,.33-.25.4-.24A92.15,92.15,0,0,0,69.4,27.9L68,28c-.69.19-.73-.1-.11-.87A18.18,18.18,0,0,1,69,24.39l2.14-5.45L75.73,7.12c0,.11-.35.17-.43.25a74,74,0,0,1-8.19,7.13,72.53,72.53,0,0,1-7.18,4.69c-1.78,1-3.51,2-5.37,2.86a9.82,9.82,0,0,1-2.32,1.05c-.56.55-.88.51-1-.12l-.54-1.36L49.69,18.9,47.2,12.56,42.59.78s-.42.19-.43.25L37.54,25.62l.44-.25L12.33,20s-.42.26-.43.25l6.34,10.81,3.17,5.41c.73,1.25,2.33,3.16,2.11,4.75-.27,1.92-2.94,2.57-4.44,3.3l-6.27,3L1.16,53.26c-.09,0-.32.25-.42.24q13.74.89,27.52.48c.15,0,.29-.24.43-.25Z" transform="translate(-0.74 -0.78)" /><ellipse className="cls-3" cx="43.87" cy="45.22" rx="3.95" ry="4.03" /></g></g></svg>
              </div>
              <div id="scroll">
                <h5>Scroll down to learn more
                  <i class="fas fa-angle-down"></i></h5>
              </div>
            </div>
          </Scene>
          <Scene pin>
            <div className="panel body">
              <Responsive />
            </div>
          </Scene>
        </Controller>
      </SectionWipesStyled >
    );
  }
}
export default Scroller;
