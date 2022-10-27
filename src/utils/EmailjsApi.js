import { data } from './dataEmailjsApi';

class EmailjsApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._serviceId = options.service_id;
    this._templateId = options.template_id;
    this._userId = options.user_id;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res;
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  sendEmail(params) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        service_id: this._serviceId,
        template_id: this._templateId,
        user_id: this._userId,
        template_params: params,
      }),
    }).then(this._checkResponse);
  }
}

export const emailApi = new EmailjsApi({
  url: 'https://api.emailjs.com/api/v1.0/email/send',
  headers: {
    'Content-Type': 'application/json',
  },
  service_id: data.service_id,
  template_id: data.template_id,
  user_id: data.user_id,
});
