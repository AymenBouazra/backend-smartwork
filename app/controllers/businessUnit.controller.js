const BusinessUnit = require('../models/businessUnit');

exports.getAll = async (req, res) => {
 try {
  const { page, limit} = req.query;
    const skip = (page - 1) * limit;
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const total = await BusinessUnit.countDocuments();
    const businessUnits = await BusinessUnit.find().skip(skip).limit(limit).sort({ createdAt: -1 });

    res.status(200).send({data: businessUnits, pagination: { total, page: pageNumber, limit: limitNumber }, message: 'Business Units trouvées avec succès' });
 } catch (err) {
  res.status(500).json({ message: err.message || 'Erreur lors de la récupération des Business Units' });
 }
};

exports.getOne = async (req, res) => {
 try {
  const businessUnit = await BusinessUnit.findById(req.params.id);
  res.status(200).json(businessUnit);
 } catch (err) {
  res.status(500).json({ message: err.message || 'Erreur lors de la récupération de la Business Unit' });
 }
};

exports.create = async (req, res) => {
 try {
  const businessUnit = await BusinessUnit.create(req.body);
  res.status(201).json({message: 'Business Unit créée avec succès', businessUnit});
 } catch (err) {
  res.status(500).json({ message: err.message || 'Erreur lors de la création de la Business Unit' });
 }
};

exports.update = async (req, res) => {
 try {
  const businessUnit = await BusinessUnit.findByIdAndUpdate(req.params.id, req.body, { new: true});
  res.status(200).json({message: 'Business Unit mise à jour avec succès', businessUnit});
 } catch (err) {
  res.status(500).json({ message: err.message || 'Erreur lors de la mise à jour de la Business Unit' });
 }
};

exports.delete = async (req, res) => {
 try {
  await BusinessUnit.findByIdAndDelete(req.params.id);
  res.status(200).json({message: 'Business Unit supprimée avec succès'});
 } catch (err) {
  res.status(500).json({ message: err.message || 'Erreur lors de la suppression de la Business Unit' });
 }
};