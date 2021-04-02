import {createEffect, createEvent, createStore} from "effector"
import {ICardInfo} from "../../../api/interfaces/ICardInfo"
import {cardInfo} from "../../../api/cardInfo"
 


export const $cardInfo = createStore<ICardInfo[]>([])

export const updateCardInfo = createEvent<ICardInfo>();
export const resetCardInfo = createEvent();

export const cardInfoDataFx = createEffect(cardInfo)

$cardInfo.on(cardInfoDataFx.doneData, (_, cardData) => cardData)
$cardInfo.reset(resetCardInfo)
