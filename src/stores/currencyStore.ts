import {observable, computed, action} from "mobx";
import {TCoin} from "../types";
import axios from 'axios'

class CurrencyStore {
    @observable private items: TCoin[] = [];

    @computed
    get getItems(){
        return this.items
    }

    @action
    setItems = (items: TCoin[]):void => {
        this.items = items
    }

    @action
    fetchCoins = () => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({data: {Data}}:any) => {
                const coins:TCoin[] = Data.map((el: any) => {
                    const obj: TCoin = {
                        name: el.CoinInfo.Name,
                        fullName: el.CoinInfo.FullName,
                        imageUrl: `https://www.cryptocompare.com${el.CoinInfo.ImageUrl}`,
                        price: (el.RAW.USD.PRICE).toFixed(2),
                        volume24Hour: parseInt(el.RAW.USD.VOLUME24HOUR),
                    }

                    return obj
                })
                this.items = coins
            })
    }
}

export default CurrencyStore