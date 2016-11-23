import { fetchJson, fetchJsonWithToken } from './common'

export default {
  updateSellPost(token, id, sellpost) {
    return fetchJsonWithToken(token, '/api/sellpost/update',
    {
      method: 'POST',
      body: JSON.stringify({ id, sellpost }),
    })      
  },

  getSellPost(id){
    return fetchJson(`/api/sellpost/index/${id}`)
  },
  
  getSellPosts(page, limit=10){
    return fetchJson(`/api/sellpost?page=${page}&limit=${limit}`)
  }
}