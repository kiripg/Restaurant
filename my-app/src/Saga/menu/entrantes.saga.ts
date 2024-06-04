import {call, put, takeLatest} from 'redux-saga/effects';
import { EntrantesAPI } from '../../Api/provider/menu/menu';
import { entrantesAction, entrantesFailedAction, entrantesSuccessAction } from '../../Store/menu/entrantes.store';
import { ApiResponse } from '../../Api/request';

function* getEntrantes(){
        try{
            const response : ApiResponse = yield call(EntrantesAPI);
            yield put (entrantesSuccessAction(response.data))
        }catch(error:any){
            yield put(entrantesFailedAction(error.localizedMessage));
        }
}

export function* entrantesSaga(){
    yield takeLatest(entrantesAction.type, getEntrantes);
}