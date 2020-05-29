export const WALLETCONNECT_STYLE_SHEET = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper{
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}


.walletconnect-modal__header p {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 25px;
  padding: 6px;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 6px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: .4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-qrcode__image {
  width: 100%;
  box-sizing: border-box;
  /* viewport height minus padding, text height, logo height and margins: */
  max-height: calc(100vh - (2 * 30px) - 1ex - 52px - (2 * 20px));
  min-height: 150px;
}

.walletconnect-connect__button {
  align-items: flex-start;
  background-color: rgb(64, 153, 255);
  background-image: none;
  border-radius: 8px;
  border-style: none;
  border-width: 0px;
  border-color: rgb(255, 255, 255);
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 1px 0px inset;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 16px;
  font-stretch: 100%;
  font-style: normal;
  font-weight: 600;
  width: 250px;
  height: 44px;
  letter-spacing: normal;
  line-height: 16px;
  margin: 12px 0px;
  padding: 8px 12px;
  position: relative;
  text-align: center;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  transition-delay: 0s;
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  width: 250px;
  will-change: transform;
}

.walletconnect-connect__button:active {
  transform: translateY(1px);
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 1px 0px inset;
}

@media (hover: hover) {
  .walletconnect-connect__button:hover {
    transform: translateY(-1px);
    box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.08) 0px 3px 6px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 1px 0px inset;
  }
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    max-height: 70%;
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}



.walletconnect-modal__base  {
  -webkit-font-smoothing: antialiased;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0,0,0,0.4);
  font-family: ui-rounded,"SF Pro Rounded","SF Pro Text",medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,ui-sans-serif,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
	margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: .4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
	transition: .125s cubic-bezier(0.4, 0.0, 1, 1);
}

.walletconnect-modal__header  {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -45px;
  width: 100%;
}

.walletconnect-modal__base  .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base  .wc-logo div {
	-webkit-mask: url('images/wc-logo.svg') center no-repeat;
	background-color: #3399FF;
  height: 21px;
  margin-right: 5px;
	mask-image: url('images/wc-logo.svg') center no-repeat;
  width: 32px;
}

.walletconnect-modal__base  .wc-logo p {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base  .close-button {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
  background: url('images/close-button.svg') center no-repeat;
  cursor: pointer;
  height: 26px;
  margin: 0 -15px 0 0;
  padding: 15px;
  pointer-events: auto;
  transition: .12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 26px;
	will-change: transform;
}

.walletconnect-modal__base  .close-button:hover {
	opacity: 0.75;
}

.walletconnect-modal__base  .close-button:active {
	opacity: 0.75;
  transform: scale(0.82);
}

.walletconnect-modal__base .hidden .close-button {
	opacity: 0 !important;
	pointer-events: none !important;
	transform: scale(0);
}

.walletconnect-modal__base  h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base  .row {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: .15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base  .row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base  .row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: .1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base  h3 {
  color: #25292E;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 0 42px 3px 0;
}

.walletconnect-modal__base  .right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base  .app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base  .caret {
  background: url('images/caret.svg') no-repeat;
  height: 18px;
  opacity: 0.3;
  transition: .1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
	will-change: opacity;
}

.walletconnect-modal__base  .row:hover .caret, .walletconnect-modal__base  .row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__footer  {
  margin-top: 20px;
}

.walletconnect-modal__footer a{
  color: #898d97;
  font-size: 15px;
}`;