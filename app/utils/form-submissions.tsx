/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import SGMail, { type MailDataRequired } from '@sendgrid/mail';

const validateName = (name?: FormDataEntryValue | null) => {
  if (!name) {
    return 'Please enter your name';
  } else if (typeof name !== 'string' || name.length < 3) {
    return `Name must be at least 3 characters long`;
  }
};

const validateEmail = (email?: FormDataEntryValue | null) => {
  if (!email) {
    return 'Email address is Required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email as string)) {
    return 'Invalid emaill address';
  }
};

const validateContactFields = (title: string, name?: FormDataEntryValue | null) => {
  if (!name) {
    return `${title} is required`;
  }
};

export const submitNewsletterForm = async ({ formData }: { formData: FormData }) => {
  const API_URL = process.env.CONVERTKIT_API;
  const API_KEY = process.env.CONVERTKIT_API_KEY;
  const FORM_ID = process.env.CONVERTKIT_FORM_ID;

  const email = formData.get('email');
  const name = formData.get('name');

  const formErrors = {
    name: validateName(name),
    email: validateEmail(email)
  };

  if (Object.values(formErrors).some(Boolean)) {
    return { formErrors };
  }

  const res = await fetch(`${API_URL as string}/forms/${FORM_ID as string}/subscribe`, {
    method: 'post',
    body: JSON.stringify({ email, name, api_key: API_KEY }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });

  return await res.json();
};

export const submitContactForm = ({ formData }: { formData: FormData }) => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const EMAIL_FROM = process.env.EMAIL_FROM;

  const firstName = formData.get('first-name');
  const lastName = formData.get('last-name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const comments = formData.get('comments');

  const formErrors = {
    firstName: validateContactFields('First name', firstName),
    lastName: validateContactFields('Last name', lastName),
    email: validateEmail(email),
    subject: validateContactFields('Subject', subject),
    comments: validateContactFields('Comments', comments)
  };

  if (Object.values(formErrors).some(Boolean)) {
    return { formErrors };
  }

  const name = `${firstName as string} ${lastName as string}`;

  const fields = { name, email, comments };

  SGMail.setApiKey(SENDGRID_API_KEY as string);

  const mailOptions = {
    to: EMAIL_FROM,
    from: EMAIL_FROM,
    subject: `English everyday: ${subject as string}`,
    text: `${comments as string} from ${email as string}`,
    html: `<body>
      <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#8ac6e4;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#8ac6e4">
            <tbody><tr>
              <td valign="top" bgcolor="#8ac6e4" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tbody><tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody><tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tbody><tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tbody><tr>
      <td role="module-content">
        <p></p>
      </td>
    </tr>
  </tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d183330a-b472-4d94-aada-17d3e7e5ef32">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/9175aca26a5060e6/f12cacba-35ce-4c19-9ec6-4f564888908b/394x296.jpg">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2eaa1320-3501-4e1a-a65b-42b9dd580c6a">
    <tbody>
      <tr>
        <td style="padding:16px 16px 0px 16px;" role="module-content" height="100%" valign="top" bgcolor="">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
            <tbody>
              <tr>
                <td style="padding:0px 0px 1px 0px;" bgcolor="#000000"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="337b3c77-d938-4c6c-a282-b5330a03c967" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:16px 16px 16px 16px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 18px"><strong>Email from: ${name}</strong></span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: center"><span style="font-size: 18px; color: #ff0000"><em><strong>Please response to ${
      email as string
    }</strong></em></span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d1bb7942-ad80-4c1f-a054-bb912ee8ba76">
    <tbody>
      <tr>
        <td style="padding:8px 16px 8px 16px;" role="module-content" height="100%" valign="top" bgcolor="">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
            <tbody>
              <tr>
                <td style="padding:0px 0px 1px 0px;" bgcolor="#000000"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d8a6b5f-32bb-457f-bb5a-350a03e7dc12" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:18px 16px 18px 16px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: left"><span style="font-size: 18px"><strong>Message:&nbsp;</strong></span></div>
<div style="font-family: inherit; text-align: left"><span style="font-size: 18px">${
      comments as string
    }</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"></div><p style="font-size:12px; line-height:20px;"><a target="_blank" class="Unsubscribe--unsubscribeLink zzzzzzz" href="{{{unsubscribe}}}" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p></div></td>
                                      </tr>
                                    </tbody></table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </div>
      </center>
    
  </body>`
  };

  SGMail.send(mailOptions as MailDataRequired)
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      console.log(error);
      return { error };
    });

  return { success: true, fields };
};
