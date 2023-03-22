import {NextPage} from "next";

//import linstance from '../api/auth/register';
import axios from "axios";
import {SyntheticEvent} from "react";

const Register: NextPage = () => {
  async function doRegister(values: any) {
    var ret = ['niente'];
    try {
      //const resp = await axios.post('/api/auth/register', values);
      const resp = await axios.post('http://localhost:1337/api/auth/local/register', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
      username: data.get('email'),
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
      user_type: 1,
      FirstName: 'HardcodedFirstName',
      LastName: 'HardcodedLastName'
    }

    const res = doRegister(data2);
    console.log(res);
  }

  return (
    <div className="db-RegisterApp-root db-RegisterApp--v4 db-RegisterApp--default">
      <div className="db-RegisterApp-containerSizeListener">
        <div
          className="db-RegisterAndLoginLayout db-RegisterAndLoginLayout--register db-RegisterAndLoginLayout--isUltraWide Box-root Flex-flex Flex-direction--column">
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
            <div className="db-RegisterAndLoginLayout-valuePropWrapper Box-root">
              <div className="db-RegisterValueProps db-RegisterValueProps--v4 Box-root">
                <div className="db-RegisterValueProps-topPadding"></div>
                <div className="Box-root Margin-left--16 Padding-bottom--32 Padding-left--12">
                  <div className="Box-root Padding-top--4">
                    <div title="Stripe"
                         className="SVGInline SVGInline--cleaned SVG Logo Icon-color Icon-color--gray800 Box-root Flex-flex">
                      <a href={"/"}>TBD Logo</a>
                    </div>
                  </div>
                </div>
                <div className="Box-root" style={{pointerEvents: "none"}}>
                  <div
                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                    style={{marginLeft: "-24px", marginTop: "-24px"}}>
                    <div className="Box-root Box-hideIfEmpty Margin-top--24 Margin-left--24"
                         style={{pointerEvents: "auto"}}>
                      <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                           style={{position: "relative"}}>
                        <div aria-hidden="true" className="TextAligner Box-root"
                             style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                        <div
                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                          style={{lineHeight: 0, flex: "1 1 auto"}}>
                          <div className="Box-root" style={{pointerEvents: "none"}}>
                            <div
                              className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                              style={{marginLeft: "-12px", marginTop: "-12px"}}>
                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                   style={{pointerEvents: "auto"}}>
                                <div
                                  className="db-RegisterValueProps-iconContainer db-RegisterValueProps-iconContainer--default">
                                  <div aria-hidden="true"
                                       className="SVGInline SVGInline--cleaned SVG Icon Icon--checkCircle Icon-color Icon-color--inherit Box-root Flex-flex"
                                       style={{marginTop: "-1.71px", transform: "translateY(3.07px)"}}>
                                    <svg aria-hidden="true"
                                         className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--checkCircle-svg Icon-color-svg Icon-color--inherit-svg"
                                         height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z"
                                        fillRule="evenodd"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                   style={{pointerEvents: "auto"}}>
                                <div
                                  className="db-RegisterValueProps-textContainer db-RegisterValueProps-textContainer--v4 Box-root"
                                  style={{pointerEvents: "none"}}>
                                  <div
                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                    style={{marginLeft: "-4px", marginTop: "-4px"}}>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                         style={{pointerEvents: "auto"}}><span
                                      className="Text-color--dark Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                      style={{marginTop: "-3.76px", marginBottom: "-1.24px"}}><span>Get started quickly</span></span>
                                    </div>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                         style={{pointerEvents: "auto"}}><span
                                      className="Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                      style={{marginTop: "-1px"}}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est explicabo id illum iure labore numquam quisquam! Ab ad at dolore dolorum enim ex incidunt ipsam placeat sint voluptatem. Excepturi.</span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Box-root Box-hideIfEmpty Margin-top--24 Margin-left--24"
                         style={{pointerEvents: "auto"}}>
                      <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                           style={{position: "relative"}}>
                        <div aria-hidden="true" className="TextAligner Box-root"
                             style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                        <div
                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                          style={{lineHeight: 0, flex: "1 1 auto"}}>
                          <div className="Box-root" style={{pointerEvents: "none"}}>
                            <div
                              className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                              style={{marginLeft: "-12px", marginTop: "-12px"}}>
                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                   style={{pointerEvents: "auto"}}>
                                <div
                                  className="db-RegisterValueProps-iconContainer db-RegisterValueProps-iconContainer--default">
                                  <div aria-hidden="true"
                                       className="SVGInline SVGInline--cleaned SVG Icon Icon--checkCircle Icon-color Icon-color--inherit Box-root Flex-flex"
                                       style={{marginTop: "-1.71px", transform: "translateY(3.07px)"}}>
                                    <svg aria-hidden="true"
                                         className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--checkCircle-svg Icon-color-svg Icon-color--inherit-svg"
                                         height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z"
                                        fillRule="evenodd"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                   style={{pointerEvents: "auto"}}>
                                <div
                                  className="db-RegisterValueProps-textContainer db-RegisterValueProps-textContainer--v4 Box-root"
                                  style={{pointerEvents: "none"}}>
                                  <div
                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                    style={{marginLeft: "-4px", marginTop: "-4px"}}>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                         style={{pointerEvents: "auto"}}><span
                                      className="Text-color--dark Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                      style={{marginTop: "-3.76px", marginBottom: "-1.24px"}}><span>Support any business model</span></span>
                                    </div>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                         style={{pointerEvents: "auto"}}><span
                                      className="Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                      style={{marginTop: "-1px"}}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis delectus, eos exercitationem explicabo facere id inventore iste iusto neque obcaecati odio, omnis porro quas, tempore tenetur totam! Modi, rerum.</span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Box-root Box-hideIfEmpty Margin-top--24 Margin-left--24"
                         style={{pointerEvents: "auto"}}>
                      <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                           style={{position: "relative"}}>
                        <div aria-hidden="true" className="TextAligner Box-root"
                             style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                        <div
                          className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                          style={{lineHeight: 0, flex: "1 1 auto"}}>
                          <div className="Box-root" style={{pointerEvents: "none"}}>
                            <div
                              className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                              style={{marginLeft: "-12px", marginTop: "-12px"}}>
                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                   style={{pointerEvents: "auto"}}>
                                <div
                                  className="db-RegisterValueProps-iconContainer db-RegisterValueProps-iconContainer--default">
                                  <div aria-hidden="true"
                                       className="SVGInline SVGInline--cleaned SVG Icon Icon--checkCircle Icon-color Icon-color--inherit Box-root Flex-flex"
                                       style={{marginTop: "-1.71px", transform: "translateY(3.07px)"}}>
                                    <svg aria-hidden="true"
                                         className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--checkCircle-svg Icon-color-svg Icon-color--inherit-svg"
                                         height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z"
                                        fillRule="evenodd"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12"
                                   style={{pointerEvents: "auto"}}>
                                <div
                                  className="db-RegisterValueProps-textContainer db-RegisterValueProps-textContainer--v4 Box-root"
                                  style={{pointerEvents: "none"}}>
                                  <div
                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                    style={{marginLeft: "-4px", marginTop: "-4px"}}>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                         style={{pointerEvents: "auto"}}><span
                                      className="Text-color--dark Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                      style={{marginTop: "-3.76px", marginBottom: "-1.24px"}}><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                         style={{pointerEvents: "auto"}}><span
                                      className="Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--block"
                                      style={{marginTop: "-1px"}}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi optio quaerat recusandae suscipit vitae. Adipisci dolor excepturi hic ipsa ipsam laborum necessitatibus placeat quam quidem quo reprehenderit, sit unde!</span></span>
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
                                                                href="https://stripe.com/">
                            <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                 style={{position: "relative"}}>
                              <div aria-hidden="true" className="TextAligner Box-root"
                                   style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div>
                              <div
                                className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
                                style={{lineHeight: 0, flex: "1 1 auto"}}><span
                                className="ButtonLink-label Text-color--gray Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                style={{marginTop: "-1px"}}><span>© Stripe</span></span></div>
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
            <div className="db-RegisterAndLoginLayout-formContainer Box-root">
              <div
                className="Card-root Card--radius--all Card--shadow--large db-RegisterAndLoginLayout-card Box-root Box-hideIfEmpty Box-background--white">
                <div className="db-RegisterAndLoginLayout-formPadding Box-root">
                  <div>
                    <div className="Box-root Padding-bottom--20 Padding-horizontal--20">
                      <div className="db-RegisterTitle db-RegisterTitle--v4 Box-root">
                        <span>Create your account</span></div>
                    </div>
                    <form method="POST" action="/register" noValidate={true} onSubmit={handleSubmit}>
                      <div className="FormLayout Box-root">
                        <div className="Box-root">
                          <div className="Box-root">
                            <div className="db-RegisterEmailInput Box-root"
                                 style={{minHeight: "104px", paddingTop: "4px"}}>
                              <div
                                className="FormRow FormRow--layout--stacked FormRow--hasName Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--stretch Flex-direction--column">
                                <div className="FormRow-start Box-root Padding-bottom--8">
                                  <div className="Box-root Flex-flex">
                                    <div className="Box-root"><span
                                      className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><label
                                      className="FormRow-label"
                                      htmlFor="register-email-input"><span>Email</span></label></span></div>
                                  </div>
                                </div>
                                <div className="Box-root">
                                  <div className="FormRow-end Box-root" style={{pointerEvents: "none"}}>
                                    <div
                                      className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                      style={{marginLeft: "-16px", marginTop: "-16px"}}>
                                      <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                           style={{pointerEvents: "auto"}}>
                                        <div className="FormField db-RegisterFormField-formField">
                                          <div className="Box-root">
                                            <div
                                              className="PressableCore PressableCore--cursor--text PressableCore--height--large PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput Box-root Flex-inlineFlex"
                                              style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"}}>
                                              <div className="PressableCore-base Box-root"><input
                                                data-testid="register-email-input" autoComplete="email"
                                                aria-invalid="false" id="register-email-input" name="email"
                                                placeholder="" type="email"
                                                className="Input Input--nowrap PressableContext Padding-horizontal--12 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--12 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                 style={{color: "rgb(60, 66, 87)"}} /></div>
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
                          <div className="Box-root" style={{minHeight: "100px"}}>
                            <div className="Box-root">
                              <div
                                className="FormRow FormRow--layout--stacked FormRow--hasName Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--stretch Flex-direction--column">
                                <div className="FormRow-start Box-root Padding-bottom--8">
                                  <div className="Box-root Flex-flex">
                                    <div className="Box-root"><span
                                      className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><label
                                      className="FormRow-label"
                                      htmlFor="register-name-input"><span>Full name</span></label></span></div>
                                  </div>
                                </div>
                                <div className="Box-root">
                                  <div className="FormRow-end Box-root" style={{pointerEvents: "none"}}>
                                    <div
                                      className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                      style={{marginLeft: "-16px", marginTop: "-16px"}}>
                                      <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                           style={{pointerEvents: "auto"}}>
                                        <div className="FormField db-RegisterFormField-formField">
                                          <div className="Box-root">
                                            <div
                                              className="PressableCore PressableCore--cursor--text PressableCore--height--large PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput Box-root Flex-inlineFlex"
                                              style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"}}>
                                              <div className="PressableCore-base Box-root"><input autoCapitalize="words"
                                                                                                  autoComplete="name"
                                                                                                  data-testid="register-name-input"
                                                                                                  aria-invalid="false"
                                                                                                  id="register-name-input"
                                                                                                  name="name"
                                                                                                  placeholder=""
                                                                                                  type="text"
                                                                                                  className="Input Input--nowrap PressableContext Padding-horizontal--12 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--12 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized"

                                                                                                  style={{color: "rgb(60, 66, 87)"}} />
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
                          <div className="Box-root" style={{minHeight: "100px"}}>
                            <div className="Box-root">
                              <div
                                className="FormRow FormRow--layout--stacked Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--stretch Flex-direction--column">
                                <div className="FormRow-start Box-root Padding-bottom--8">
                                  <div className="Box-root Flex-flex">
                                    <div className="Box-root"><span
                                      className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><label
                                      className="FormRow-label"><div className="Box-root" style={{pointerEvents: "none"}}><div
                                      className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                      style={{marginLeft: "-4px", marginTop: "-4px"}}><div
                                      className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                      style={{pointerEvents: "auto"}}><span>Country</span></div><div
                                      className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                      style={{pointerEvents: "auto"}}><div className="Box-root Flex-flex"><div
                                      className="Box-root Flex-flex"><div className="Box-root Margin-top--4"><div
                                      aria-hidden="true"
                                      className="SVGInline SVGInline--cleaned SVG Icon Icon--info Icon-color Icon-color--gray600 Box-root Flex-flex"><svg
                                      aria-hidden="true"
                                      className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--info-svg Icon-color-svg Icon-color--gray600-svg"
                                      height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path
                                      d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                      fillRule="evenodd"></path></svg></div></div></div></div></div></div></div></label></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="Box-root">
                                  <div className="FormRow-end Box-root" style={{pointerEvents: "none"}}>
                                    <div
                                      className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                      style={{marginLeft: "-16px", marginTop: "-16px"}}>
                                      <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                           style={{pointerEvents: "auto"}}>
                                        <div data-testid="register-country-select"
                                             className="FormField db-RegisterFormField-formField">
                                          <div className="Box-root">
                                            <div
                                              className="PressableCore PressableCore--width PressableCore--width--maximized Box-root Flex-inlineFlex"
                                              style={{boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"}}>
                                              <div className="PressableCore-base Box-root">
                                                <div
                                                  className="SearchableSelect-container SearchableSelect-container--size--large Box-root">
                                                  <input aria-invalid="false" type="hidden" value="" />
                                                    <div
                                                      className="PressableCore PressableCore--cursor--pointer PressableCore--height--large PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableButton SearchableSelect-button Box-root Flex-inlineFlex"
                                                      style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                                                      <div className="PressableCore-base Box-root">
                                                        <button aria-expanded="false" aria-haspopup="true"
                                                                aria-label="Choose…"
                                                                className="SearchableSelect-element PressableContext Padding-horizontal--12 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                                type="button" style={{color: "rgb(60, 66, 87)"}}>
                                                          <div className="Box-root Padding-right--16"
                                                               style={{width: "100%"}}>
                                                            <div className="TruncatedText"
                                                                 style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                                                              <span
                                                                className="Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--28 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline"><div
                                                                className="Box-root" style={{pointerEvents: "none"}}><div
                                                                className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                                                style={{marginLeft: "-4px", marginTop: "-4px"}}><div
                                                                className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                                                style={{pointerEvents: "auto"}}><div className="Box-root"
                                                                                                   style={{paddingTop: "6px"}}><div
                                                                title="HU"
                                                                className="SVGInline SVGInline--cleaned SVG Box-root Flex-flex"><svg
                                                                className="SVGInline-svg SVGInline--cleaned-svg SVG-svg"
                                                                height="16" width="16"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g
                                                                fill="none" fillRule="evenodd"><path fill="#E25950"
                                                                                                      d="M1.994 2A1.992 1.992 0 0 0 0 4v2h16V4c0-1.105-.895-2-1.994-2H1.994Z"></path><path
                                                                fill="#F6F9FC" d="M0 6h16v4H0z"></path><path
                                                                fill="#EAEEF3" fillRule="nonzero"
                                                                d="M15 10V6h1v4h-1ZM0 6h1v4H0V6Z"></path><path
                                                                fill="#24B47E"
                                                                d="M0 10v2c0 1.105.895 2 1.994 2h12.012A1.992 1.992 0 0 0 16 12v-2H0Z"></path></g></svg></div></div></div><div
                                                                className="Box-root Box-hideIfEmpty Margin-top--4 Margin-left--4"
                                                                style={{pointerEvents: "auto"}}>Hungary</div></div></div></span>
                                                            </div>
                                                          </div>
                                                        </button>
                                                      </div>
                                                      <div
                                                        className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                                                    </div></div>
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
                          <div className="db-RegisterPage-passwordInputContainer Box-root Margin-bottom--12">
                            <div
                              className="FormRow FormRow--layout--stacked FormRow--hasName Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--stretch Flex-direction--column">
                              <div className="FormRow-start Box-root Padding-bottom--8">
                                <div className="Box-root Flex-flex">
                                  <div className="Box-root"><span
                                    className="Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><label
                                    className="FormRow-label"
                                    htmlFor="register-password-input-with-description"><span>Password</span></label></span>
                                  </div>
                                </div>
                              </div>
                              <div className="Box-root">
                                <div className="FormRow-end Box-root" style={{pointerEvents: "none"}}>
                                  <div
                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                    style={{marginLeft: "-16px", marginTop: "-16px"}}>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                         style={{pointerEvents: "auto"}}>
                                      <div className="FormField">
                                        <div className="Box-root">
                                          <div className="db-RegisterPasswordInput--fieldWrapper">
                                            <div className="Box-root Flex-flex Flex-alignItems--flexStart">
                                              <div style={{width: "100%"}}>
                                                <div
                                                  className="PressableCore PressableCore--cursor--text PressableCore--height--large PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput db-RegisterTextInputWithVisibilityToggle--hidden Box-root Flex-inlineFlex"
                                                  style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"}}>
                                                  <div className="PressableCore-base Box-root"><input
                                                    autoComplete="new-password" data-testid="register-password-input"
                                                    aria-invalid="false" id="register-password-input-with-description"
                                                    name="password" placeholder="" type="password"
                                                    className="Input Input--nowrap PressableContext Padding-horizontal--12 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized TextInput-element TextInput-element--align--left PressableContext Padding-horizontal--12 Padding-vertical--8 PressableContext--cursor--text PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                     style={{color: "rgb(60, 66, 87)"}} /></div>
                                                  <div
                                                    className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="Box-root Flex-flex Flex-direction--column">
                                            <div className="db-RegisterPasswordInput-description Box-root"
                                                 style={{flexBasis: "44px"}}>
                                              <div
                                                className="db-RegisterPasswordInputStrengthDescription Box-root db-RegisterPasswordInputStrengthDescription-appear-done db-RegisterPasswordInputStrengthDescription-enter-done"></div>
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
                          <input type="hidden" name="io_blackbox"
                                 value="0400bpNfiPCR/AUNf94lis1ztvafFcovDupWc8cuWfc1lkjHuPXzNXzFq8MatmJ8q01ND2MrzOwD3v1SInpRYxSxo6Xj5dx1fp3aaRL1MqBgshz5Ow7cbYXLzHYpPgQiEVyiFhADfeGQZO28FbUrrO5N6T/KhUgGeNqKfeXqFvOptJNXtAjZJjQfEhNDMrvEcnOrMLejutG4hxJR6CA8fOyhoSgO+Uqpxb++sZBfgyIR+XyE6hsi11FUlhkwfCqvl92YM4G3Y6zSxR6IjZf3FbGINYuD71qCKcmZqa+c5UMfdLNXqLz+1vlqUAr9dE2jcfl0wgroQBfpyuJQcLmad5L36gDlw2lP5W7aVIAW7uDQjXP1CYi+TBqr3hiUdQ22e5RWfnIJKm/s929XR+F7rUSVmrEtMX9chYH1nRxNyuuuAkiWFdL92rji202O8PQVbf6pPOYe85lXFCT6+jko6JPWWx3WFF6HN8fmd0mMhGofYK8eb8JRG/ZBhfF7CXlj79gn77A/AHthzIQI07p4tGGHBe8mR20/oWqfLQ/2q0KAoA7AqvQx/6iBZvdaZ+9WVICZVdG4UbDjKEcxHxeWWd1c/tT16TeM5diEHf7WUtiodkQIYvLK7ITtikeL/lnNkqla/zE8byqzj+DN1/EvKVgGJuwRUFY7xdAiqlr028/3Pq8pjukBFjec4/7uzpZjbtz5xnCaYF619ziayypN7tbNCDrs8OZl2fACMFI5bVRQur8JdmNWP4mnLx0XuKEiKsJAMg1EJAZttft4Xa0s3p8L9oiu6TAsPc3Ur+MUhZPq4KPk0B48ux+V4SxwhwBmNydI6S6la0lc7CNSwejOX5dhKDBAKBIrRLbRVKNQ0ZFLTxgPZ9PQKjp9T5E75agXQtdj5mNV6QxgbclhfIUcFuybLLNvS9LBZED55Ix5aAKTQzySBBWhu07Lme7ulGayzFzWfdHOHWjMczXDms1GGMwW+VLB6M5fl2EoZiuy7XetzhEJuvK70bwBpM8MuWAxyyEXixAYVVNiq8CrP915xyQmm3sxjkELy69GZEQiLE4rtu8xuFLiGt79z0QloTS/E78u+80t3fNWSj1NuU3+qUFhXVPMU+WqEeSSI5yBuJMYKeJ+pgCd2Ux7tqDyHmXyHaakQwbf8qNfdYDnkVNJkE1BaxRQDekNcfNFHQnRncqsMG0ynXkoOD/rox0R9vRNj5evLzdF6XhbUccUUA3pDXHzRR0J0Z3KrDBtMp15KDg/66MdEfb0TY+Xry83Rel4W1HHFFAN6Q1x80UdCdGdyqwwbXYePaU88O3M2F6NwUwl9oYBwJkT18D93KQq6/UaLsFbENHCh4Y3Q1ZMxg99cqShfxcWvEsMdd2+SLSB5BWaN8KyG36auc//08yQI3VjO3mu/WZ9P20fQcrIz3aZPYJ8fPQtV+HMNFT61cEX8hDIUAwhpIC7OGWv0CVqxSypXnTUK+oD1b15if9rBMD78Qa5v6fHIoHJP16GWMl2i5GPpmF0wnLGowJokK2znwilPeijQaYXBLRWVJQ82p1yTgxu78MtvjhfaNQydMJyxqMCaJDu8BcvHeno5Y4GuJzHIq8gTc2Mw/PpVg8OD8cgAU7pWwuA0rl+2O8s" />
                            <div
                              className="FormRow FormRow--layout--stacked db-RegisterConsentCheckbox Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--stretch Flex-direction--column">
                              <div className="Box-root">
                                <div className="FormRow-end Box-root" style={{pointerEvents: "none"}}>
                                  <div
                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                    style={{marginLeft: "-16px", marginTop: "-16px"}}>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                         style={{pointerEvents: "auto"}}>
                                      <div className="Box-root Padding-bottom--32" style={{marginLeft: "-1px"}}>
                                        <div className="Box-root Flex-flex Flex-direction--row"
                                             style={{position: "relative"}}>
                                          <div
                                            className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart"
                                            style={{lineHeight: 0, flex: "1 1 auto"}}>
                                            <div className="PressableControlLabel Checkbox Box-root">
                                              <div
                                                className="PressableCore PressableCore--cursor--pointer PressableCore--width PressableControl Box-root Flex-inlineFlex"
                                                style={{backgroundColor: "rgb(255, 255, 255)", height: "14px", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px", borderRadius: "4px", minWidth: "14px", width: "14px"}}>
                                                <div className="PressableCore-base Box-root">
                                                  <div className="Box-root Flex-flex"
                                                       style={{color: "rgb(255, 255, 255)"}}><input aria-invalid="false"
                                                                                                 className="Checkbox-source PressableContext PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--width"
                                                                                                 id="RegisterConsentCheckbox"
                                                                                                 type="checkbox" />
                                                    <div
                                                      className="SVGInline SVGInline--cleaned SVG Checkbox-mark Icon-color Icon-color--inherit Box-root Flex-flex">
                                                      <svg
                                                        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Checkbox-mark-svg Icon-color-svg Icon-color--inherit-svg"
                                                        height="14" width="14" xmlns="http://www.w3.org/2000/svg"
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
                                            </div>
                                            <div className="Box-root Padding-left--4"><label
                                              htmlFor="RegisterConsentCheckbox"><span
                                              className="Text-color--gray Text-fontSize--12 Text-fontWeight--regular Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span><span><span>Email me about product updates and resources. If this box is checked, Stripe will occasionally send helpful and relevant emails. You can</span> </span><a
                                              className="UnstyledLink InlineLink Text-color--blue"
                                              href="#">unsubscribe</a><span> <span>at any time.</span> </span><a
                                              className="UnstyledLink InlineLink Text-color--blue"
                                              href="#">Privacy Policy</a></span></span></label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="FormRow FormRow--layout--stacked db-RegisterSubmitButton Box-root Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-alignItems--stretch Flex-direction--column">
                              <div className="Box-root">
                                <div className="FormRow-end Box-root" style={{pointerEvents: "none"}}>
                                  <div
                                    className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap"
                                    style={{marginLeft: "-16px", marginTop: "-16px"}}>
                                    <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16"
                                         style={{pointerEvents: "auto"}}>
                                      <div className="Box-root Padding-top--4 Flex-flex Flex-direction--column">
                                        <div
                                          className="PressableCore PressableCore--height--jumbo PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableButton Button Button--color--blue Is--disabled Box-root Flex-inlineFlex"
                                          style={{backgroundColor: "rgb(99, 91, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(69, 56, 255, 0.8) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                                          <div className="PressableCore-base Box-root">
                                            <button tabIndex={-1}
                                                    className="UnstyledLink Button-element PressableContext Padding-horizontal--16 Padding-vertical--8 PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--jumbo PressableContext--radius--all PressableContext--width PressableContext--width--maximized"
                                                    type="submit" style={{color: "rgb(255, 255, 255)"}}>
                                              <div
                                                className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--rowReversed"
                                                style={{position: "relative"}}>
                                                <div aria-hidden="true" className="TextAligner Box-root"
                                                     style={{lineHeight: "28px", fontSize: "16px", flex: "0 0 auto"}}></div>
                                                <div
                                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--rowReversed Flex-justifyContent--center"
                                                  style={{width: "100%", lineHeight: 0, flex: "1 1 auto"}}><span
                                                  className="Button-label Text-color--white Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--28 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                                  style={{marginTop: "-1px"}}><span>Create account</span></span></div>
                                              </div>
                                            </button>
                                          </div>
                                          <div
                                            className="PressableCore-overlay PressableCore-overlay--extendBy1 PressableCore-overlay--isVisible Box-root Box-background--white"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <button type="submit">asds</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Box-root Padding-top--12 Flex-flex Flex-justifyContent--center">
                              <div className="Box-root"><span><span><span>Have an account?</span> </span><a className="UnstyledLink InlineLink Text-color--blue"
                                                                                                            href="/login">Sign in</a></span>
                              </div>
                            </div></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="db-RegisterAndLoginLayout-formContainer-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="db-CookieBanner-VerticalSpacer Box-root db-CookieBanner-enter-done"></div>
        <div
          className="db-CookieBanner db-CookieBanner--fixed Box-root Box-background--blue900 Padding-all--16 Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--spaceBetween">
          <span
            className="Text-color--white Text-fontSize--13 Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>We use cookies to improve your experience and for marketing. Read our <a
            target="_blank" className="UnstyledLink ButtonLink db-CookieBanner-CookiePolicyLink Flex-inlineFlex"
            href="https://stripe.com/cookies-policy/legal" rel="noopener noreferrer"><div
            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{position: "relative"}}><div
            aria-hidden="true" className="TextAligner Box-root"
            style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div><div
            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
            style={{lineHeight: 0, flex: "1 1 auto"}}><span
            className="ButtonLink-label Text-color--blue400 Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
            style={{marginTop: "-1px"}}>cookie policy</span></div></div></a> or <a target="_blank"
                                                                                 className="UnstyledLink ButtonLink db-CookieBanner-CookiePolicyLink Flex-inlineFlex"
                                                                                 href="https://stripe.com/cookie-settings"
                                                                                 rel="noopener noreferrer"><div
            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{position: "relative"}}><div
            aria-hidden="true" className="TextAligner Box-root"
            style={{lineHeight: "20px", fontSize: "14px", flex: "0 0 auto"}}></div><div
            className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart"
            style={{lineHeight: 0, flex: "1 1 auto"}}><span
            className="ButtonLink-label Text-color--blue400 Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
            style={{marginTop: "-1px"}}>manage cookies</span></div></div></a>.</span></span>
          <div className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row">
            <div className="Box-root" style={{pointerEvents: "none"}}>
              <div className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
                   style={{marginLeft: "-8px", marginTop: "-8px"}}>
                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8" style={{pointerEvents: "auto"}}>
                  <div
                    className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                    style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                    <div className="PressableCore-base Box-root">
                      <button
                        className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                        type="button" style={{color: "rgb(60, 66, 87)"}}>
                        <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
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
                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8" style={{pointerEvents: "auto"}}>
                  <div
                    className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                    style={{backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px"}}>
                    <div className="PressableCore-base Box-root">
                      <button
                        className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                        type="button" style={{color: "rgb(60, 66, 87)"}}>
                        <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
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
  );
};

export default Register;