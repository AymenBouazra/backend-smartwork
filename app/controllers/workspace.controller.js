const Workspace = require('../models/workspace');

exports.create = async (req, res) => {
 if (!req.body.name) {
  return res.status(400).send({
   message: "Workspace name can not be empty"
  });
 }

 const workspace = new Workspace({
  name: req.body.name,
  description: req.body.description
 });

 try {
  const data = await workspace.save();
  res.send(data);
 } catch (err) {
  res.status(500).send({
   message: err.message || "Some error occurred while creating the Workspace."
  });
 }
};

exports.findAll = async (req, res) => {
 try {
  const workspaces = await Workspace.find();
  res.send(workspaces);
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

exports.delete = async (req, res) => {
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
