import { BaiHat } from "../baihat/baihat.model";

export interface NgheSi{
    id: Number;
    ma: String;
    ten: String;
    moTa: String;
    hinhAnh: String;
    ngayTao?: Date;
    ngaySua?: Date;
    baiHats?: BaiHat[];
}