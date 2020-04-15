class Schemes {
  /**
   *
   * @returns {{type: string, required: [string, string, string, string, string],
   * properties: {phone: {type: string}, name: {type: string},
   * positions: {type: string}, location: {type: string}, email: {type: string}}}}
   */
  addEmployeeSchemeRequest() {
    return {
      type: 'object',
      required: ['name', 'positions', 'phone', 'location', 'email'],
      properties: {
        name: { type: 'string' },
        positions: { type: 'string' },
        phone: { type: 'string' },
        location: { type: 'string' },
        email: { type: 'string' },
      },
    };
  }

  /**
   *
   * @returns {{allOf: [{required, properties: {phone: {type: string},
   * name: {type: string}, positions: {type: string}, location: {type: string},
   * id: {uniqueItems: boolean, type: string}, email: {type: string}}}]}}
   */
  getEmployeeSchemeResponse() {
    return {
      allOf: [
        {
          required: ['id', 'name', 'positions', 'phone', 'location', 'email'],
          properties: {
            id: { type: 'integer', uniqueItems: true },
            name: { type: 'string' },
            positions: { type: 'string' },
            phone: { type: 'string' },
            location: { type: 'string' },
            email: { type: 'string' },
          },
        },
      ],
    };
  }

  /**
   *
   * @returns {{type: string, required: [string],
   * properties: {id: {type: string}}}}
   */
  deleteEmployeeSchemeRequest() {
    return {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'integer' },
      },
    };
  }
}

module.exports = Schemes;
