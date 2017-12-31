import { saga as peopleSaga } from '../ducks/people';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    peopleSaga(),
  ]);
}
