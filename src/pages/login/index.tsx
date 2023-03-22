import {NextPage} from "next";
import axios from "axios";
import {useDispatch} from "react-redux";

import Router from 'next/router';
import Link from "next/link";

const Login: NextPage = () => {
  const dispatch = useDispatch();
  async function doLogin(values: any) {
    var ret = ['niente'];
    try {
      //const resp = await axios.post('/api/auth/register', values);
      const resp = await axios.post('http://localhost:1337/api/auth/local', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //dispatch(setAuthState(true))
      Router.push('/')
      return ['OK', resp.data.message];
    } catch (error) {
      console.log(error);
      // @ts-ignore
      return ['alert'/*, error.response.data.message*/];
    }
  }

  const handleSubmit = (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get('email')); // reference by form input's `name` tag
    console.log(data);
    /*fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/

    const data2 = {
      identifier: data.get('email'),
      password: data.get('password')
    }

    const res = doLogin(data2);
    console.log(res);
  }

  return (
    <div className="db-Login-root db-Login-root--v4">
      <div className="sn-17skn3p sn-itde6f">
        <div>
          <div
            className="db-RegisterAndLoginLayout db-RegisterAndLoginLayout--login db-RegisterAndLoginLayout--isUltraWide Box-root Flex-flex Flex-direction--column">
            <div
              className="db-RegisterAndLoginBackground db-RegisterAndLoginBackground--default db-RegisterAndLoginBackground--desktopUltraWide">
              <div className="db-RegisterAndLoginBackground-background">
                <div className="db-RegisterAndLoginBackground-grayBackground"></div>
                <div
                  className="db-RegisterAndLoginBackground-verticalLine db-RegisterAndLoginBackground-verticalLine--first"></div>
                <div
                  className="db-RegisterAndLoginBackground-verticalLine db-RegisterAndLoginBackground-verticalLine--second"></div>
                <div
                  className="db-RegisterAndLoginBackground-verticalLine db-RegisterAndLoginBackground-verticalLine--third"></div>
                <div
                  className="db-RegisterAndLoginBackground-verticalLine db-RegisterAndLoginBackground-verticalLine--fourth"></div>
                <div
                  className="db-RegisterAndLoginBackground-verticalLine db-RegisterAndLoginBackground-verticalLine--fifth"></div>
                <div className="db-RegisterAndLoginBackground-firstLeftStripe"></div>
                <div className="db-RegisterAndLoginBackground-secondLeftStripe"></div>
                <div className="db-RegisterAndLoginBackground-firstAndSecondLeftStripeBlend"></div>
                <div className="db-RegisterAndLoginBackground-firstRightStripe"></div>
              </div>
            </div>
            <div className="db-RegisterAndLoginLayout-contentWrapper Box-root">
              <div className="db-RegisterAndLoginLayout-formContainer Box-root">
                <div className="db-RegisterAndLoginLayout-logo Box-root">
                  <div title="Stripe"
                       className="SVGInline SVGInline--cleaned SVG Logo Icon-color Icon-color--gray800 Box-root Flex-flex">
                    <a href={"/"}>TBD Logo</a>
                  </div>
                </div>
                <div
                  className="Card-root Card--radius--all Card--shadow--large db-RegisterAndLoginLayout-card Box-root Box-hideIfEmpty Box-background--white">
                  <div className="db-RegisterAndLoginLayout-formPadding Box-root">
                    <div>
                      <div className="Box-root Padding-horizontal--20">
                        <div role="main">
                          <div className="Box-root" style={{pointerEvents: "none"}}>
                            <div
                              className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                              style={{marginLeft: "-20px", marginTop: "-20px"}}>
                              <div className="Box-root Box-hideIfEmpty Margin-top--20 Margin-left--20"
                                   style={{pointerEvents: "auto"}}><span
                                className="Text-color--dark Text-fontSize--20 Text-fontWeight--regular Text-lineHeight--28 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><div
                                className="db-LoginTitle--v4"><span>Sign in to your account</span></div></span></div>
                              <div className="Box-root Box-hideIfEmpty Margin-top--20 Margin-left--20"
                                   style={{pointerEvents: "auto"}}>
                                {/* @ts-ignore */}
                                <form method="POST" noValidate={true} onSubmit={handleSubmit}>
                                  <div data-auto-transform-content="true" className="auto-transform-content">
                                    <div className="db-Login-fields Box-root Padding-bottom--12"
                                         style={{pointerEvents: "none"}}>
                                      <div
                                        className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap">
                                        <div className="Box-root Box-hideIfEmpty" style={{pointerEvents: "auto"}}>
                                          <div className="db-Login-field Box-root" style={{pointerEvents: "none"}}>
                                            <div
                                              className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                              style={{marginLeft: "-12px", marginTop: "-12px"}}>
                                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                   style={{pointerEvents: "auto"}}><label htmlFor="email"><span
                                                className="db-Login-fieldLabel db-Login-fieldLabel--clickable Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Email</span></span></label>
                                              </div>
                                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                   style={{pointerEvents: "auto"}}>
                                                <div
                                                  className="PressableCore PressableCore--cursor--text PressableCore--height--jumbo PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput Box-root Flex-inlineFlex"
                                                  style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"}}>
                                                  <div className="PressableCore-base Box-root"><input
                                                    autoComplete="username email" data-testid="login-email-input"
                                                    tabIndex={1} aria-invalid="false" id="email" name="email"
                                                    placeholder="" type="text" aria-label="email input"
                                                    aria-required="true" required={true}
                                                    className="Input Input--nowrap PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                    style={{color: "rgb(60, 66, 87)"}} /></div>
                                                  <div
                                                    className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                                                </div>
                                              </div>
                                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                   style={{pointerEvents: "auto"}}></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="Box-root Box-hideIfEmpty" style={{pointerEvents: "auto"}}>
                                          <div className="Box-root Padding-top--32"></div>
                                        </div>
                                        <div className="Box-root Box-hideIfEmpty" style={{pointerEvents: "auto"}}>
                                          <div className="Box-root Flex-flex">
                                            <div data-auto-transform-content="true"
                                                 className="auto-transform-content">
                                              <div className="db-Login-field Box-root" style={{pointerEvents: "none"}}>
                                                <div
                                                  className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                  style={{marginLeft: "-12px", marginTop: "-12px"}}>
                                                  <div
                                                    className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                    style={{pointerEvents: "auto"}}><label htmlFor="password"><span
                                                    className="db-Login-fieldLabel db-Login-fieldLabel--clickable Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><div
                                                    className="Box-root" style={{pointerEvents: "none"}}><div
                                                    className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--spaceBetween Flex-wrap--nowrap"
                                                    style={{marginLeft: "-4px", marginTop: "-4px"}}><div
                                                    className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                                    style={{pointerEvents: "auto"}}><span>Password</span></div><div
                                                    className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                                    style={{pointerEvents: "auto"}}><a tabIndex={3}
                                                                                     className="UnstyledLink ButtonLink Flex-flex"
                                                                                     href="#"><div
                                                    className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                                    style={{position: "relative"}}><div aria-hidden="true"
                                                                                     className="TextAligner Box-root"
                                                                                     style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div><div
                                                    className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                                    style={{lineHeight: 0, flex: "1 1 auto"}}><span
                                                    className="ButtonLink-label Text-color--blue Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                                    style={{marginTop: "-1px"}}><span>Forgot your password?</span></span></div></div></a></div></div></div></span></label>
                                                  </div>
                                                  <div
                                                    className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                    style={{pointerEvents: "auto"}}>
                                                    <div style={{width: "100%"}}>
                                                      <div
                                                        className="PressableCore PressableCore--cursor--text PressableCore--height--jumbo PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput db-RegisterTextInputWithVisibilityToggle--hidden Box-root Flex-inlineFlex"
                                                        style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"}}>
                                                        <div className="PressableCore-base Box-root"><input
                                                          autoComplete="current-password"
                                                          data-testid="login-password-input" tabIndex={2}
                                                          aria-invalid="false" id="old-password" name="password"
                                                          placeholder="" type="password" aria-label="password input"
                                                          aria-required="false"
                                                          className="Input Input--nowrap PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                          style={{color: "rgb(60, 66, 87)"}} /></div>
                                                        <div
                                                          className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="db-Login-field Box-root" style={{pointerEvents: "none"}}>
                                                <div
                                                  className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                  style={{marginLeft: "-12px", marginTop: "-12px"}}>
                                                  <div
                                                    className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                    style={{pointerEvents: "auto"}}>
                                                    <div className="Box-root Padding-top--32">
                                                      <div
                                                        className="PressableControlLabel Checkbox Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                                        style={{position: "relative"}}>
                                                        <div aria-hidden="true" className="TextAligner Box-root"
                                                             style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                                                        <div
                                                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                                          style={{lineHeight: 0, flex: "1 1 auto"}}>
                                                          <div
                                                            className="PressableCore PressableCore--cursor--pointer PressableCore--width PressableControl Box-root Flex-inlineFlex"
                                                            style={{backgroundColor: "rgb(99, 91, 255)", height: "14px", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(69, 56, 255, 0.8) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px", borderRadius: "4px", minWidth: "14px", width: "14px", transform: "translateY(2.07px)"}}>
                                                            <div className="PressableCore-base Box-root">
                                                              <div className="Box-root Flex-flex"
                                                                   style={{color: "rgb(255, 255, 255)"}}><input
                                                                data-db-analytics-name="email_password_input_remember_me_checkbox"
                                                                tabIndex={4} aria-invalid="false"
                                                                className="Checkbox-source PressableContext PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--width"
                                                                id="checkbox1" type="checkbox" checked />
                                                                <div
                                                                  className="SVGInline SVGInline--cleaned SVG Checkbox-mark Checkbox-mark--visible Icon-color Icon-color--inherit Box-root Flex-flex">
                                                                  <svg
                                                                    className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Checkbox-mark-svg Checkbox-mark--visible-svg Icon-color-svg Icon-color--inherit-svg"
                                                                    height="14" width="14"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 14 14">
                                                                    <path
                                                                      d="M10.346 3.301a.929.929 0 0 1 1.37 0 1.076 1.076 0 0 1 0 1.456l-4.64 4.94a.929.929 0 0 1-1.37 0L3.284 7.123a1.076 1.076 0 0 1 0-1.456.929.929 0 0 1 1.37 0L6.39 7.513l3.955-4.212z"></path>
                                                                  </svg>
                                                                </div></div>
                                                            </div>
                                                            <div
                                                              className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"
                                                              style={{borderRadius: "4px"}}></div>
                                                          </div>
                                                          <div className="Box-root Padding-left--8"><span
                                                            className="Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                                            style={{marginTop: "-1px"}}><label
                                                            className="PressableControlLabel-label" htmlFor="checkbox1">Stay signed in for a week</label></span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="Box-root Padding-top--32"></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="Box-root Box-hideIfEmpty" style={{pointerEvents: "auto"}}>
                                          <div data-auto-transform-content="true"
                                               className="auto-transform-content">
                                            <div className="db-Login-field Box-root" style={{pointerEvents: "none"}}>
                                              <div
                                                className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                style={{marginLeft: "-12px", marginTop: "-12px"}}>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                     style={{pointerEvents: "auto"}}>
                                                  <div
                                                    className="PressableCore PressableCore--cursor--pointer PressableCore--height--jumbo PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableButton Button Button--color--blue Box-root Flex-inlineFlex"
                                                    style={{backgroundColor: "rgb(99, 91, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(69, 56, 255, 0.8) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                                                    <div className="PressableCore-base Box-root">
                                                      <button
                                                        data-db-analytics-name="email_password_input_sign_in_button"
                                                        tabIndex={5}
                                                        className="UnstyledLink Button-element PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                        type="submit" style={{color: "rgb(255, 255, 255)"}}>
                                                        <div
                                                          className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                                          style={{position: "relative"}}>
                                                          <div aria-hidden="true" className="TextAligner Box-root"
                                                               style={{lineHeight: "28px", fontSize: "16px", flex: "0 0 auto"}}></div>
                                                          <div
                                                            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                                                            style={{width: "100%", lineHeight: 0, flex: "1 1 auto"}}><span
                                                            className="Button-label Text-color--white Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--28 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                                            style={{marginTop: "-1px"}}><span>Continue</span></span></div>
                                                        </div>
                                                      </button>
                                                    </div>
                                                    <div
                                                      className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="Box-root Box-hideIfEmpty" style={{pointerEvents: "auto"}}>
                                          <div className="Box-root Padding-top--8 Padding-bottom--20"></div>
                                        </div>
                                        <div className="Box-root Box-hideIfEmpty" style={{pointerEvents: "auto"}}>
                                          <div data-auto-transform-content="true"
                                               className="auto-transform-content">
                                            <div className="db-Login-field Box-root" style={{pointerEvents: "none"}}>
                                              <div
                                                className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                style={{marginLeft: "-12px", marginTop: "-12px"}}>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                                     style={{pointerEvents: "auto"}}>
                                                  <div className="Box-root" style={{pointerEvents: "none"}}>
                                                    <div
                                                      className="Box-root Flex-flex Flex-alignItems--center Flex-direction--column Flex-justifyContent--center Flex-wrap--nowrap">
                                                      <div className="Box-root Box-hideIfEmpty"
                                                           style={{pointerEvents: "auto"}}><Link data-db-analytics-name="email_password_input_use_sso_link"
                                                                                            tabIndex={6}
                                                                                            className="UnstyledLink ButtonLink Flex-flex"
                                                                                            href="/login">
                                                        <div
                                                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                                          style={{position: "relative"}}>
                                                          <div aria-hidden="true" className="TextAligner Box-root"
                                                               style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                                                          <div
                                                            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                                            style={{lineHeight: 0, flex: "1 1 auto"}}><span
                                                            className="ButtonLink-label Text-color--blue Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                                            style={{marginTop: "-1px"}}><span>Use single sign-on (SSO) instead</span></span>
                                                          </div>
                                                        </div>
                                                      </Link></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-auto-transform-content="true"
                     className="auto-transform-content" style={{zIndex: 1}}>
                  <div className="Box-root Padding-top--32 Padding-left--20" style={{pointerEvents: "none"}}>
                    <div
                      className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                      style={{marginLeft: "-4px", marginTop: "-4px"}}>
                      <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                           style={{pointerEvents: "auto"}}>
                        <div className="Box-root" style={{pointerEvents: "none"}}>
                          <div
                            className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                            style={{marginLeft: "-24px", marginTop: "-24px"}}>
                            <div className="Box-root Box-hideIfEmpty Margin-top--24 Margin-left--24"
                                 style={{pointerEvents: "auto"}}><span><span><span>Don&apos;t have an account?</span> </span><Link
                              className="UnstyledLink InlineLink Text-color--blue" href="/register">Sign up</Link></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="db-RegisterAndLoginLayout-formContainer-spacer"></div>
                <div className="db-RegisterAndLoginLayout-footer Box-root">
                  <div className="Box-root" style={{pointerEvents: "none"}}>
                    <div
                      className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                      style={{marginLeft: "-8px", marginTop: "-8px"}}>
                      <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                           style={{pointerEvents: "auto"}}>
                        <div className="Box-root" style={{pointerEvents: "none"}}>
                          <div
                            className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                            style={{marginLeft: "-8px", marginTop: "-8px"}}>
                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                 style={{pointerEvents: "auto"}}><a className="UnstyledLink ButtonLink Flex-flex"
                                                                  href="#">
                              <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                   style={{position: "relative"}}>
                                <div aria-hidden="true" className="TextAligner Box-root"
                                     style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                                <div
                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                  style={{lineHeight: 0, flex: "1 1 auto"}}><span
                                  className="ButtonLink-label Text-color--gray Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                  style={{marginTop: "-1px"}}><span>© BZR Szoftverfejlesztő Kft.</span></span></div>
                              </div>
                            </a></div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                 style={{pointerEvents: "auto"}}><span
                              className="Text-color--gray300 Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">·</span>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                 style={{pointerEvents: "auto"}}><a className="UnstyledLink ButtonLink Flex-flex"
                                                                  href="https://stripe.com/contact">
                              <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                   style={{position: "relative"}}>
                                <div aria-hidden="true" className="TextAligner Box-root"
                                     style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                                <div
                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                  style={{lineHeight: 0, flex: "1 1 auto"}}><span
                                  className="ButtonLink-label Text-color--gray Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                  style={{marginTop: "-1px"}}><span>Contact</span></span></div>
                              </div>
                            </a></div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                 style={{pointerEvents: "auto"}}><span
                              className="Text-color--gray300 Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">·</span>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                                 style={{pointerEvents: "auto"}}><a className="UnstyledLink ButtonLink Flex-flex"
                                                                  href="https://stripe.com/privacy">
                              <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                   style={{position: "relative"}}>
                                <div aria-hidden="true" className="TextAligner Box-root"
                                     style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                                <div
                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                  style={{lineHeight: 0, flex: "1 1 auto"}}><span
                                  className="ButtonLink-label Text-color--gray Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                  style={{marginTop: "-1px"}}><span>Privacy &amp; terms</span></span></div>
                              </div>
                            </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Box-root">
            <div className="recaptcha-container"></div>
          </div>
          <div>
            <div className="db-CookieBanner-VerticalSpacer Box-root db-CookieBanner-enter-done"></div>
            <div
              className="db-CookieBanner db-CookieBanner--fixed Box-root Box-background--blue900 Padding-all--16 Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--spaceBetween">
              <span
                className="Text-color--white Text-fontSize--13 Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>We use cookies to improve your experience and for marketing. Read our <a
                target="_blank" className="UnstyledLink ButtonLink db-CookieBanner-CookiePolicyLink Flex-inlineFlex"
                href="#" rel="noopener noreferrer"><div
                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                style={{position: "relative"}}><div aria-hidden="true" className="TextAligner Box-root"
                                                 style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div><div
                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                style={{lineHeight: 0, flex: "1 1 auto"}}><span
                className="ButtonLink-label Text-color--blue400 Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                style={{marginTop: "-1px"}}>cookie policy</span></div></div></a> or <a target="_blank"
                                                                                     className="UnstyledLink ButtonLink db-CookieBanner-CookiePolicyLink Flex-inlineFlex"
                                                                                     href="#"
                                                                                     rel="noopener noreferrer"><div
                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                style={{position: "relative"}}><div aria-hidden="true" className="TextAligner Box-root"
                                                 style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div><div
                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                style={{lineHeight: 0, flex: "1 1 auto"}}><span
                className="ButtonLink-label Text-color--blue400 Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                style={{marginTop: "-1px"}}>manage cookies</span></div></div></a>.</span></span>
              <div className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row">
                <div className="Box-root" style={{pointerEvents: "none"}}>
                  <div
                    className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                    style={{marginLeft: "-8px", marginTop: "-8px"}}>
                    <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                         style={{pointerEvents: "auto"}}>
                      <div
                        className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                        style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                        <div className="PressableCore-base Box-root">
                          <button
                            className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                            type="button" style={{color: "rgb(60, 66, 87)"}}>
                            <div
                              className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                              style={{position: "relative"}}>
                              <div aria-hidden="true" className="TextAligner Box-root"
                                   style={{lineHeight: "16px", fontSize: "13px", flex: "0 0 auto"}}></div>
                              <div
                                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                                style={{width: "100%", lineHeight: 0, flex: "1 1 auto"}}><span
                                className="Button-label Text-color--default Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                style={{marginTop: "-1px"}}><span>Accept all</span></span></div>
                            </div>
                          </button>
                        </div>
                        <div
                          className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                      </div>
                    </div>
                    <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"
                         style={{pointerEvents: "auto"}}>
                      <div
                        className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                        style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                        <div className="PressableCore-base Box-root">
                          <button
                            className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                            type="button" style={{color: "rgb(60, 66, 87)"}}>
                            <div
                              className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                              style={{position: "relative"}}>
                              <div aria-hidden="true" className="TextAligner Box-root"
                                   style={{lineHeight: "16px", fontSize: "13px", flex: "0 0 auto"}}></div>
                              <div
                                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                                style={{width: "100%", lineHeight: 0, flex: "1 1 auto"}}><span
                                className="Button-label Text-color--default Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                style={{marginTop: "-1px"}}><span>Reject all</span></span></div>
                            </div>
                          </button>
                        </div>
                        <div
                          className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;