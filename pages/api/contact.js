export default function (req, res) {
  const htmlSendToAdmin = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
  
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
            <p style="margin: 0;">A request has been received from LoveCare. See below for more information:</p>
          </td>
        </tr>
        <tr>
            <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
                <p style="text-align:left; padding-top: 10px;">
                    <i><strong>Name: </strong>${req.body.fullName}</i><br>
                    <i><strong>Email address: </strong>${req.body.email}</i><br>
                    <i><strong>Phone number: </strong>${req.body.phone}</i><br>
                    <i><strong>Project type: </strong>${req.body.discussionFor}</i><br>
                    <i><strong>Project description: </strong>${req.body.message}</i><br>
                </p>
              </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
            <tr>
                <td style="width: 90px;">
                    <img style="width: 90px;" src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/06/dark-logo-1-1-1.png"/>
                </td>
                <td style="width: 3px; background-color: #5bb286;"></td>
                <td style="width: 430px; padding-left: 10px;">
  
                      <p style="color:#5bb286; margin: 0 12px;"> 
                        <strong>Business Development</strong>
                        <p style="font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #5bb286;">a:</strong>  LoveCare | Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                        </p>
                        <p style= "font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #5bb286;">e:</strong> <a class="fa" href="mailto:info@lovecare.com"  style="color:darkgreen; text-decoration: underline;">info@lovecare.com</a>
                            | <strong  style="color: #5bb286;">w:</strong> <a class="fa" href="https://www.lovecare.com" target="blank" style="color:darkgreen; text-decoration: underline;">www.lovecare.com</a>
                        </p>
                        <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                            <strong style="color: #5bb286;">p:</strong>  +2(305) 587-3407 
                        </p>
                        <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/facebook_oyux7x.png" width="17px" height='17px' />
                        </a>
                        <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/twitter_xtggj5.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/linkedin_gsg3o6.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/instagram_wtunc4.png" width="17px" height='17px' />
                        </a>
                      </p>
                </td>
            </tr>
      </table>
    </td>
  </tr>
  </table>`;

  const htmlSendToUser = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
  
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
            <p style="margin: 0;">Thankyou for your interest in LoveCare</p>
            <p style="margin-top: 15px;">Our team will be in coordination with you shortly</p>
            <p style="margin-top: 30px;">To learn more about LoveCare, please visit our website at <a class="fa" href="https://www.lovecare.com" target="blank" style="color:darkgreen; text-decoration: underline;">www.lovecare.com</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
            <tr>
                <td style="width: 90px;">
                    <img style="width: 90px;" src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/06/dark-logo-1-1-1.png"/>
                </td>
                <td style="width: 3px; background-color: #5bb286;"></td>
                <td style="width: 430px; padding-left: 10px;">
  
                      <p style="color:#5bb286; margin: 0 12px;"> 
                        <strong>Business Development</strong>
                        <p style="font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #5bb286;">a:</strong>  LoveCare | Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                        </p>
                        <p style= "font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #5bb286;">e:</strong> <a class="fa" href="mailto:info@lovecare.com"  style="color:darkgreen; text-decoration: underline;">info@lovecare.com</a>
                            | <strong  style="color: #5bb286;">w:</strong> <a class="fa" href="https://www.lovecare.com" target="blank" style="color:darkgreen; text-decoration: underline;">www.lovecare.com</a>
                        </p>
                        <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                            <strong style="color: #5bb286;">p:</strong>  +2(305) 587-3407 
                        </p>
                        <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/facebook_oyux7x.png" width="17px" height='17px' />
                        </a>
                        <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/twitter_xtggj5.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/linkedin_gsg3o6.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/hassaan/image/upload/v1613464447/instagram_wtunc4.png" width="17px" height='17px' />
                        </a>
                      </p>
                </td>
            </tr>
      </table>
    </td>
  </tr>
  </table>`;

  try {
    const nodemailer = require("nodemailer");

    console.log("body is > ", req.body);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      ssl: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: "eforte.devel@gmail.com", // generated ethereal user
        pass: "fvqprrsbtipnpqzz", // generated ethereal password
      },
    });

    transporter.sendMail(
      {
        from: req.body.email, // sender address
        to: "hassaan.eforte@gmail.com", // list of receivers
        subject: "Request for contact from LoveCare", // Subject line
        // text: "From love care", // plain text body
        html: htmlSendToAdmin, // html body
      },
      (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          transporter.sendMail(
            {
              from: "hassaan.eforte@gmail.com", // sender address
              to: req.body.email, // list of receivers
              subject: "Thankyou for your interest in LoveCare", // Subject line
              // text: "From love care", // plain text body
              html: htmlSendToUser, // html body
            },
            (err, data) => {
              if (err) {
                throw new Error(err);
              } else {
                console.log("info is > ", data);
                return res.status(200).json({
                  statusCode: 200,
                  data: data,
                });
              }
            }
          );

          // console.log("info is > ", data);
          // return res.status(200).json({
          //   statusCode: 200,
          //   data: data,
          // });
        }
      }
    );
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      error: error.message,
    });
  }
}
