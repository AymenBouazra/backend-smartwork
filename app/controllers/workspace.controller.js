const Workspace = require('../models/workspace');

exports.create = async (req, res) => {
 if (!req.body.name) {
  return res.status(400).send({
   message: "Workspace name can not be empty"
  });
 }
 try {
  await Workspace.create(req.body)
  res.send({ message: "Workspace created successfully!" });
 } catch (err) {
  console.log(err)
  res.status(500).send({
   message: err.message || "Some error occurred while creating the Workspace."
  });
 }
};

exports.getAvailableWorkspaces = async (req, res) => {
  const workspaces = await Workspace.find({ isAvailable: true });
  res.json(workspaces);
};

exports.findAll = async (req, res) => {
 try {
  const { page, limit} = req.query;
  const skip = (page - 1) * limit;
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const total = await Workspace.countDocuments();
  const workspaces = await Workspace.find().skip(skip).limit(limit).sort({ createdAt: -1 }).populate('businessUnit');
  res.send({ data: workspaces, pagination: { total, limit: limitNumber, page: pageNumber}, message: 'Espaces de travail trouvés avec succès' });
 } catch (err) {
  res.status(500).send({
   message: err.message || "Some error occurred while retrieving workspaces."
  });
 }
};

exports.findOne = async (req, res) => {
 try {
  const workspace = await Workspace.findById(req.params.workspaceId);
  if (!workspace) {
   return res.status(404).send({
    message: "Workspace not found with id " + req.params.workspaceId
   });
  }
  res.send(workspace);
 } catch (err) {
  if (err.kind === 'ObjectId') {
   return res.status(404).send({
    message: "Workspace not found with id " + req.params.workspaceId
   });
  }
  return res.status(500).send({
   message: "Error retrieving workspace with id " + req.params.workspaceId
  });
 }
};

exports.update = async (req, res) => {
 if (!req.body.name) {
  return res.status(400).send({
   message: "Workspace name can not be empty"
  });
 }

 try {
  const workspace = await Workspace.findByIdAndUpdate(req.params.workspaceId, {
   name: req.body.name,
   description: req.body.description
  }, { new: true });

  if (!workspace) {
   return res.status(404).send({
    message: "Workspace not found with id " + req.params.workspaceId
   });
  }
  res.send(workspace);
 } catch (err) {
  if (err.kind === 'ObjectId') {
   return res.status(404).send({
    message: "Workspace not found with id " + req.params.workspaceId
   });
  }
  return res.status(500).send({
   message: "Error updating workspace with id " + req.params.workspaceId
  });
 }
};

exports.deleteOne = async (req, res) => {
 try {
  const workspace = await Workspace.findByIdAndRemove(req.params.workspaceId);
  if (!workspace) {
   return res.status(404).send({
    message: "Workspace not found with id " + req.params.workspaceId
   });
  }
  res.send({ message: "Workspace deleted successfully!" });
 } catch (err) {
  if (err.kind === 'ObjectId' || err.name === 'NotFound') {
   return res.status(404).send({
    message: "Workspace not found with id " + req.params.workspaceId
   });
  }
  return res.status(500).send({
   message: "Could not delete workspace with id " + req.params.workspaceId
  });
 }
};
