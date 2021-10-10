import ConverterStore from "./conversterStore";
import CurrencyStore from "./currencyStore";

const stores = {
    converterStore: new ConverterStore([]),
    currencyStore: new CurrencyStore()
}

export default stores