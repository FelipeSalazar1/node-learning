const AppError = require("../utils/AppError");

class UsersController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específicp
   * create - POST para criar um registro.
   * update - PUT atualizar um registro
   * delete - DELETE para remover um registro
   */

  create(request, response) {
    const { name, email, password } = request.body;

    if (!name) throw new AppError("Nome Obrigatório");

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;