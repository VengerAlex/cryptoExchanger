import {observable, computed, action} from "mobx";
import {TCoin} from "../types";

class ConverterStore {
    @observable public items: TCoin[];

    constructor(initItems: TCoin[]) {
        this.items = initItems;
    }
}

export default ConverterStore