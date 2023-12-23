const Projects = require("../models/project");

const projectController = {
  create: async (req, res) => {
    try {
      const project = {
        name: req.body.name,
        description: req.body.description,
        technology: req.body.technology,
        link: req.body.link,
        image: req.body.image,
      };

      const response = await Projects.create(project);

      res.status(201).json({ response, msg: "projeto criado" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const project = await Projects.find();

      res.json(project);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const project = await Projects.findById(id);

      if (!project) {
        res.status(404).json({ msg: "Projeto não encontrado" });

        return;
      }

      res.json(project)
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;

    const project = await Projects.findById(id);

    if (!project) {
      res.status(404).json({ msg: "Projeto não encontrado" });

      return;
    }

    const deletedProject = await Projects.findByIdAndDelete(id);

    res.status(200).json({ deletedProject, msg: "Projeto excluido" });
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const project = {
        name: req.body.name,
        description: req.body.description,
        technology: req.body.technology,
        link: req.body.link,
        image: req.body.image,
      };

      const updatedProject = await Projects.findByIdAndUpdate(id, project);

      if (!updatedProject) {
        res.status(404).json({ msg: "Projeto não encontrado" });
        return;
      }

      res.status(200).json({ project, msg: "Projeto atualizado" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = projectController;
