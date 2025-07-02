const sendEmail = require('../middlewares/nodmailer');
const Invitation = require('../models/invitation');

module.exports.sendInvitation = async (req, res) => {
 try {
  const { email } = req.body;
 const isEmailAlreadyRegistered = await Invitation.findOne({ email });
 if (isEmailAlreadyRegistered) {
  if (isEmailAlreadyRegistered.registered) {
   return res.status(400).json({ message: 'Email already registered' });
  }
  else {
   return res.status(400).json({ message: 'Email already invited' });
  }
 }
 const invitation = await Invitation.create({ email });
 await sendEmail({
  to: email,
  subject: 'Bienvenue sur Smart Work',
  text: 'Bienvenue sur Smart Work',
  html: `Bienvenue sur Smart Work <a href="http://localhost:4200/authentication/register/${invitation._id}">Cliquez ici pour vous inscrire</a>`,
 });
 return res.status(201).json({ message: 'Invitation successful' });
 } catch (error) {
  console.log(error);
  
  return res.status(500).json({ message: 'Internal server error' });
 }
}

module.exports.getInvitation = async (req, res) => {
 try {
  const { id } = req.params;
  const invitation = await Invitation.findById(id);
  if (!invitation) {
   return res.status(404).json({ message: 'Invitation not found' });
  }else if (invitation.registered) {
   return res.status(400).json({ message: 'Invitation already registered' });
  }
  return res.status(200).json(invitation);
 } catch (error) {
  console.log(error);
  return res.status(500).json({ message: 'Internal server error' });
 }
};