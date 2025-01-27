const { Op }=require('sequelize');

const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where= {};
    //Se existirem os param, criar uma prop {}
    data_inicial || data_final ? where.data_inicio={} : null;
    //Se existir data inicial, adiciona a propriedade gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    // Se existir data final,idem
    data_final ? where.data_inicio[Op.lte] = data_final : null;
    //Exemplo de requisição: http://localhost:3000/cursos?data_inicial=2023-01-01&data_final=2023-03-01
    try {
      const listaCursos=await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

}

module.exports = CursoController;
