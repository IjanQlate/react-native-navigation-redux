import { put,call, all, fork, takeLatest } from 'redux-saga/effects';

function* changeNameSaga(action) {
   try {
     const response = yield fetch('https://facebook.github.io/react-native/movies.json')
       .then(r => r.json());
       alert(JSON.stringify(response))
   } catch (e) {
     alert(JSON.stringify(e))
   }
}
function* userWatcher() {
 yield takeLatest('CHANGE_NAME', changeNameSaga);
}
export default function* func() {
 yield all([fork(userWatcher)]);
}

