class ThirdPartyApi {
  constructor({baseUrl}){
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
  searchSeries(query){
    return fetch(`${this.baseUrl}/search/shows?q=${query}`)
      .then((res) => {
        return this._checkResponse(res);
      });
  }
}

export const api = new ThirdPartyApi({ baseUrl: "https://api.tvmaze.com"})