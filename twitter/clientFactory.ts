import { clientType } from "./constants/clientType"
import TalaVodich from "./clients/TalaVodich"
import DangHoang97 from "./clients/danghoang97"
import HNganhang from "./clients/HNganhang"
import HungDung2292002 from "./clients/hungdung2292002"
import HoangHon0710 from "./clients/HoangHon0710"
import NDungcn from "./clients/NDungcn"
import Dinh2203 from "./clients/Dinh2203"
import IBaseClient from "./clients/IBaseClient"

export default class ClientFactory {
    static getClient(type: string): IBaseClient {
        switch (type) {
            case clientType.TALAVODICH:
                return new TalaVodich()
            case clientType.DANGHOANG97:
                return new DangHoang97()
            case clientType.HNGANHANG:
                return new HNganhang()
            case clientType.NDUNGCN:
                return new NDungcn();
            case clientType.HUNGDUNG2292002:
                return new HungDung2292002()
            case clientType.HOANGHON0710:
                return new HoangHon0710()
            case clientType.DINH2203:
                return new Dinh2203();
            default:
                return new TalaVodich();
        }
    }
}