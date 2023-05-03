import Rest from './_rest.service'

const url = `${Cypress.env('BASE_URL_API')}/usuarios`

export default class User extends Rest {
  static get_user(id) {
    return super.get({ endpoint: `${url}/${id}` })
  }

  static post_user(body) {
    return super.post({ endpoint: url, body })
  }

  static put_user(id, body) {
    return super.put({ endpoint: `${url}/${id}`, body })
  }

  static delete_user(id) {
    return super.delete({ endpoint: `${url}/${id}` })
  }
}
