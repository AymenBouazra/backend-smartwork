const User = require('../models/user');

exports.createUser = async (req, res) => {
 try {
  const user = new User(req.body);
  await user.save();
  res.status(201).send({ message: 'Utilisateur créé avec succès' });
 } catch (error) {
  res.status(400).send(error);
 }
};

exports.getAllUsers = async (req, res) => {
 try {
  const { page, limit} = req.query;
  const skip = (page - 1) * limit;
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const total = await User.countDocuments();
  const users = await User.find().skip(skip).limit(limit).sort({ createdAt: -1 });
  
  res.status(200).send({data: users, pagination: { total, page: pageNumber, limit: limitNumber }, message: 'Utilisateurs trouvés avec succès' });
 } catch (error) {
  res.status(500).send(error);
 }
};

exports.getUserById = async (req, res) => {
 try {
  const user = await User.findById(req.params.id,{ password: 0 });
  if (!user) {
   return res.status(404).send();
  }
  res.status(200).send(user);
 } catch (error) {
  res.status(500).send(error);
 }
};

exports.updateUserById = async (req, res) => {
 try {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) {
   return res.status(404).send();
  }
  res.status(200).send({ message: 'Utilisateur modifié avec succès' });
 } catch (error) {
  res.status(400).send(error);
 }
};

exports.deleteUserById = async (req, res) => {
 try {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
   return res.status(404).send();
  }
  res.status(200).send({ message: 'Utilisateur supprimé avec succès' });
 } catch (error) {
  res.status(500).send(error);
 }
};
