import axios from 'axios'

export function UpVote(userId, commentId) {
  return axios.post('/upvote', {
    user_id: userId,
    comment_id: commentId
  });
}

export function DownVote(userId, commentId) {
  return axios.post('/downvote', {
    user_id: userId,
    comment_id: commentId
  });
}

export function AddComment(userId, parentId, sessionId, title, text) {
  return axios.post('/comment', {
    user_id: userId,
    parent_id: parentId,
    session_id: sessionId,
    title: title,
    text: text
  })
}

export function EditComment(commentId, title, text) {
  return axios.post('/comment', {
    comment_id: commentId,
    title: title,
    text: text
  });
}

export function Comments(sessionId) {
  return axios.get('/comment', {
    params: {
      id: sessionId
    }
  });
}

export function createSession(comment) { // comment will be an object with keys: userId, title, text
  return axios.post('/session', { comment });
}

export function fetchSession(sessionId) {
  return axios.get('/session', {
    params: {
      id: sessionId
    }
  });
}

export function login() {
  return axios.get('/getUser');
}

export function logout() {
  return axios.get('/logout');
}