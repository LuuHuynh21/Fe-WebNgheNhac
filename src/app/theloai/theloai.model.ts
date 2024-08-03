import { BaiHat } from "../baihat/baihat.model";

export interface TheLoai{
    id: Number;
    ma: String;
    ten: String;
    moTa: String;
    ngayTao?: Date;
    ngaySua?: Date;
    baiHats?: BaiHat[];
}